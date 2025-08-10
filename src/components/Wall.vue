<template>
  <div class="flex w-full flex-col gap-3 rounded-lg border-0">
    <ContentItem v-for="p in wallPosts" :key="p.id" v-bind="p" />
    <!-- To watch for user scroll -->
    <div ref="sentinel" style="height: 1px" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from "vue";
import { useContentStore } from "../store/content";
import ContentItem from "./ContentItem.vue";
import { sortByDateTime } from "../utils/content";

const PAGE_SIZE = 3;
const pageIndex = ref(0);
const sentinel = ref<HTMLElement | null>(null);

const contentStore = useContentStore();

const sortedPosts = computed(() =>
  sortByDateTime(contentStore.posts.filter((ci) => ci.type === "post")),
);

const wallPosts = computed(() =>
  sortedPosts.value.slice(0, (pageIndex.value + 1) * PAGE_SIZE),
);

const hasMore = computed(
  () => wallPosts.value.length < sortedPosts.value.length,
);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasMore.value) {
        pageIndex.value += 1;
      }
    },
    { root: null, threshold: 0.1 },
  );

  if (sentinel.value) observer.observe(sentinel.value);
});

onBeforeUnmount(() => {
  if (observer && sentinel.value) observer.unobserve(sentinel.value);
  observer = null;
});
</script>
