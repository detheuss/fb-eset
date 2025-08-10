<template>
  <div
    class="absolute top-[-13px] right-5 flex h-7 w-40 items-center justify-center rounded-lg border-1 border-zinc-300 bg-white"
  >
    <span class="text-xs font-black text-zinc-400">
      {{ text }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ text: string }>();
</script>

<style scoped></style>
