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
      <RichTextEditor v-model="currentPostHTML" ref="rte" />
    </div>
    <div
      v-if="!isComment"
      class="flex w-full items-center justify-start gap-3 ps-2"
    >
      <span class="text-sm font-bold whitespace-nowrap">Thumbnail URL:</span>
      <input
        v-model.trim="thumbnailSrc"
        type="text"
        class="h-11 w-full rounded-lg border border-zinc-200 bg-white p-3"
      />
    </div>

    <div class="flex w-full items-center justify-start gap-3">
      <BaseButton @click="handleSubmit" :cta="buttonCta" class="w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from "vue";
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

const buttonCta = computed(() =>
  props.isEditing
    ? isComment.value
      ? "Save Comment"
      : "Save Post"
    : isComment.value
      ? "Add a Comment"
      : "Create a Post",
);

const currentPostHTML = ref(props.editedContentItem?.htmlContent ?? "");

const thumbnailSrc = ref(props.editedContentItem?.thumbnailSrc ?? "");

const userStore = useUserStore();

const contentStore = useContentStore();

const isComment = computed(() => props.contentType === "comment");

const rte = ref<InstanceType<typeof RichTextEditor> | null>(null);

const handleSubmit = async () => {
  if (!currentPostHTML.value) return;

  const user = userStore.activeUser;

  if (!user) return;

  const dateTimeISOString = new Date().toISOString();

  const contentItemDto: ContentItemT =
    props.isEditing && props.editedContentItem
      ? {
          ...props.editedContentItem,
          htmlContent: currentPostHTML.value,
          thumbnailSrc: thumbnailSrc.value,
          dateTime: dateTimeISOString,
        }
      : {
          dateTime: dateTimeISOString,
          id: crypto.randomUUID(),
          likeData: [],
          author: user,
          htmlContent: currentPostHTML.value,
          thumbnailSrc: thumbnailSrc.value,
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

  currentPostHTML.value = "";
  // an unfortunate workaround - quill retains state and ignores binding.
  await nextTick();
  rte.value?.hardReset();

  emit("onSubmitSuccess");
};
</script>

<style scoped></style>
