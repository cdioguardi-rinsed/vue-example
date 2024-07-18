<template>
  <main class="main mt-12">
    <ScoreBoard
      :score="score"
      :questions-answered="questionsAnswered"
      :total-questions="questions.length"
    ></ScoreBoard>
    <!-- v-model directive is two-way binding (data can change from both ends) -->
    <QuestionList
      v-model:score="score"
      v-model:questions-answered="questionsAnswered"
      :questions="questions"
    ></QuestionList>
  </main>
</template>

<script setup>
import ScoreBoard from "./components/ScoreBoard.vue";
import QuestionList from "./components/QuestionList.vue";
import questions from "./assets/questions.json";
import { ref } from "vue";

const score = ref(0);
const questionsAnswered = ref(0);
</script>
