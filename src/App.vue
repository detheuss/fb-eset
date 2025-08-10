<template>
  <div class="mx-auto flex w-full max-w-xl flex-col gap-5 p-5">
    <nav id="user-bar" class="w-full">
      <UserBar />
    </nav>

    <main class="flex w-full max-w-xl flex-col gap-5">
      <section id="create-post" class="w-full">
        <CreateContentItem content-type="post" />
      </section>

      <section id="wall" class="w-full">
        <Wall />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import CreateContentItem from "./components/CreateContentItem.vue";
import UserBar from "./components/UserBar.vue";
import Wall from "./components/Wall.vue";
</script>

<style scoped></style>
