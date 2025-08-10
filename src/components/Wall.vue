<template>
  <div class="flex w-full flex-col gap-3 rounded-lg border-0">
    <ContentItem v-for="p in wallPosts" v-bind="p" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useContentStore } from "../store/content";
import ContentItem from "./ContentItem.vue";
import { sortByDateTime } from "../utils/content";

const contentStore = useContentStore();

const wallPosts = computed(() => {
  const posts = contentStore.posts.filter((ci) => ci.type === "post");

  return sortByDateTime(posts);
});
</script>

<style scoped></style>
