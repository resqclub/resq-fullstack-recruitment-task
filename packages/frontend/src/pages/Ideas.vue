<script setup lang="ts">
import { useQuery, useMutation, useQueryClient } from '@tanstack/vue-query';
import { Idea } from '../idea';
import Loader from '../components/Loader.vue';
import IdeaList from '../components/IdeaList.vue';
import SubmitIdeaForm from '../components/SubmitIdeaForm.vue';

const queryClient = useQueryClient();

// When fetching ideas from backend, they need a little post-processing
const processIdeas = (
  ideas: (Omit<Idea, 'submittedAt'> & { submittedAt: string })[]
) =>
  ideas.map((d) => ({
    ...d,
    submittedAt: new Date(d.submittedAt),
  }));

// Query for fetching ideas from backend
const { isLoading, isError, data, error } = useQuery({
  queryKey: ['getIdeas'],
  queryFn: (): Promise<Idea[]> =>
    fetch(`http://localhost:3000/ideas`)
      .then((res) => res.json())
      .then(processIdeas),
});

// Mutation for submitting new ideas
const { mutate: submitIdea } = useMutation({
  mutationKey: ['submitIdea'],
  mutationFn: (newIdea: Omit<Idea, 'submittedAt'>) =>
    fetch(`http://localhost:3000/ideas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newIdea),
    })
      .then((res) => res.json())
      .then(processIdeas),
  onSuccess: (data) => queryClient.setQueryData(['getIdeas'], data),
});
</script>

<template>
  <h1>Ideas</h1>

  <h2>Submit your own!</h2>
  <SubmitIdeaForm @submitIdea="submitIdea" />

  <h2>Current ideas</h2>
  <Loader v-if="isLoading" />

  <article v-else-if="isError">{{ error }}</article>

  <IdeaList v-else :ideas="data ?? []"  />
</template>
