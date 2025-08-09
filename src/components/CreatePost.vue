<template>
  <div class="flex w-full flex-col items-center gap-3 rounded-lg border border-zinc-200 p-5">
    <div class="flex w-full flex-col">
      <RichTextEditor v-model="postText" />
    </div>

    <BaseButton @click="savePost" cta="Create Post" class="rounded-lg" />
  </div>
  {{ postText }}
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "./BaseButton.vue";
import type { Post } from "../types/types";
import { getUserFromLS, savePostToLS } from "../utils/utils";
import RichTextEditor from "./RichTextEditor.vue";

const postText = ref("");

const getDateAndTime = () => {
  const now = new Date();
  const date = now.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const time = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });
  return { date, time };
};

const savePost = () => {
  if (!postText.value) return;

  const user = getUserFromLS();

  if (!user) return;

  const dateTime = getDateAndTime();

  const postDto: Post = {
    date: dateTime.date,
    time: dateTime.time,
    id: crypto.randomUUID(),
    likeData: new Set(),
    comments: [],
    poster: user,
    postText: postText.value,
  };
  try {
    savePostToLS(postDto);
  } catch (e) {
    console.error("Something went wrong", e);
  }
};
</script>

<style scoped></style>
