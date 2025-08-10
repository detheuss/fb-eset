import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { ContentItemT } from "../types/types";
import { TEST_POSTS } from "../test-data/testPosts";
import { TEST_COMMENTS } from "../test-data/testComments";
import { sanitizeHtml } from "../utils/content";

const TEST_CONTENT_ITEMS = [...TEST_COMMENTS, ...TEST_POSTS];

export const useContentStore = defineStore(
  "content",
  () => {
    /**
     * contentItems = posts + comments
     * This is to re-use the same logic for posts and comments and
     * filter through them easily.
     */
    const contentItems = ref<ContentItemT[]>([...TEST_CONTENT_ITEMS]);

    const posts = computed(() =>
      contentItems.value.filter((ci) => ci.type === "post"),
    );

    const comments = computed(() =>
      contentItems.value.filter((ci) => ci.type === "comment"),
    );

    // CREATE
    const createContentItem = (unsafe: ContentItemT) => {
      // unsafe HTML is sanitized before being stored
      const sanitized: ContentItemT = {
        ...unsafe,
        htmlContent: sanitizeHtml(unsafe.htmlContent),
      };
      contentItems.value = [...contentItems.value, sanitized];
    };

    // UPDATE / LIKE
    const toggleLike = (userId: string, contentItemId: string) => {
      contentItems.value = contentItems.value.map((ci) => {
        if (ci.id !== contentItemId) return ci;

        const hasLiked = ci.likeData.includes(userId);

        return {
          ...ci,
          likeData: hasLiked
            ? ci.likeData.filter((id) => id !== userId)
            : [...ci.likeData, userId],
        };
      });
    };

    // UPDATE / EDIT
    const editContentItem = (unsafe: ContentItemT) => {
      // unsafe HTML is sanitized before being stored
      const sanitized: ContentItemT = {
        ...unsafe,
        htmlContent: sanitizeHtml(unsafe.htmlContent),
      };
      contentItems.value = contentItems.value.map((ci) => {
        if (ci.id !== unsafe.id) return ci;
        return sanitized;
      });
    };

    // DELETE
    const deleteContentItem = (contentItemId: string) => {
      // delete the post
      contentItems.value = contentItems.value.filter(
        (ci) =>
          ci.id !== contentItemId &&
          // ...and the related comments
          ci.relatedContentItemId !== contentItemId,
      );
    };

    return {
      contentItems,
      posts,
      comments,

      createContentItem,
      editContentItem,
      deleteContentItem,
      toggleLike,
    };
  },
  {
    persist: true,
  },
);
