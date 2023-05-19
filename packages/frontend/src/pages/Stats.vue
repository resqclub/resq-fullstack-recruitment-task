<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import Loader from '../components/Loader.vue';
import { computed, toRefs } from 'vue';
import StatsCard from '../components/StatsCard.vue';
import type { Stats } from '../Stats.ts';

const processStats = (stats: Omit<Stats, 'latestIdeaTime'> & { latestIdeaTime: string }) => ({
    totalIdeas: stats.totalIdeas,
    totalParticipants: stats.totalParticipants,
    latestIdeaTime: stats.latestIdeaTime ? new Date(stats.latestIdeaTime) : undefined,
})
const { isLoading, isError, data, error } = useQuery({
   queryKey: ['getStats'],
   queryFn: (): Promise<Stats> => fetch(`http://localhost:3000/stats`)
       .then((res) => res.json())
       .then(processStats)
});

const intlLatestIdeaTime = computed(() => Intl.DateTimeFormat(undefined, {
  dateStyle: 'short',
  timeStyle: 'short',
}).format(data.latestIdeaTime));

</script>

<template>
  <main>
      <Loader v-if="isLoading"/>
      <template v-else-if="isError">{{ error }}</template>
      <template v-else>
          <h1>Stats</h1>
          <section class="statsList">
              <StatsCard title="Total ideas" :text="data.totalIdeas" />
              <StatsCard title="Total participants" :text="data.totalParticipants" />
              <StatsCard title="Latest idea" :text="intlLatestIdeaTime" />
          </section>
      </template>
  </main>
</template>

<style scoped>
.statsList > * {
    margin-bottom: 10px;
}
</style>
