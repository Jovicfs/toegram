import React from 'react';
import { Heart, MessageCircle, PlusSquare } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b z-50">
      <div className="max-w-screen-md mx-auto px-4 h-14 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Instagram</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2">
            <PlusSquare size={24} />
          </button>
          <button className="p-2">
            <Heart size={24} />
          </button>
          <button className="p-2">
            <MessageCircle size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}