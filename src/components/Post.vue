<template>
  <div :id="id" class="flex gap-3">
    <div v-html="postText" />
    <div class="flex flex-row gap-3">
      <BaseButton cta="Like">Like</BaseButton>
      <BaseButton cta="Comment">Comment</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Post } from "../types/types";
import BaseButton from "./BaseButton.vue";


defineProps<Post>();
</script>

<style scoped></style>
