import { Tag } from './tag.interface';
import { Comment } from './comment.interface';

export const PostType = {
  TEXT: 'text',
  VIDEO: 'video',
  QUOTE: 'quote',
  PHOTO: 'photo',
  LINK: 'link',
} as const;

export type PostType = typeof PostType[keyof typeof PostType];

export interface BasePost {
  id?: string;
  originalId?: string;
  isRepost?: boolean;
  isDraft?: boolean;
  type: PostType;
  title: string;
  likesCount?: number;
  commentsCount?: number;
  tags: Tag[];
  comments: Comment[];
  createdAt?: Date;
  updatedAt?: Date;
  originalAuthor?: string;
  userId: string;
}

export interface TextPost extends BasePost {
  description: string;
  content: string;
}

export interface VideoPost extends BasePost {
  videoUrl: string;
}

export interface QuotePost extends BasePost {
  quote: string;
  quoteAuthor: string;
}

export interface PhotoPost extends BasePost {
  photoUrl: string;
}

export interface LinkPost extends BasePost {
  description: string;
  linkUrl: string;
}
