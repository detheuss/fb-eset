<template>
  <button
    v-if="isIconButton"
    class="base-button border bg-white p-2 hover:bg-zinc-200"
    :class="[iconButtonTextClass, iconButtonBorderClass, focusRingClass]"
    v-bind="props.buttonAttrs"
  >
    <div class="flex gap-2 justify-center items-center">
      <Icon v-if="iconName" :icon="iconName" class="text-xl" />
      <span class="text-xs font-light" v-if="cta">{{ cta }}</span>
    </div>
  </button>
  <button
    v-else
    class="base-button px-3 py-2 text-zinc-50"
    :class="[
      baseBgClass,
      hoverBgClass,
      activeBgClass,
      disabledBgClass,
      focusRingClass,
    ]"
    v-bind="props.buttonAttrs"
  >
    <span>{{ cta }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed, type ButtonHTMLAttributes } from "vue";
import { useUserStore } from "../store/user";
import { Icon } from "@iconify/vue";

const userStore = useUserStore();

const baseBgClass = computed(() => `bg-${userStore.color.color500}`);
const hoverBgClass = computed(() => `hover:bg-${userStore.color.color600}`);
const activeBgClass = computed(() => `active:bg-${userStore.color.color700}`);
const disabledBgClass = computed(
  () => `disabled:bg-${userStore.color.color300}`,
);
const focusRingClass = computed(() => `focus:ring-${userStore.color.color400}`);
const iconButtonTextClass = computed(() => `text-${userStore.color.color500}`);
const iconButtonBorderClass = computed(
  () => `border border-${userStore.color.color500}`,
);
const props = defineProps<{
  buttonAttrs?: ButtonHTMLAttributes;
  cta?: string;
  isIconButton?: boolean;
  iconName?: string;
}>();

const isIconButton = computed(() => props.isIconButton);
</script>

<style scoped>
@reference "tailwindcss";

.base-button {
  @apply flex cursor-pointer items-center justify-center gap-2 rounded-lg font-black transition duration-150 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed;
}
</style>
