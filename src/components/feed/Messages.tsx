import React, { useState } from 'react';
import { useMessages } from '@/context/MessagesContext';
import { Search, Edit } from 'lucide-react';

export function Messages() {
  const { conversations, activeConversation, setActiveConversation } = useMessages();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex-1 flex">
      {/* Conversations List */}
      <div className="w-96 border-r bg-white">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Messages</h2>
            <button>
              <Edit size={20} />
            </button>
          </div>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-200"
            />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-89px)]">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setActiveConversation(conversation)}
              className={`w-full p-4 flex items-center space-x-3 hover:bg-gray-50 ${activeConversation?.id === conversation.id ? 'bg-gray-100' : ''
                }`}
            >
              <img
                src={conversation.user.avatar}
                alt={conversation.user.username}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1 text-left">
                <p className="font-semibold">{conversation.user.username}</p>
                <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Active Conversation */}
      {activeConversation ? (
        <div className="flex-1 flex flex-col bg-white">
          <div className="p-4 border-b flex items-center space-x-3">
            <img
              src={activeConversation.user.avatar}
              alt={activeConversation.user.username}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-semibold">{activeConversation.user.username}</span>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            {activeConversation.messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.fromMe ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-2xl ${message.fromMe ? 'bg-blue-500 text-white' : 'bg-gray-100'
                    }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <input
              type="text"
              placeholder="Message..."
              className="w-full px-4 py-2 rounded-full border focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Your Messages</h3>
            <p className="text-gray-500">Send private photos and messages to a friend or group</p>
          </div>
        </div>
      )}
    </div>
  );
}