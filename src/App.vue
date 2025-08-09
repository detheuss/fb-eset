<template>
  <div class="mx-auto flex w-full max-w-xl flex-col gap-5 p-5">
    <section id="user-bar" class="w-full">
      <UserBar />
    </section>

    <section id="create-post" class="w-full">
      <CreatePost />
    </section>
    <section id="wall" class="w-full"></section>
  </div>
</template>

<script setup lang="ts">
import CreatePost from "./components/CreatePost.vue";
import UserBar from "./components/UserBar.vue";
</script>

<style scoped></style>
