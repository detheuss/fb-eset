export type User = {
  id: string;
  username: string;
  colorBase: string
};

export type Post = {
  id: string;
  poster: User;
  date: string;
  time: string;
  postText: string;
  comments: Comment[];
  likeData: Set<User>;
};

export type Comment = Omit<Post, "comments">;
