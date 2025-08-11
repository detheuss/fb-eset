import type { ContentItemT } from "../types/types";
import { TEST_USERS } from "./testUsers";

const [U1, U2, U3] = TEST_USERS;

export const TEST_POSTS: ContentItemT[] = [
  {
    id: "post-1",
    dateTime: "2024-07-03T10:15:00.000Z",
    htmlContent: `<h2>Excited to share my <strong>first post</strong> on this platform! 🚀</h2><p>Hi everyone, I'm thrilled to join this community and can't wait to connect with you all. Looking forward to learning and sharing together!</p><ul><li>Why I'm here: to learn</li><li>What I hope to share: tips &amp; experiences</li><li>My favorite tech: Vue &amp; Tailwind</li></ul>`,
    author: U1,
    likeData: [U2.id, U3.id],
    type: "post",
    thumbnailSrc:
      "https://cdn.pixabay.com/photo/2022/01/28/18/32/leaves-6975462_960_720.png",
  },
  {
    id: "post-2",
    dateTime: "2024-07-02T14:30:00.000Z",
    htmlContent: `<h2>Does anyone have <u>book recommendations</u> for summer reading?</h2><p>I'm looking to dive into some great books this summer. Fiction, non-fiction, tech, or anything inspiring—I'm open to suggestions!</p><ol><li>Favorite genres: Sci-fi, Mystery, Self-help</li><li>Prefer physical books but open to ebooks</li></ol>`,
    author: U2,
    likeData: [U1.id],
    type: "post",
    thumbnailSrc:
      "https://cdn.pixabay.com/photo/2024/07/27/05/25/ai-generated-8924765_960_720.jpg",
  },
  {
    id: "post-3",
    dateTime: "2024-07-01T09:05:00.000Z",
    htmlContent: `<h2>Had a great morning run in the park.</h2><p>The weather was perfect and I managed to beat my personal best. Running really helps me clear my mind and start the day energized.</p><ul><li>Distance: 5km</li><li>Time: 27 minutes</li><li>Playlist: Upbeat pop</li></ul>`,
    author: U3,
    likeData: [U1.id, U2.id],
    type: "post",
    thumbnailSrc:
      "https://cdn.pixabay.com/photo/2024/09/28/05/14/ai-generated-9080322_960_720.jpg",
  },
  {
    id: "post-4",
    dateTime: "2024-05-28T08:00:00.000Z",
    htmlContent: `<h2>Building a small Vue app today.</h2><p>Experimenting with new Vue 3 features and Pinia for state management. Productivity boost!</p>`,
    author: U1,
    likeData: [],
    type: "post",
    thumbnailSrc:
      "https://cdn.pixabay.com/photo/2024/07/05/05/18/aquarium-8873899_960_720.jpg",
  },
  {
    id: "post-5",
    dateTime: "2024-05-27T12:10:00.000Z",
    htmlContent: `<h2>Exploring Tailwind v4 utilities.</h2><p>The new utilities make prototyping so fast. Loving the workflow.</p>`,
    author: U2,
    likeData: [U1.id],
    type: "post",
    thumbnailSrc:
      "https://cdn.pixabay.com/photo/2023/10/05/19/48/ai-generated-8296890_960_720.jpg",
  },
  {
    id: "post-6",
    dateTime: "2024-05-26T16:45:00.000Z",
    htmlContent: `<h2>Love component-driven UIs.</h2><p>Small, focused components make features easier to ship and maintain.</p>`,
    author: U3,
    likeData: [],
    type: "post",
    thumbnailSrc:
      "https://cdn.pixabay.com/photo/2024/10/04/09/36/ai-generated-9095908_960_720.jpg",
  },
  {
    id: "post-7",
    dateTime: "2024-05-25T09:30:00.000Z",
    htmlContent: `<h2>Pinia persist is neat.</h2><p>No more losing state on refresh. Simple and effective.</p>`,
    author: U1,
    likeData: [U2.id],
    type: "post",
    thumbnailSrc:
      "https://cdn.pixabay.com/photo/2024/01/19/12/53/floorboards-8519023_960_720.jpg",
  },
  {
    id: "post-8",
    dateTime: "2024-05-24T11:25:00.000Z",
    htmlContent: `<h2>Custom serializers FTW.</h2><p>Cleaning API payloads upfront simplifies the UI code a lot.</p>`,
    author: U2,
    likeData: [],
    type: "post",
    thumbnailSrc:
      "https://cdn.pixabay.com/photo/2024/01/21/19/24/ai-generated-8523749_960_720.jpg",
  },
  {
    id: "post-9",
    dateTime: "2024-05-23T20:05:00.000Z",
    htmlContent: `<h2>DRY typography rules.</h2><p>Centralizing typography styles keeps content consistent.</p>`,
    author: U3,
    likeData: [U1.id],
    type: "post",
    thumbnailSrc:
      "https://cdn.pixabay.com/photo/2024/12/29/01/43/ai-generated-9297163_960_720.jpg",
  },
  {
    id: "post-10",
    dateTime: "2024-05-22T07:55:00.000Z",
    htmlContent: `<h2>Shipping small improvements daily.</h2><p>Incremental changes compound quickly over time.</p>`,
    author: U1,
    likeData: [],
    type: "post",
    thumbnailSrc:
      "https://cdn.pixabay.com/photo/2011/12/13/14/28/earth-11009_960_720.jpg",
  },
  {
    id: "post-11",
    dateTime: "2024-05-21T10:00:00.000Z",
    htmlContent: `<h2>Refactoring the content store.</h2><p>Unifying posts and comments simplifies CRUD logic.</p>`,
    author: U2,
    likeData: [U3.id],
    type: "post",
    thumbnailSrc:
      "https://cdn.pixabay.com/photo/2022/01/28/18/32/leaves-6975462_960_720.png",
  },
  {
    id: "post-12",
    dateTime: "2024-05-20T13:30:00.000Z",
    htmlContent: `<h2>Better edit flows.</h2><p>Reusing IDs on edit avoids janky UI updates.</p>`,
    author: U3,
    likeData: [U1.id],
    type: "post",
    thumbnailSrc:
      "https://cdn.pixabay.com/photo/2024/07/27/05/25/ai-generated-8924765_960_720.jpg",
  },
  {
    id: "post-13",
    dateTime: "2024-05-19T09:20:00.000Z",
    htmlContent: `<h2>Content sanitization matters.</h2><p>Always sanitize HTML before rendering with v-html.</p>`,
    author: U1,
    likeData: [],
    type: "post",
    thumbnailSrc:
      "https://cdn.pixabay.com/photo/2024/09/28/05/14/ai-generated-9080322_960_720.jpg",
  },
  {
    id: "post-14",
    dateTime: "2024-05-18T15:10:00.000Z",
    htmlContent: `<h2>Better UX with transitions.</h2><p>Shared transitions keep the UI cohesive.</p>`,
    author: U2,
    likeData: [U1.id, U3.id],
    type: "post",
    thumbnailSrc:
      "https://cdn.pixabay.com/photo/2024/07/05/05/18/aquarium-8873899_960_720.jpg",
  },
  {
    id: "post-15",
    dateTime: "2024-05-17T18:45:00.000Z",
    htmlContent: `<h2>Themeable components.</h2><p>Using CSS variables keeps theming simple and robust.</p>`,
    author: U3,
    likeData: [],
    type: "post",
    thumbnailSrc:
      "https://cdn.pixabay.com/photo/2023/10/05/19/48/ai-generated-8296890_960_720.jpg",
  },
  {
    id: "post-16",
    dateTime: "2024-05-16T08:35:00.000Z",
    htmlContent: `<h2>Composable stores.</h2><p>Selectors and helpers make consuming data easier.</p>`,
    author: U1,
    likeData: [U2.id],
    type: "post",
    thumbnailSrc:
      "https://cdn.pixabay.com/photo/2024/10/04/09/36/ai-generated-9095908_960_720.jpg",
  },
  {
    id: "post-17",
    dateTime: "2024-05-15T12:05:00.000Z",
    htmlContent: `<h2>Testing with dummy data.</h2><p>Good fixtures speed up UI development.</p>`,
    author: U2,
    likeData: [],
    type: "post",
    thumbnailSrc:
      "https://cdn.pixabay.com/photo/2024/01/19/12/53/floorboards-8519023_960_720.jpg",
  },
  {
    id: "post-18",
    dateTime: "2024-05-14T19:15:00.000Z",
    htmlContent: `<h2>Wrapping up the MVP.</h2><p>Time to polish and ship.</p>`,
    author: U3,
    likeData: [U1.id],
    type: "post",
    thumbnailSrc:
      "https://cdn.pixabay.com/photo/2024/01/21/19/24/ai-generated-8523749_960_720.jpg",
  },
];
