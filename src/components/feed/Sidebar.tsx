import React from 'react';
import {
  Home,
  Search,
  PlayCircle,
  Heart,
  PlusSquare,
  MessageCircle,
  Menu,
  Compass,
  BookMarked
} from 'lucide-react';
import { InstagramLogo } from './InstagramLogo';

interface SidebarProps {
  activeTab: 'feed' | 'messages';
  setActiveTab: (tab: 'feed' | 'messages') => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="w-64 h-fit-screen">
      <div className="w-64 border-r bg-white h-full flex flex-col py-4 px-3 fixed top-0 left-0">
        <div className="px-3 py-4">
          <InstagramLogo />
        </div>

        <nav className="flex-1 space-y-1">
          <button
            onClick={() => setActiveTab('feed')}
            className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg ${activeTab === 'feed' && 'font-bold'
              }`}
          >
            <Home size={24} />
            <span>Home</span>
          </button>

          <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg">
            <Search size={24} />
            <span>Search</span>
          </button>

          <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg">
            <Compass size={24} />
            <span>Explore</span>
          </button>

          <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg">
            <PlayCircle size={24} />
            <span>Reels</span>
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`w-full flex items-center space-x-3 px-3 py-3 rounded-lg ${activeTab === 'messages' && 'font-bold'
              }`}
          >
            <MessageCircle size={24} />
            <span>Messages</span>
          </button>

          <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg">
            <Heart size={24} />
            <span>Notifications</span>
          </button>

          <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg">
            <PlusSquare size={24} />
            <span>Create</span>
          </button>

          <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg">
            <BookMarked size={24} />
            <span>Saved</span>
          </button>
        </nav>

        <button className="w-full flex items-center space-x-3 px-3 py-3 rounded-lg mt-auto">
          <Menu size={24} />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}