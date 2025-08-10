import type { ContentItemT } from "../types/types";
import { TEST_USERS } from "./testUsers";

const [U1, U2, U3] = TEST_USERS;

export const TEST_POSTS: ContentItemT[] = [
  {
    id: "post-1",
    dateTime: "2024-06-01T10:15:00.000Z",
    htmlContent: `<h2>Excited to share my <strong>first post</strong> on this platform! 🚀</h2>
      <p>Hi everyone, I'm thrilled to join this community and can't wait to connect with you all. Looking forward to learning and sharing together!</p>
      <ul>
        <li>Why I'm here: to learn</li>
        <li>What I hope to share: tips &amp; experiences</li>
        <li>My favorite tech: Vue &amp; Tailwind</li>
      </ul>`,
    author: U1,
    likeData: [U2.id, U3.id],
    type: "post",
  },
  {
    id: "post-2",
    dateTime: "2024-06-02T14:30:00.000Z",
    htmlContent: `<h2>Does anyone have <u>book recommendations</u> for summer reading?</h2>
      <p>I'm looking to dive into some great books this summer. Fiction, non-fiction, tech, or anything inspiring—I'm open to suggestions!</p>
      <ol>
        <li>Favorite genres: Sci-fi, Mystery, Self-help</li>
        <li>Prefer physical books but open to ebooks</li>
      </ol>`,
    author: U2,
    likeData: [U1.id],
    type: "post",
  },
  {
    id: "post-3",
    dateTime: "2024-06-03T09:05:00.000Z",
    htmlContent: `<h2>Had a great morning run in the park.</h2>
      <p>The weather was perfect and I managed to beat my personal best. Running really helps me clear my mind and start the day energized.</p>
      <ul>
        <li>Distance: 5km</li>
        <li>Time: 27 minutes</li>
        <li>Playlist: Upbeat pop</li>
      </ul>`,
    author: U3,
    likeData: [U1.id, U2.id],
    type: "post",
  },
  {
    id: "post-4",
    dateTime: "2024-06-04T08:00:00.000Z",
    htmlContent: `<h2>Building a small Vue app today.</h2>
      <p>I'm experimenting with some new Vue 3 features and Pinia for state management. It's amazing how productive the ecosystem is!</p>
      <ul>
        <li>Using: Vue 3, Pinia, Vite</li>
        <li>Goal: Simple task tracker</li>
      </ul>`,
    author: U1,
    likeData: [],
    type: "post",
  },
  {
    id: "post-5",
    dateTime: "2024-06-05T12:10:00.000Z",
    htmlContent: `<h2>Exploring Tailwind v4 utilities.</h2>
      <p>Tailwind's new features make styling so much faster. The new color palette and utility classes are a game changer for rapid prototyping.</p>
      <ul>
        <li>Favorite new utility: <code>aspect-square</code></li>
        <li>Trying out: <code>container queries</code></li>
      </ul>`,
    author: U2,
    likeData: [],
    type: "post",
  },
  {
    id: "post-6",
    dateTime: "2024-06-06T16:45:00.000Z",
    htmlContent: `<h2>Love component-driven UIs.</h2>
      <p>Breaking down the UI into reusable components has made my codebase so much cleaner and easier to maintain. Highly recommend!</p>
      <ol>
        <li>Design small, focused components</li>
        <li>Reuse wherever possible</li>
        <li>Document as you go</li>
      </ol>`,
    author: U3,
    likeData: [],
    type: "post",
  },
  {
    id: "post-7",
    dateTime: "2024-06-07T09:30:00.000Z",
    htmlContent: `<h2>Pinia persist is neat.</h2>
      <p>Just tried out Pinia's persist plugin and it works like a charm. No more losing state on refresh!</p>
      <ul>
        <li>Easy setup</li>
        <li>Works with localStorage</li>
        <li>Highly recommended for small apps</li>
      </ul>`,
    author: U1,
    likeData: [],
    type: "post",
  },
  {
    id: "post-8",
    dateTime: "2024-06-08T11:25:00.000Z",
    htmlContent: `<h2>Custom serializers FTW.</h2>
      <p>Implemented a custom serializer for my API responses. Now my data is much cleaner and easier to work with on the frontend.</p>`,
    author: U2,
    likeData: [],
    type: "post",
  },
  {
    id: "post-9",
    dateTime: "2024-06-09T20:05:00.000Z",
    htmlContent: `<h2>DRY typography rules in Tailwind.</h2>
      <p>Using Tailwind's typography plugin helps keep my styles consistent and DRY. Highly recommend for content-heavy sites.</p>
      <ul>
        <li>Consistent headings</li>
        <li>Easy to override</li>
        <li>Great for markdown content</li>
      </ul>`,
    author: U3,
    likeData: [],
    type: "post",
  },
  {
    id: "post-10",
    dateTime: "2024-06-10T07:55:00.000Z",
    htmlContent: `<h2>Shipping small improvements daily.</h2>
      <p>I've started making a habit of shipping at least one small improvement every day. It really adds up over time!</p>
      <ol>
        <li>Fix a bug</li>
        <li>Improve docs</li>
        <li>Refactor a component</li>
      </ol>`,
    author: U1,
    likeData: [],
    type: "post",
  },
];
