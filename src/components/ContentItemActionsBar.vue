<template>
  <div
    class="flex w-full items-center justify-start gap-4 border-t border-zinc-200 bg-zinc-100 p-3"
  >
    <div class="flex items-center justify-center gap-2 text-xs">
      <span class="text-zinc-500">
        {{ likeData.length }}
      </span>
      <BaseButton
        is-icon-button
        :icon-name="hasLiked ? 'tabler:thumb-up-filled' : 'tabler:thumb-up'"
        @click="handleToggleLikePost"
      />
    </div>

    <div
      class="flex items-center justify-center gap-2 text-xs"
      v-if="!isComment"
    >
      <span class="text-zinc-500">
        {{ comments?.length ?? 0 }}
      </span>
      <BaseButton
        is-icon-button
        :icon-name="isCommentSectionOpen ? 'tabler:x' : 'tabler:message-filled'"
        @click="handleToggleCommenting"
      />
    </div>
    <BaseButton
      is-icon-button
      :icon-name="isEditing ? 'tabler:x' : 'tabler:pencil'"
      class="ms-auto"
      @click="handleToggleEditing"
      v-if="isOwnPost"
    />
    <BaseButton
      @click="handleDeletePost"
      is-icon-button
      icon-name="tabler:trash"
      v-if="isOwnPost"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"; // ref removed (no local refs now)
import { useUserStore } from "../store/user";
import type { ContentItemT, UserT } from "../types/types";
import BaseButton from "./BaseButton.vue";
import { useContentStore } from "../store/content";

const contentStore = useContentStore();
const userStore = useUserStore();

export type ContentItemActionsBarProps = {
  id: string;
  isComment: boolean;
  comments: ContentItemT[];
  likeData: string[];
  author: UserT;
};

const props = defineProps<ContentItemActionsBarProps>();

const isOwnPost = computed(() => userStore.activeUser.id === props.author.id);
const hasLiked = computed(() =>
  props.likeData.includes(userStore.activeUser.id),
);

const isCommentSectionOpen = defineModel<boolean>("isCommentOpen", {
  default: false,
});

const isEditing = defineModel<boolean>("isEditing", {
  default: false,
});

const handleToggleLikePost = () => {
  contentStore.toggleLike(userStore.activeUser.id, props.id);
};

const handleToggleCommenting = () => {
  isCommentSectionOpen.value = !isCommentSectionOpen.value;
};

const handleToggleEditing = () => {
  isEditing.value = !isEditing.value;
};

const handleDeletePost = () => {
  contentStore.deleteContentItem(props.id);
};
</script>

<style scoped></style>
