export type UserT = {
  id: string;
  username: string;
  colorBase: string;
};

export type PostT = {
  id: string;
  poster: UserT;
  dateTime: string;
  postText: string;
  likeData: string[];
  comments?: PostT[];
  isComment?: boolean;
};

export type ContentItemTypeT = "post" | "comment";

export type ContentItemT = {
  id: string;
  author: UserT;
  dateTime: string;
  htmlContent: string;
  likeData: string[];
  type: ContentItemTypeT;
  relatedContentItemId?: string;
};
