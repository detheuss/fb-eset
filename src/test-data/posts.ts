import type { Post } from "../types/types";
import { U1, U2, U3 } from "./users";

const POSTS: Post[] = [
  {
    id: "1",
    date: "June 1, 2024",
    time: "10:15",
    postText: "Excited to share my first post on this platform! 🚀",
    poster: U1,
    likeData: new Set([U2, U3]),
    comments: [
      {
        id: "comment-1",
        poster: U2,
        postText: "Welcome! Looking forward to your posts.",
        date: "June 1, 2024",
        time: "10:20",
        likeData: new Set([U1]),
      },
    ],
  },
  {
    id: "2",
    date: "June 2, 2024",
    time: "14:30",
    postText: "Does anyone have book recommendations for summer reading?",
    poster: U2,
    likeData: new Set([U1]),
    comments: [
      {
        id: "comment-2",
        poster: U3,
        postText: "Try 'The Midnight Library' by Matt Haig!",
        date: "June 2, 2024",
        time: "14:45",
        likeData: new Set(),
      },
    ],
  },
  {
    id: "3",
    date: "June 3, 2024",
    time: "09:05",
    postText: "Had a great morning run in the park. Feeling energized!",
    poster: U3,
    likeData: new Set([U1, U2]),
    comments: [],
  },
];
