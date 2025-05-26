export const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

interface comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const getData = async (url: string): Promise<comment[]> => {
  const response = await fetch(url);
  return response.json() as Promise<comment[]>;;
}