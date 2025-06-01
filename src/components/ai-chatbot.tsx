"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetDescription } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Loader2, Send, User } from "lucide-react";
import { chatbotAssistant, type ChatbotAssistantInput, type ChatbotAssistantOutput } from "@/ai/flows/chatbot-assistant";
import { ChatMessage, type ChatMessageProps } from "./chat-message";
import { useToast } from "@/hooks/use-toast";

export function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageProps[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: ChatMessageProps = { role: "user", content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const input: ChatbotAssistantInput = { question: inputValue };
      const result: ChatbotAssistantOutput = await chatbotAssistant(input);
      const assistantMessage: ChatMessageProps = { role: "assistant", content: result.answer };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: ChatMessageProps = { role: "system", content: "Sorry, I encountered an error. Please try again." };
      setMessages((prev) => [...prev, errorMessage]);
      toast({
        title: "Chatbot Error",
        description: "Could not get a response from the assistant.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
       setMessages([{ role: "assistant", content: "Hello! How can I help you with SiteQuick Personal services, pricing, or delivery times today?" }]);
    }
  }, [isOpen, messages.length]);


  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="default"
            size="icon"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl bg-primary hover:bg-primary/90"
            aria-label="Open Chatbot"
          >
            <Bot className="h-7 w-7 text-primary-foreground" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full max-w-md flex flex-col p-0">
          <SheetHeader className="p-4 border-b">
            <SheetTitle className="font-headline flex items-center gap-2">
              <Bot className="h-6 w-6 text-primary" /> SiteQuick Assistant
            </SheetTitle>
            <SheetDescription>
              Ask me about services, pricing, or delivery times.
            </SheetDescription>
          </SheetHeader>
          <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <ChatMessage key={index} role={msg.role} content={msg.content} />
              ))}
              {isLoading && (
                 <div className="flex items-start space-x-3 py-3 justify-start">
                    <Bot className="h-8 w-8 shrink-0 text-primary" />
                    <div className="max-w-xs rounded-lg px-4 py-3 shadow-md lg:max-w-md bg-card text-card-foreground">
                        <Loader2 className="h-5 w-5 animate-spin text-primary" />
                    </div>
                 </div>
              )}
            </div>
          </ScrollArea>
          <SheetFooter className="p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
              <Input
                type="text"
                placeholder="Type your question..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow"
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()} className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
