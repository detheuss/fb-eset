<template>
  <div class="flex flex-col">
    <div
      class="border-b-none relative w-full rounded-lg border-1 border-zinc-300 bg-gradient-to-r from-zinc-200 to-white p-4 pt-7 flex flex-col gap-2"
    >
      <Pill :text="`TOP COMMENT ${commentPlace}`" />
      <div v-html="props.comment.htmlContent" class="w-full" />
      <TopCommentInfoBar v-bind="props.comment" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ContentItemT } from "../types/types";
import Pill from "./Pill.vue";
import { useUserStore } from "../store/user";
import TopCommentInfoBar from "./TopCommentInfoBar.vue";

const props = defineProps<{ comment: ContentItemT; index: number }>();

const commentPlace = computed(() => `# ${props.index + 1}`);

const userStore = useUserStore();
</script>

<style scoped></style>
