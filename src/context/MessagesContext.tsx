import React, { createContext, useContext, useState } from 'react';
import { mockConversations } from '../data';
import type { Message, Conversation } from '../types/messages';

interface MessagesContextType {
    conversations: Conversation[];
    activeConversation: Conversation | null;
    setActiveConversation: (conversation: Conversation) => void;
}

const MessagesContext = createContext<MessagesContextType | undefined>(undefined);

export function MessagesProvider({ children }: { children: React.ReactNode }) {
    const [conversations, setConversations] = useState(mockConversations);
    const [activeConversation, setActiveConversation] = useState<Conversation | null>(null);

    return (
        <MessagesContext.Provider
            value={{
                conversations,
                activeConversation,
                setActiveConversation,
            }}
        >
            {children}
        </MessagesContext.Provider>
    );
}

export function useMessages() {
    const context = useContext(MessagesContext);
    if (context === undefined) {
        throw new Error('useMessages must be used within a MessagesProvider');
    }
    return context;
}