import { defineStore } from "pinia";
import type { UserT } from "../types/types";
import { computed, ref } from "vue";
import { TEST_USERS } from "../test-data/testUsers";

export const useUserStore = defineStore(
  "user",
  () => {
    // activeUser can be populated from local storage (pinia-plugin-persistedstate) 
    // this overrides the initial value
    const activeUser = ref({ ...TEST_USERS[0] });

    const color = computed(() => ({
      color50: `${activeUser.value.colorBase}-50`,
      color200: `${activeUser.value.colorBase}-200`,
      color300: `${activeUser.value.colorBase}-300`,
      color400: `${activeUser.value.colorBase}-400`,
      color500: `${activeUser.value.colorBase}-500`,
      color600: `${activeUser.value.colorBase}-600`,
      color700: `${activeUser.value.colorBase}-700`,
    }));

    const setActiveUser = (user: UserT) => {
      activeUser.value = user;
    };

    const getActiveUser = (): UserT => activeUser.value;

    return {
      activeUser,
      setActiveUser,
      getActiveUser,
      color,
    };
  },
  {
    persist: true,
  },
);
