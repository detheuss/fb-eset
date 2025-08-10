export type UserT = {
  id: string;
  username: string;
  colorBase: string;
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
  thumbnailSrc?: string;
};
