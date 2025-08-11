<template>
  <div
    :id="id"
    class="relative flex flex-col rounded-lg border border-zinc-200 shadow-sm"
  >
    <!-- AUTHOR INFO -->
    <section :id="`${id}-author-bar`">
      <AuthorBar
        :is-comment="isComment"
        :is-owner="isOwner"
        :date-time="readableDateTime"
        :author="author"
        :thumbnail-src="thumbnailSrc"
      />
    </section>

    <!-- SANITIZED POST HTML CONTENT -->
    <section
      v-if="!isEditing"
      :id="`${id}-content`"
      class="p-5"
      v-html="htmlContent"
    />
    <section v-else :id="`${id}-editing`" class="p-5">
      <CreateContentItem
        :content-type="type"
        :relatedContentId="relatedContentItemId"
        is-editing
        :edited-content-item="props"
        @on-submit-success="handleDoneEditing"
      />
    </section>
    <!-- ACTIONS -->
    <section
      :id="`${id}-actions-bar`"
      class="flex h-16 items-center justify-start border-t border-zinc-200 bg-zinc-100"
    >
      <ActionsBar
        :id="id"
        :is-comment="isComment"
        :comments="comments"
        :likeData="likeData"
        :author="author"
        v-model:is-comment-open="isCommentSectionOpen"
        v-model:is-editing="isEditing"
        class="h-full"
      />
    </section>
    <!-- TOP COMMENTS -->
    <Transition name="fade">
      <section
        :id="`${id}-top-comments`"
        v-if="!isComment && comments.length && !isCommentSectionOpen"
      >
        <TopComments :comments="comments" />
      </section>

      <!-- COMMENTS SECTION -->
      <section
        :id="`${id}-comments`"
        v-else-if="!isComment && isCommentSectionOpen"
        class="flex flex-col gap-3 border-t border-zinc-200 p-5"
      >
        <CreateContentItem
          content-type="comment"
          :relatedContentId="id"
          @on-cancel-commenting="handleToggleCommenting(false)"
        />

        <ContentItem v-for="c in comments" v-bind="c" is-comment />
      </section>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, Transition } from "vue";
import type { ContentItemT } from "../types/types";
import { useUserStore } from "../store/user";
import { useContentStore } from "../store/content";
import {
  getReadableDateTimeFromISOString,
  sortByDateTime,
} from "../utils/content";
import ActionsBar from "./ActionsBar.vue";
import AuthorBar from "./AuthorBar.vue";
import CreateContentItem from "./CreateContentItem.vue";
import TopComments from "./TopComments.vue";

const userStore = useUserStore();

const contentStore = useContentStore();

const props = defineProps<ContentItemT>();

const isComment = computed(() => props.type === "comment");

const isOwner = computed(() => userStore.activeUser.id === props.author.id);

const isCommentSectionOpen = ref(false);

const isEditing = ref(false);

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

const handleDoneEditing = () => {
  isEditing.value = false;
};
</script>

<style scoped lang="scss">
@use "../styles/transitions.scss";
</style>
