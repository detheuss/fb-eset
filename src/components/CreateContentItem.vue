<template>
  <div
    class="flex w-full flex-col items-center gap-3 rounded-lg border border-zinc-200 bg-white p-5"
  >
    <div class="flex w-full items-center justify-start gap-2">
      <h2>
        {{ title }}
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

const emit = defineEmits<{
  (e: "onSubmitSuccess"): void;
}>();

const props = defineProps<{
  contentType: ContentItemTypeT;
  relatedContentId?: string;
  isEditing?: boolean;
  editedContentItem?: ContentItemT;
}>();

const title = computed(() =>
  props.isEditing
    ? isComment.value
      ? "Editing your comment..."
      : "Editing your post..."
    : isComment.value
      ? "Leave a comment!"
      : "Create a new post!",
);

const currentPostHTML = ref(props.editedContentItem?.htmlContent ?? "");

const userStore = useUserStore();

const contentStore = useContentStore();

const isComment = computed(() => props.contentType === "comment");

const handleSubmit = () => {
  if (!currentPostHTML.value) return;

  const user = userStore.activeUser;

  if (!user) return;

  const dateTimeISOString = new Date().toISOString();

  const contentItemDto: ContentItemT =
    props.isEditing && props.editedContentItem
      ? {
          ...props.editedContentItem,
          htmlContent: currentPostHTML.value,
          dateTime: dateTimeISOString,
        }
      : {
          dateTime: dateTimeISOString,
          id: crypto.randomUUID(),
          likeData: [],
          author: user,
          htmlContent: currentPostHTML.value,
          type: props.contentType,
        };

  if (isComment.value)
    contentItemDto.relatedContentItemId = props.relatedContentId;

  try {
    props.isEditing
      ? contentStore.editContentItem(contentItemDto)
      : contentStore.createContentItem(contentItemDto);
  } catch (e) {
    throw e;
  }

  emit("onSubmitSuccess");
};
</script>

<style scoped></style>
