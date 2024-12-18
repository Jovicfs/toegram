import type { Story } from '../types';

export const mockStories: Story[] = [
  {
    id: '1',
    user: {
      id: '1',
      name: 'Emma Watson',
      username: 'emmawatson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      isVerified: true
    },
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    viewed: false
  },
  {
    id: '2',
    user: {
      id: '2',
      name: 'Chris Evans',
      username: 'chrisevans',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      isVerified: true
    },
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004',
    viewed: false
  },
  {
    id: '3',
    user: {
      id: '3',
      name: 'Sophie Turner',
      username: 'sophieturner',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      isVerified: true
    },
    image: 'https://images.unsplash.com/photo-1513721032312-6a18a42c8763',
    viewed: true
  }
];