<template>
  <div
    class="flex items-center justify-between gap-3 rounded-lg pt-2 text-zinc-500"
  >
    <div class="info-bar-item">
      <Icon icon="tabler:user-square-rounded" :class="commenterColor" />
      <span class="text-sm"> by {{ props.author.username }}</span>
    </div>
    <div class="flex flex-row items-center justify-center gap-1">
      <div class="info-bar-item mb-1">
        <Icon icon="tabler:thumb-up-filled" />
      </div>
      <span class="text-sm">
        {{ props.likeData.length ?? 0 }}
        {{ likeLabel }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { ContentItemT } from "../types/types";
import { computed } from "vue";

const props = defineProps<ContentItemT>();

const likeLabel = computed(() =>
  props.likeData.length > 1 ? "Likes" : "Like",
);

const commenterColor = computed(() => `text-${props.author.colorBase}-500`);
</script>

<style scoped>
@reference "tailwindcss";

.info-bar-item {
  @apply flex items-center justify-center gap-1 rounded-lg text-2xl;
}
</style>
