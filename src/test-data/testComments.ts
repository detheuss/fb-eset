import type { ContentItemT } from "../types/types";
import { TEST_USERS } from "./testUsers";

const [U1, U2, U3] = TEST_USERS;

export const TEST_COMMENTS: ContentItemT[] = [
  {
    id: "c-1",
    relatedContentItemId: "post-1",
    dateTime: "2024-06-01T10:20:00.000Z",
    htmlContent: `<p><strong>Welcome!</strong> Looking forward to your posts.</p>`,
    author: U2,
    likeData: [U1.id],
    type: "comment",
  },
  {
    id: "c-2",
    relatedContentItemId: "post-2",
    dateTime: "2024-06-02T14:45:00.000Z",
    htmlContent: `<p>Try <strong>'The Midnight Library'</strong> by Matt Haig!</p>`,
    author: U3,
    likeData: [],
    type: "comment",
  },
  {
    id: "c-3",
    relatedContentItemId: "post-3",
    dateTime: "2024-06-03T09:15:00.000Z",
    htmlContent: `<p>Nice run! Keep it up 💪</p>`,
    author: U1,
    likeData: [U2.id],
    type: "comment",
  },
  {
    id: "c-4",
    relatedContentItemId: "post-4",
    dateTime: "2024-06-04T08:30:00.000Z",
    htmlContent: `<p>I love building with Vue too!</p>`,
    author: U3,
    likeData: [],
    type: "comment",
  },
  {
    id: "c-5",
    relatedContentItemId: "post-5",
    dateTime: "2024-06-05T12:40:00.000Z",
    htmlContent: `<p>Tailwind v4 rocks. Utility-first all the way.</p>`,
    author: U1,
    likeData: [],
    type: "comment",
  },
  {
    id: "c-6",
    relatedContentItemId: "post-6",
    dateTime: "2024-06-06T17:00:00.000Z",
    htmlContent: `<p>Same! Components make everything reusable.</p>`,
    author: U2,
    likeData: [],
    type: "comment",
  },
  {
    id: "c-7",
    relatedContentItemId: "post-7",
    dateTime: "2024-06-07T10:00:00.000Z",
    htmlContent: `<p>Persist made state handling so much easier.</p>`,
    author: U3,
    likeData: [],
    type: "comment",
  },
  {
    id: "c-8",
    relatedContentItemId: "post-8",
    dateTime: "2024-06-08T11:40:00.000Z",
    htmlContent: `<p>Custom serializers saved me!</p>`,
    author: U1,
    likeData: [],
    type: "comment",
  },
  {
    id: "c-9",
    relatedContentItemId: "post-9",
    dateTime: "2024-06-09T20:20:00.000Z",
    htmlContent: `<p>Love the typography setup.</p>`,
    author: U2,
    likeData: [],
    type: "comment",
  },
  {
    id: "c-10",
    relatedContentItemId: "post-10",
    dateTime: "2024-06-10T08:10:00.000Z",
    htmlContent: `<p>Ship it! 🚀</p>`,
    author: U3,
    likeData: [],
    type: "comment",
  },
];


