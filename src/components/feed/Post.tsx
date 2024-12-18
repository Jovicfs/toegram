import React, { useState } from 'react';
import { Heart, MessageCircle, Bookmark, Send, MoreHorizontal } from 'lucide-react';
import type { Post as PostType } from '@/types';

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [showAllComments, setShowAllComments] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  return (
    <article className="bg-white border rounded-lg mb-4">
      {/* Post Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <img
            src={post.author.avatar}
            alt={post.author.username}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center">
              <span className="font-semibold">{post.author.username}</span>
              {post.author.isVerified && (
                <svg className="w-4 h-4 ml-1 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              )}
            </div>
            {post.location && (
              <span className="text-xs text-gray-500">{post.location}</span>
            )}
          </div>
        </div>
        <button>
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Media Carousel */}
      <div className="relative">
        {post.media[currentMediaIndex].type === 'video' ? (
          <video
            src={post.media[currentMediaIndex].url}
            className="w-full h-full object-cover"
            controls
            loop
            playsInline
          />
        ) : (
          <img
            src={post.media[currentMediaIndex].url}
            alt=""
            className="w-full object-cover"
            style={{ aspectRatio: post.media[currentMediaIndex].aspectRatio || '1' }}
          />
        )}

        {post.media.length > 1 && (
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
            <button
              className="bg-white/50 rounded-full p-1"
              onClick={() => setCurrentMediaIndex(i => Math.max(0, i - 1))}
              disabled={currentMediaIndex === 0}
            >
              ←
            </button>
            <button
              className="bg-white/50 rounded-full p-1"
              onClick={() => setCurrentMediaIndex(i => Math.min(post.media.length - 1, i + 1))}
              disabled={currentMediaIndex === post.media.length - 1}
            >
              →
            </button>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button className={`${post.liked ? 'text-red-500' : ''}`}>
              <Heart size={24} fill={post.liked ? 'currentColor' : 'none'} />
            </button>
            <button>
              <MessageCircle size={24} />
            </button>
            <button>
              <Send size={24} />
            </button>
          </div>
          <button className={`${post.saved ? 'text-black' : ''}`}>
            <Bookmark size={24} fill={post.saved ? 'currentColor' : 'none'} />
          </button>
        </div>

        <div className="mb-2">
          <span className="font-semibold">{post.likes.toLocaleString()} likes</span>
        </div>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold mr-2">{post.author.username}</span>
          {post.caption}
        </div>

        {/* Comments */}
        {post.comments.length > 0 && (
          <div className="space-y-2">
            {!showAllComments && post.comments.length > 2 && (
              <button
                className="text-gray-500 text-sm"
                onClick={() => setShowAllComments(true)}
              >
                View all {post.comments.length} comments
              </button>
            )}
            {(showAllComments ? post.comments : post.comments.slice(0, 2)).map((comment) => (
              <div key={comment.id} className="flex items-start space-x-2">
                <span className="font-semibold">{comment.user.username}</span>
                <p className="flex-1">{comment.content}</p>
                <button className="text-gray-500">
                  <Heart size={12} />
                </button>
              </div>
            ))}
          </div>
        )}

        <span className="text-gray-500 text-xs uppercase">{post.timestamp}</span>
      </div>

      {/* Comment Input */}
      <div className="flex items-center border-t p-3">
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 border-none focus:ring-0 text-sm"
        />
        <button className="text-blue-500 font-semibold text-sm">Post</button>
      </div>
    </article>
  );
}