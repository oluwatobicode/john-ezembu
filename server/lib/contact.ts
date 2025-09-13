interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}

// In-memory store for rate limiting (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 3; // 3 requests per minute per IP

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const existing = rateLimitStore.get(ip);
  
  if (!existing || now > existing.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  existing.count++;
  return true;
}

export function validateContactForm(data: any): ContactFormData | null {
  if (!data || typeof data !== 'object') {
    return null;
  }

  const { name, email, subject, message } = data;

  // Basic validation
  if (!name || !email || !subject || !message) {
    return null;
  }

  if (typeof name !== 'string' || typeof email !== 'string' || 
      typeof subject !== 'string' || typeof message !== 'string') {
    return null;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return null;
  }

  // Length validation
  if (name.length > 100 || email.length > 255 || 
      subject.length > 200 || message.length > 2000) {
    return null;
  }

  // Basic honeypot/spam detection
  if (message.includes('http://') || message.includes('https://')) {
    // Allow legitimate URLs but be suspicious of obvious spam
    const urlCount = (message.match(/https?:\/\//g) || []).length;
    if (urlCount > 2) {
      return null;
    }
  }

  return {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject: subject.trim(),
    message: message.trim()
  };
}

export async function processContactForm(data: ContactFormData): Promise<ContactResponse> {
  try {
    // In a real implementation, you would:
    // 1. Send email via service like SendGrid, AWS SES, or Nodemailer
    // 2. Store in database for record keeping
    // 3. Send confirmation email to sender
    
    console.log("Contact form submission:", {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      timestamp: new Date().toISOString()
    });

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Here you would integrate with an email service:
    /*
    await emailService.send({
      to: 'johnezembu12@gmail.com',
      from: 'noreply@johnezembu.com',
      subject: `Portfolio Contact: ${data.subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `
    });
    */

    return {
      success: true,
      message: "Message sent successfully! Thank you for reaching out."
    };
  } catch (error) {
    console.error("Contact form processing error:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later."
    };
  }
}
