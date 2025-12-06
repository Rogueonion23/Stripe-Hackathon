import { useState } from "react";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const initialMessages: Message[] = [
  {
    role: "assistant",
    content: "Bună! Sunt agentul tău de comerț local. 🛒 Spune-mi ce cauți și îți voi găsi cele mai bune opțiuni de la afaceri mici și locale din România.",
  },
];

const mockResponses: Record<string, string> = {
  default: "Căutăm în baza noastră de date... Am găsit 12 opțiuni care corespund cerințelor tale de la producători locali verificați! Vrei să îți arăt rezultatele sau să rafinăm căutarea?",
  tricou: "Am găsit 3 ateliere locale care produc tricouri 100% bumbac:\n\n🏷️ **Atelier Craiova** - Tricou portocaliu, bumbac organic, 89 RON\n🏷️ **HandMade Cluj** - Tricou sunset orange, 79 RON\n🏷️ **Local Wear București** - Tricou teracotă, 95 RON\n\nToate sunt de la producători verificați. Vrei detalii despre vreunul?",
  miere: "Am identificat 5 apicultori locali în zona ta:\n\n🍯 **Stupina Moșului** - Miere de salcâm, Brașov, 45 RON/500g\n🍯 **Albina de Aur** - Miere polifloră, Sibiu, 38 RON/500g\n🍯 **Prisaca Naturală** - Miere de tei, Cluj, 42 RON/500g\n\nToți au certificări de calitate. Adaug ceva în coș?",
};

const ChatDemo = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      let response = mockResponses.default;
      if (input.toLowerCase().includes("tricou")) {
        response = mockResponses.tricou;
      } else if (input.toLowerCase().includes("miere")) {
        response = mockResponses.miere;
      }

      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section id="demo" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Încearcă Agentul
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            O demonstrație interactivă a experienței conversaționale
          </p>
        </div>

        <Card variant="chat" className="max-w-3xl mx-auto">
          {/* Chat Header */}
          <div className="p-4 border-b border-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Bot className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground">LocalAgent AI</h3>
              <p className="text-xs text-muted-foreground font-body">Conectat • Gata să ajute</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === "user" ? "bg-secondary" : "bg-primary"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className="w-4 h-4 text-secondary-foreground" />
                  ) : (
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] p-4 rounded-2xl font-body text-sm whitespace-pre-wrap ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-sm"
                      : "bg-card border border-border text-foreground rounded-tl-sm"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-card border border-border rounded-2xl rounded-tl-sm p-4">
                  <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="relative">
              <Input
                variant="search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Scrie un mesaj..."
                className="pr-12"
              />
              <Button
                variant="chat"
                size="icon"
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-1.5 top-1/2 -translate-y-1/2"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center font-body">
              Încearcă: "tricou portocaliu" sau "miere de albine"
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ChatDemo;
