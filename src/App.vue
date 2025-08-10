<template>
  <div class="mx-auto flex w-full max-w-3xl flex-col gap-14 p-5">
    <nav id="user-bar" class="w-full">
      <UserBar />
    </nav>

    <main class="flex w-full flex-col gap-14">
      <section id="create-post" class="w-full">
        <h2 class="mb-3 text-center font-black">Share your thoughts...</h2>
        <CreateContentItem content-type="post" />
      </section>

      <section id="wall" class="w-full">
        <h2 class="mb-3 text-center font-black">Latest Feed</h2>
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
