<template>
  <div
    class="flex items-center justify-between gap-3 rounded-lg px-4 py-3"
    :class="`border border-${userStore.color.color500} `"
  >
    <div class="flex items-center justify-center gap-3">
      <Icon
        icon="tabler:user-square-rounded"
        class="text-3xl transition-colors"
        :class="`text-${userStore.color.color500}`"
      />

      <span class="flex flex-col text-xs">
        <span> Logged in as </span>
        <Transition name="fade" mode="out-in">
          <span
            class="text-sm font-bold"
            :class="`text-${userStore.color.color500}`"
            :key="selectedUser.id"
          >
            {{ selectedUser.username }}
          </span>
        </Transition>
      </span>
    </div>

    <select
      v-model="selectedUser"
      @change="handleSetActiveUser"
      class="rounded border px-3 py-2 font-bold text-white"
      :class="`border border-${userStore.color.color500} bg-${userStore.color.color500}`"
    >
      <option v-for="user in users" :key="user.id" :value="user">
        {{ user.username }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { TEST_USERS } from "../test-data/users";
import { useUserStore } from "../store/user";

const users = [...TEST_USERS];

const userStore = useUserStore();

const selectedUser = ref(userStore.activeUser);

const handleSetActiveUser = () => userStore.setActiveUser(selectedUser.value);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
