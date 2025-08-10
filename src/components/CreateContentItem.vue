<template>
  <div
    class="flex w-full flex-col items-center gap-3 rounded-lg border border-zinc-200 bg-white p-5"
  >
    <div class="flex w-full items-center justify-start gap-2">
      <h2>
        {{ isComment ? "Leave a comment!" : "Share Your Thoughts!" }}
      </h2>
    </div>
    <div class="flex w-full flex-col">
      <RichTextEditor v-model="currentPostHTML" />
    </div>

    <div class="flex w-full items-center justify-start gap-3">
      <BaseButton
        @click="handleSubmit"
        :cta="isComment ? 'Post a Comment' : 'Create a Post'"
        class="w-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import BaseButton from "./BaseButton.vue";
import type { ContentItemT, ContentItemTypeT } from "../types/types";
import RichTextEditor from "./RichTextEditor.vue";
import { useUserStore } from "../store/user";
import { useContentStore } from "../store/content";

const props = defineProps<{
  contentType: ContentItemTypeT;
  relatedPostId?: string;
}>();

const currentPostHTML = ref("");

const userStore = useUserStore();

const contentStore = useContentStore();

const isComment = computed(() => props.contentType === "comment");

const handleSubmit = () => {
  debugger;
  if (!currentPostHTML.value) return;

  const user = userStore.activeUser;

  if (!user) return;

  const dateTimeISOString = new Date().toISOString();

  const contentItemDto: ContentItemT = {
    dateTime: dateTimeISOString,
    id: crypto.randomUUID(),
    likeData: [],
    author: user,
    htmlContent: currentPostHTML.value,
    type: props.contentType,
  };

  if (isComment.value)
    contentItemDto.relatedContentItemId = props.relatedPostId;

  try {
    contentStore.createContentItem(contentItemDto);
  } catch (e) {
    console.error(e);
  }
};
</script>

<style scoped></style>
