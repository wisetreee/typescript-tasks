export const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

export const getData = async <T extends {id: number, email: string}> (url: string): Promise<T[]> => {
  const response= await fetch(url);
  return response.json() as Promise<T[]>;
}