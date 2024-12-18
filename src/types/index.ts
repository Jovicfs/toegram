export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isVerified?: boolean;
}

export interface Story {
  id: string;
  user: User;
  image: string;
  viewed: boolean;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  likes: number;
  timestamp: string;
}

export interface Post {
  id: string;
  author: User;
  media: {
    type: 'image' | 'video';
    url: string;
    aspectRatio?: number;
  }[];
  caption: string;
  likes: number;
  comments: Comment[];
  saved: boolean;
  liked: boolean;
  timestamp: string;
  location?: string;
}