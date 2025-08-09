import type { Post, User } from "../types/types";
import DOMPurify from "dompurify";

const LS_POST = "posts";
const ALLOWED_TAGS = [
  "h1",
  "h2",
  "h3",
  "p",
  "strong",
  "em",
  "u",
  "a",
  "ol",
  "ul",
  "li",
];

const ALLOWED_ATTRS = ["href", "rel", "target"];

export const sanitizeHtml = (unsafeHtml: string): string =>
  DOMPurify.sanitize(unsafeHtml, {
    ALLOWED_TAGS: [...ALLOWED_TAGS],
    ALLOWED_ATTR: [...ALLOWED_ATTRS],
  });

const sanitizePost = (post: Post): Post => ({
  ...post,
  postText: sanitizeHtml(post.postText),
});

export const savePostToLS = (unsafePost: Post) => {
  if (!unsafePost) return;
  const existingPosts: Post[] = JSON.parse(
    localStorage.getItem(LS_POST) || "[]",
  );

  const sanitizedPost = sanitizePost(unsafePost);
  existingPosts.push(sanitizedPost);

  localStorage.setItem(LS_POST, JSON.stringify(existingPosts));
};

export const getPostsFromLS = (): Post[] => {
  const postsStr = localStorage.getItem(LS_POST);
  const unsafePosts: Post[] = postsStr ? (JSON.parse(postsStr) as Post[]) : [];
  const safePosts = unsafePosts.map(sanitizePost);

  return safePosts;
};
