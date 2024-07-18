<template>
  <div
    class="bg-white p-2 shadow fixed top-0 left-0 right-0 z-50 flex justify-between"
  >
    <h2 class="text-xl font-bold">Score: {{ props.score }}%</h2>
    <p>
      You have answered {{ props.questionsAnswered }} /
      {{ props.totalQuestions }} questions
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  score: Number,
  questionsAnswered: Number,
  totalQuestions: Number,
});
</script>
