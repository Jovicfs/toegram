import type { User } from './index';

export interface Message {
  id: string;
  content: string;
  fromMe: boolean;
  timestamp: string;
}

export interface Conversation {
  id: string;
  user: User;
  lastMessage: string;
  messages: Message[];
}