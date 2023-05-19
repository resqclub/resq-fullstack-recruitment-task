<script setup lang="ts">
import { Idea } from '../idea';

defineProps<{ ideas: Idea[] }>();
</script>

<template>
  <section class="idea-list">
    <article v-if="!ideas.length">No ideas yet!</article>

    <article v-else v-for="idea of ideas" class="idea-comment">
      <p class="tagline">
        By <span class="author-title">{{ idea.submittedBy }}</span> at
        {{
          Intl.DateTimeFormat(undefined, {
            dateStyle: 'short',
            timeStyle: 'short',
          }).format(idea.submittedAt)
        }}
      </p>
      <p class="content">{{ idea.content }}</p>
    </article>
  </section>
</template>

<style scoped>
.tagline {
  font-weight: bold;
}

.tagline, .content {
  text-align: start;
}

.author-title {
  color: blue;
}

.idea-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
</style>
