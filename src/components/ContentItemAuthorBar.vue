<template>
  <div
    class="flex items-center justify-start gap-2 rounded-t-lg border-b border-zinc-200 p-3"
  >
    <Icon
      icon="tabler:user-square-rounded"
      class="text-5xl transition-colors"
      :class="`text-${author.colorBase}-500`"
    />
    <div class="flex flex-col">
      <span>
        <span v-if="!isComment"> Posted by </span>
        <span class="font-bold" :class="`text-${author.colorBase}-500`">
          {{ isOwner ? "You" : author.username }}
        </span>
        <span v-if="isComment"> has commented </span>
      </span>
      <span class="text-xs"> {{ dateTime.date }}, {{ dateTime.time }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { UserT } from "../types/types";

export type ContentItemAuthorBarProps = {
  isComment: boolean;
  isOwner: boolean;
  dateTime: { date: string; time: string };
  author: UserT;
};

defineProps<ContentItemAuthorBarProps>();
</script>

<style scoped></style>
