<template>
  <div class="about">
    <h1>Event List Page</h1>
    <router-link :to="{ name: 'event-show', params: { id: 1 } }">
      Show event #1
    </router-link>
  </div>
</template>
