export type HashnodePost = {
  title: string;
  url: string;
  slug: string;
  publishedAt: string;
  coverImage: {
    url: string;
  };
  content?: {
    html: string;
  }
};