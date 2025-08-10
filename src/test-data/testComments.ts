import type { ContentItemT } from "../types/types";
import { TEST_USERS } from "./testUsers";

const [U1, U2, U3] = TEST_USERS;

export const TEST_COMMENTS: ContentItemT[] = [
  // post-1: 4 comments
  {
    id: "c-1",
    relatedContentItemId: "post-1",
    dateTime: "2024-06-01T10:20:00.000Z",
    htmlContent: `<p><strong>Welcome!</strong> Looking forward to your posts.</p>`,
    author: U2,
    likeData: [U1.id, U3.id],
    type: "comment",
  },
  {
    id: "c-2",
    relatedContentItemId: "post-1",
    dateTime: "2024-06-01T10:40:00.000Z",
    htmlContent: `<p>Great intro! 🚀</p>`,
    author: U3,
    likeData: [],
    type: "comment",
  },
  {
    id: "c-3",
    relatedContentItemId: "post-1",
    dateTime: "2024-06-01T11:00:00.000Z",
    htmlContent: `<p>Happy to have you here!</p>`,
    author: U1,
    likeData: [U2.id],
    type: "comment",
  },
  {
    id: "c-4",
    relatedContentItemId: "post-1",
    dateTime: "2024-06-01T11:20:00.000Z",
    htmlContent: `<p>Let’s connect and share ideas.</p>`,
    author: U2,
    likeData: [U1.id],
    type: "comment",
  },

  // post-2: 3 comments
  {
    id: "c-5",
    relatedContentItemId: "post-2",
    dateTime: "2024-06-02T14:45:00.000Z",
    htmlContent: `<p>Try <strong>'The Midnight Library'</strong>.</p>`,
    author: U3,
    likeData: [U1.id],
    type: "comment",
  },
  {
    id: "c-6",
    relatedContentItemId: "post-2",
    dateTime: "2024-06-02T15:05:00.000Z",
    htmlContent: `<p>Also recommend <em>Project Hail Mary</em>.</p>`,
    author: U1,
    likeData: [],
    type: "comment",
  },
  {
    id: "c-7",
    relatedContentItemId: "post-2",
    dateTime: "2024-06-02T15:15:00.000Z",
    htmlContent: `<p>+1 for non-fiction lists!</p>`,
    author: U2,
    likeData: [U3.id],
    type: "comment",
  },

  // post-3: 5 comments
  {
    id: "c-8",
    relatedContentItemId: "post-3",
    dateTime: "2024-06-03T09:15:00.000Z",
    htmlContent: `<p>Nice run! Keep it up 💪</p>`,
    author: U1,
    likeData: [U2.id],
    type: "comment",
  },
  {
    id: "c-9",
    relatedContentItemId: "post-3",
    dateTime: "2024-06-03T09:25:00.000Z",
    htmlContent: `<p>What’s your next goal?</p>`,
    author: U2,
    likeData: [],
    type: "comment",
  },
  {
    id: "c-10",
    relatedContentItemId: "post-3",
    dateTime: "2024-06-03T09:35:00.000Z",
    htmlContent: `<p>Sunny days are the best for runs.</p>`,
    author: U3,
    likeData: [U1.id],
    type: "comment",
  },
  {
    id: "c-11",
    relatedContentItemId: "post-3",
    dateTime: "2024-06-03T09:45:00.000Z",
    htmlContent: `<p>Congrats on the PB!</p>`,
    author: U1,
    likeData: [U2.id, U3.id],
    type: "comment",
  },
  {
    id: "c-12",
    relatedContentItemId: "post-3",
    dateTime: "2024-06-03T10:05:00.000Z",
    htmlContent: `<p>What playlist are you using?</p>`,
    author: U2,
    likeData: [],
    type: "comment",
  },
];
