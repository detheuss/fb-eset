<template>
  <div class="quill-override flex flex-col gap-3">
    <QuillEditor
      placeholder="What's on your mind?"
      v-model:content="postText"
      contentType="html"
      class="bg-white"
    />
  </div>
</template>

<script setup lang="ts">
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const postText = defineModel<string>();
</script>

<style scoped>
@reference "tailwindcss";

.quill-override :deep(.ql-toolbar.ql-snow) {
  @apply rounded-lg border border-zinc-200 bg-gradient-to-r from-zinc-200 to-white;
}
.quill-override :deep(.ql-container.ql-snow) {
  @apply rounded-lg border border-zinc-200;
}
</style>
