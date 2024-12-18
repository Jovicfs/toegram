import React from 'react';
import type { Story } from '@/types';

interface StoriesProps {
  stories: Story[];
}

export function Stories({ stories }: StoriesProps) {
  return (
    <div className="bg-white border rounded-lg mb-4 p-4">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0">
            <div className={`w-16 h-16 rounded-full ring-2 p-0.5 ${story.viewed ? 'ring-gray-200' : 'ring-gradient-to-tr from-yellow-400 to-pink-600'}`}>
              <img
                src={story.user.avatar}
                alt={story.user.username}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <span className="text-xs truncate w-16 text-center">{story.user.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
}