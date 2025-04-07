
import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '../context/CartContext';
import { foodItems } from '../data/mockData';
import { toast } from 'sonner';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: '1',
    text: 'Hello! I\'m FoodMunch Assistant. How can I help you today? You can ask me about menu items, place an order, or get assistance with anything else!',
    sender: 'bot',
    timestamp: new Date(),
  },
];

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Process the message and generate a response
    setTimeout(() => {
      const botResponse = generateBotResponse(input);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    let responseText = '';
    
    // Check if it's an order request
    if (input.includes('order') || input.includes('want') || input.includes('like')) {
      const matchedFood = findFoodItem(input);
      
      if (matchedFood) {
        responseText = `I've added ${matchedFood.name} to your cart! Would you like anything else?`;
        addToCart(matchedFood);
        toast.success(`${matchedFood.name} added to cart`);
      } else {
        responseText = "I'd be happy to help you order. Could you tell me which specific items you'd like from our menu?";
      }
    } 
    // Check if asking about menu
    else if (input.includes('menu') || input.includes('what do you have')) {
      responseText = "We have a variety of delicious items on our menu including burgers, pizza, salads, and more. You can check out our complete menu in the Menu section. Would you like me to recommend something?";
    }
    // Check if it's a greeting
    else if (input.includes('hi') || input.includes('hello') || input.includes('hey')) {
      responseText = "Hello! How can I assist you with your food order today?";
    }
    // Check if asking for recommendations
    else if (input.includes('recommend') || input.includes('suggestion') || input.includes('what\'s good')) {
      responseText = "I'd recommend our Deluxe Cheeseburger, Margherita Pizza, and Caesar Salad - they're customer favorites! Would you like to order any of these?";
    }
    // Default response
    else {
      responseText = "I'm here to help with your food order. You can ask about our menu, place an order, or get recommendations. How can I assist you today?";
    }
    
    return {
      id: Date.now().toString(),
      text: responseText,
      sender: 'bot',
      timestamp: new Date()
    };
  };

  const findFoodItem = (input: string) => {
    return foodItems.find(item => input.toLowerCase().includes(item.name.toLowerCase()));
  };

  return (
    <>
      {/* Chat toggle button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-food-orange hover:bg-food-orange/90 text-white p-0 flex items-center justify-center shadow-lg z-50"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-gray-200">
          {/* Chat header */}
          <div className="bg-food-orange text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">FoodMunch Assistant</h3>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleChat}
              className="text-white hover:bg-food-orange/80 h-8 w-8"
            >
              <X size={18} />
            </Button>
          </div>
          
          {/* Chat messages */}
          <div className="h-96 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-food-orange text-white rounded-tr-none'
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t">
            <div className="flex">
              <Input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow mr-2"
              />
              <Button type="submit" className="bg-food-orange hover:bg-food-orange/90">
                <Send size={18} />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
