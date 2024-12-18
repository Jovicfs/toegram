import React, { useState } from 'react';
import { Image, Send } from 'lucide-react';

export function CreatePost() {
  const [content, setContent] = useState('');

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
      <div className="flex items-start space-x-3">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Current user"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening?"
            className="w-full resize-none border-none focus:ring-0 text-gray-800 placeholder-gray-400"
            rows={3}
          />
          <div className="flex items-center justify-between mt-3">
            <button className="text-blue-500 hover:text-blue-600">
              <Image size={20} />
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-1.5 rounded-full font-medium hover:bg-blue-600 flex items-center space-x-2"
              disabled={!content.trim()}
            >
              <Send size={16} />
              <span>Post</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}