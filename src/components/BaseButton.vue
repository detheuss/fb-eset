<template>
  <button
    class="w-full cursor-pointer rounded px-3 py-2 font-black text-white transition duration-150 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed"
    :class="[
      baseBgClass,
      hoverBgClass,
      activeBgClass,
      disabledBgClass,
      focusRingClass,
    ]"
    v-bind="props.buttonAttrs"
  >
    {{ cta }}
  </button>
</template>

<script setup lang="ts">
import { computed, type ButtonHTMLAttributes } from "vue";
import { useUserStore } from "../store/user";

const userStore = useUserStore();

const baseBgClass = computed(() => `bg-${userStore.color.color500}`);
const hoverBgClass = computed(() => `hover:bg-${userStore.color.color600}`);
const activeBgClass = computed(() => `active:bg-${userStore.color.color700}`);
const disabledBgClass = computed(
  () => `disabled:bg-${userStore.color.color300}`,
);
const focusRingClass = computed(() => `focus:ring-${userStore.color.color400}`);

const props = defineProps<{
  buttonAttrs?: ButtonHTMLAttributes;
  cta?: string;
}>();
</script>

<style scoped lang="scss"></style>
