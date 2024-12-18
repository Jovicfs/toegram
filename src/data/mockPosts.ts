import type { Post } from '../types';

export const mockPosts: Post[] = [
  {
    id: '1',
    author: {
      id: '1',
      name: 'Emma Watson',
      username: 'emmawatson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      isVerified: true
    },
    media: [{
      type: 'image',
      url: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58',
      aspectRatio: 4/3
    }],
    caption: 'Just launched my new portfolio website! Check it out and let me know what you think 🚀',
    likes: 42892,
    comments: [
      {
        id: '1',
        user: {
          id: '2',
          name: 'Chris Evans',
          username: 'chrisevans',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
        },
        content: 'This looks amazing! 🔥',
        likes: 234,
        timestamp: '2h ago'
      }
    ],
    saved: false,
    liked: false,
    timestamp: '2h ago',
    location: 'Los Angeles, California'
  },
  {
    id: '2',
    author: {
      id: '3',
      name: 'Sophie Turner',
      username: 'sophieturner',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      isVerified: true
    },
    media: [{
      type: 'image',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      aspectRatio: 16/9
    }],
    caption: 'Beautiful sunset at the beach today! 🌅',
    likes: 128453,
    comments: [
      {
        id: '2',
        user: {
          id: '1',
          name: 'Emma Watson',
          username: 'emmawatson',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
        },
        content: 'Stunning view! Where is this?',
        likes: 892,
        timestamp: '1h ago'
      }
    ],
    saved: true,
    liked: true,
    timestamp: '4h ago',
    location: 'Maldives'
  }
];