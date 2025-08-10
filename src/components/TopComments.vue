<template>
  <div class="flex w-full flex-col gap-7 p-3">
    <TopComment
      v-for="(tc, i) in topTwoComments"
      :key="`${tc.id}-top-comment`"
      :comment="tc"
      :index="i"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { sortCommentsByLikes } from "../utils/content";
import TopComment from "./TopComment.vue";
import type { ContentItemT } from "../types/types";

const props = defineProps<{ comments: ContentItemT[] }>();

const topTwoComments = computed(() =>
  sortCommentsByLikes(props.comments).slice(0, 2),
);
</script>

<style scoped></style>
