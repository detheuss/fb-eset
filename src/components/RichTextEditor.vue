<template>
  <div class="quill-override flex flex-col gap-3">
    <QuillEditor
      placeholder="What's on your mind?"
      v-model:content="postText"
      contentType="html"
      ref="editorRef"
    />
  </div>
</template>

<script setup lang="ts">
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { ref } from "vue";

const postText = defineModel<string>();
const editorRef = ref<InstanceType<typeof QuillEditor> | null>(null);

// an unfortunate workaround - quill retains state and ignores binding.
const hardReset = () => {
  postText.value = "";
  const quill = editorRef.value?.getQuill();
  if (quill) {
    quill.setText("");
    quill.history.clear();
    quill.setSelection(0, 0);
  }
};

defineExpose({ hardReset });
</script>

<style scoped>
@reference "tailwindcss";

.quill-override :deep(.ql-toolbar.ql-snow) {
  @apply rounded-lg border border-zinc-200 bg-gradient-to-r from-zinc-200 to-white;
}
.quill-override :deep(.ql-container.ql-snow) {
  @apply rounded-lg border border-zinc-200 bg-white;
}
</style>
