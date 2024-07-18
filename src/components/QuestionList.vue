<template>
  <ul class="mx-4">
    <!-- v-for lets us loop, similar to `.map()` in JSX -->
    <li v-for="(q, idx) in props.questions" :key="idx" class="my-4 list-none">
      <Question :question="q" @answered="questionAnswered"></Question>
    </li>
  </ul>
</template>

<script setup>
import { ref, watch } from "vue";
import Question from "./Question.vue";

const props = defineProps({
  questions: Array,
});
const score = defineModel("score", { type: Number }); // score as %
const questionsAnswered = defineModel("questionsAnswered", { type: Number });

const numCorrect = ref(0);

function questionAnswered(correct) {
  if (correct) {
    numCorrect.value++;
  }
  questionsAnswered.value++;
}

// `watch` is like `useEffect` React hook.
// when `numCorrect` changes, the following function will run (which updates the score)
watch(numCorrect, () => {
  score.value = Math.round((numCorrect.value / props.questions.length) * 100);
});
</script>
