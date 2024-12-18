import { mockPosts } from './mockPosts';
import { mockStories } from './mockStories';

export { mockStories, mockPosts };

export const mockConversations = [
    {
        id: '1',
        user: {
            username: 'emma.watson',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
        },
        lastMessage: 'That sounds great! See you tomorrow 👋',
        messages: [
            {
                id: '1',
                content: 'Hey, how are you?',
                fromMe: false,
                timestamp: '2:30 PM'
            },
            {
                id: '2',
                content: 'I\'m good! Just finished a photoshoot',
                fromMe: true,
                timestamp: '2:31 PM'
            },
            {
                id: '3',
                content: 'That sounds great! See you tomorrow 👋',
                fromMe: false,
                timestamp: '2:32 PM'
            }
        ]
    },
    {
        id: '2',
        user: {
            username: 'chris.evans',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
        },
        lastMessage: 'The project looks amazing!',
        messages: [
            {
                id: '1',
                content: 'Have you seen the latest designs?',
                fromMe: false,
                timestamp: '1:20 PM'
            },
            {
                id: '2',
                content: 'Yes, they look fantastic!',
                fromMe: true,
                timestamp: '1:22 PM'
            },
            {
                id: '3',
                content: 'The project looks amazing!',
                fromMe: false,
                timestamp: '1:23 PM'
            }
        ]
    }
];