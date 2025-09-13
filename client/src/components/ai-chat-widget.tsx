import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface ChatResponse {
  response: string;
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: "Hi! I'm John's AI assistant. Ask me about his experience, skills, projects, or anything else you'd like to know!",
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const chatMutation = useMutation({
    mutationFn: (message: string) => apiRequest("POST", "/api/chat", { message }),
    onSuccess: (response: ChatResponse) => {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        content: response.response,
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);
    },
    onError: (error: any) => {
      toast({
        title: "Chat Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive"
      });
    }
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || chatMutation.isPending) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    chatMutation.mutate(input.trim());
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="ai-chat-widget">
      {/* Chat Bubble */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="w-14 h-14 rounded-full shadow-lg p-0"
              data-testid="chat-bubble"
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-80 h-96"
            data-testid="chat-window"
          >
            <Card className="w-full h-full shadow-xl flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-border flex items-center justify-between bg-card rounded-t-lg">
                <div>
                  <h3 className="font-semibold text-foreground" data-testid="chat-title">
                    Ask me anything!
                  </h3>
                  <p className="text-xs text-muted-foreground">Powered by AI</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="p-2"
                  data-testid="close-chat"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3" data-testid="chat-messages">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-2 ${
                      message.role === 'user' ? 'justify-end' : ''
                    }`}
                    data-testid={`chat-message-${message.role}`}
                  >
                    {message.role === 'assistant' && (
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground ml-auto'
                          : 'bg-secondary/50 text-foreground'
                      }`}
                    >
                      {message.content}
                    </div>

                    {message.role === 'user' && (
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                    )}
                  </div>
                ))}

                {chatMutation.isPending && (
                  <div className="flex items-start space-x-2" data-testid="chat-loading">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                    <div className="bg-secondary/50 p-3 rounded-lg text-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border">
                <form onSubmit={handleSubmit} className="flex space-x-2" data-testid="chat-form">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your question..."
                    className="flex-1"
                    disabled={chatMutation.isPending}
                    data-testid="chat-input"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    disabled={!input.trim() || chatMutation.isPending}
                    data-testid="send-message"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-2">
                  Powered by AI to answer questions about John's experience and projects.
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
