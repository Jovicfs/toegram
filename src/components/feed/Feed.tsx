import React from 'react';
import { Stories } from './Stories';
import { Post } from './Post';
import { CreatePost } from './CreatePost';
import { mockStories, mockPosts } from '@/data';

export function Feed() {
  return (
    <div className="overflow-y-auto max-h-screen w-full">
      <div className="flex-1 mx-auto py-8 px-4 bg-gray-50 max-w-[630px]">
        <div className="sticky top-[30px] z-20 bg-gray-50">
          <Stories stories={mockStories} />
          <CreatePost />
        </div>
        <div className="space-y-6 bg-gray-50 py-8 px-4">
          {mockPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}