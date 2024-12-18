import React from 'react';
import { Home, Search, PlayCircle, ShoppingBag } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="max-w-screen-md mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <button className="p-2">
            <Home size={24} />
          </button>
          <button className="p-2">
            <Search size={24} />
          </button>
          <button className="p-2">
            <PlayCircle size={24} />
          </button>
          <button className="p-2">
            <ShoppingBag size={24} />
          </button>
          <button className="p-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              alt="Profile"
              className="w-6 h-6 rounded-full object-cover"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}