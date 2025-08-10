<template>
  <div
    class="relative flex items-center justify-start gap-2 overflow-hidden rounded-t-lg border-b border-zinc-200 p-3"
  >
    <!-- THUMBNAIL IMAGE BACKGROUND -->
    <div
      v-if="thumbnailSrc"
      class="pointer-events-none absolute inset-0 bg-cover bg-center opacity-15"
      :style="{ backgroundImage: `url('${thumbnailSrc}')` }"
      aria-hidden="true"
    />

    <!-- CONTENT -->
    <Icon
      icon="tabler:user-square-rounded"
      class="relative z-10 text-5xl transition-colors"
      :class="`text-${author.colorBase}-500`"
    />
    <div class="relative z-10 flex flex-col">
      <span>
        <span v-if="!isComment"> Posted by </span>
        <span class="font-bold" :class="`text-${author.colorBase}-500`">
          {{ isOwner ? "You" : author.username }}
        </span>
        <span v-if="isComment">
          {{ isOwner ? " have" : " has" }} commented
        </span>
      </span>
      <span class="text-xs"> {{ dateTime.date }}, {{ dateTime.time }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { UserT } from "../types/types";

export type AuthorBarPropsT = {
  isComment: boolean;
  isOwner: boolean;
  dateTime: { date: string; time: string };
  author: UserT;
  thumbnailSrc?: string;
};

defineProps<AuthorBarPropsT>();
</script>

<style scope lang="scss"></style>
