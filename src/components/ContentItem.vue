<template>
  <div
    :id="id"
    class="relative flex flex-col rounded-lg border border-zinc-200 shadow-sm"
  >
    <!-- AUTHOR INFO -->
    <section :id="`${id}-author-bar`">
      <ContentItemAuthorBar
        :is-comment="isComment"
        :is-owner="isOwner"
        :date-time="readableDateTime"
        :author="author"
      />
    </section>

    <!-- SANITIZED POST HTML CONTENT -->
    <section :id="`${id}-content`" class="p-5" v-html="htmlContent" />

    <!-- ACTIONS -->
    <section :id="`${id}-actions-bar`">
      <ContentItemActionsBar
        :id="id"
        :is-comment="isComment"
        :comments="comments"
        :likeData="likeData"
        :author="author"
        v-model:is-comment-open="isCommentSectionOpen"
      />
    </section>

    <!-- COMMENTS SECTION -->
    <section
      :id="`${id}-comments`"
      v-if="!isComment && isCommentSectionOpen"
      class="flex flex-col gap-3 border-t border-zinc-200 p-5"
    >
      <CreateContentItem
        content-type="comment"
        :related-post-id="id"
        @on-cancel-commenting="handleToggleCommenting(false)"
      />

      <ContentItem v-for="c in comments" v-bind="c" is-comment />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { ContentItemT } from "../types/types";
import { useUserStore } from "../store/user";
import { useContentStore } from "../store/content";
import {
  getReadableDateTimeFromISOString,
  sortByDateTime,
} from "../utils/content";
import ContentItemActionsBar from "./ContentItemActionsBar.vue";
import ContentItemAuthorBar from "./ContentItemAuthorBar.vue";
import CreateContentItem from "./CreateContentItem.vue";

const userStore = useUserStore();

const contentStore = useContentStore();

const props = defineProps<ContentItemT>();

const isComment = computed(() => props.type === "comment");

const isOwner = computed(() => userStore.activeUser.id === props.author.id);

const isCommentSectionOpen = ref(false);

const comments = computed(() => {
  if (isComment.value) return [];
  const relatedComments = contentStore.comments.filter(
    (c) => c.relatedContentItemId === props.id,
  );
  return sortByDateTime(relatedComments);
});

const handleToggleCommenting = (value: boolean) =>
  (isCommentSectionOpen.value = !!value);

const readableDateTime = computed(() =>
  getReadableDateTimeFromISOString(props.dateTime),
);
</script>

<style scoped></style>
