// import { defineStore } from "pinia";
// import { computed, ref } from "vue";
// import type { PostT } from "../types/types";
// import { TEST_POSTS } from "../test-data/testPosts";
// import { sanitizeHtml, sortByDateTime } from "../utils/content";



// export const usePostsStore = defineStore(
//   "posts",
//   () => {
//     const posts = ref<PostT[]>([...TEST_POSTS]);

//     const sortedPosts = computed(() => sortByDateTime(posts.value));

//     const savePost = (unsafePost: PostT) => {
//       // to avoid XSS attacks
//       const sanitizedPost = {
//         ...unsafePost,
//         postText: sanitizeHtml(unsafePost.postText),
//       };

//       posts.value = [...posts.value, sanitizedPost];
//     };

//     const toggleLikePost = (userId: string, postId: string) => {
//       posts.value = posts.value.map((p) => {
//         if (p.id !== postId) return p;

//         const hasLiked = p.likeData.includes(userId);

//         return {
//           ...p,
//           likeData: hasLiked
//             ? p.likeData.filter((id) => id !== userId)
//             : [...p.likeData, userId],
//         };
//       });
//     };

//     const deletePost = (postId: string) => {
//       posts.value = posts.value.filter((p) => p.id !== postId);
//     };

//     const addComment = (postId: string, comment: PostT) => {
//       const idx = posts.value.findIndex((p) => p.id === postId);
//       if (idx === -1) return;
//       const sanitizedComment = {
//         ...comment,
//         postText: sanitizeHtml(comment.postText),
//       };

//       const updatedPost = {
//         ...posts.value[idx],
//         comments: [...(posts.value[idx].comments || []), sanitizedComment],
//       };

//       posts.value = [
//         ...posts.value.slice(0, idx),
//         updatedPost,
//         ...posts.value.slice(idx + 1),
//       ];
//     };

//     const deleteComment = (postId: string, commentId: string) => {
//       const idx = posts.value.findIndex((p) => p.id === postId);
//       if (idx === -1) return;

//       const post = posts.value[idx];
//       const updatedComments = (post.comments || []).filter(
//         (c) => c.id !== commentId,
//       );

//       const updatedPost = {
//         ...post,
//         comments: updatedComments,
//       };

//       posts.value = [
//         ...posts.value.slice(0, idx),
//         updatedPost,
//         ...posts.value.slice(idx + 1),
//       ];
//     };

//     return {
//       posts,
//       sortedPosts,

//       savePost,
//       deletePost,

//       toggleLikePost,

//       addComment,
//       deleteComment,
//     };
//   },
//   {
//     persist: true,
//   },
// );
