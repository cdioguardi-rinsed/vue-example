<template>
  <div :class="answerClass">
    <input
      v-model="answer"
      type="radio"
      name="answer"
      :id="props.id + '-' + props.value"
      :value="props.value"
      :disabled="props.answered"
      class="mr-2"
    />
    <label :for="props.id + '-' + props.value">{{ props.text }}</label>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  id: String,
  value: String,
  text: String,
  correct: Boolean,
  answered: Boolean,
});
const answer = defineModel();

// Computed is memoization. It only re-computed when it's dependencies change
// Instead of recalculating this every time any props change, this will only run if `answered` or `correct` changes
// similar to `useMemo` React hook
const answerClass = computed(() => {
  let cls = "flex justify-start items-baseline my-1 ";
  if (props.answered) {
    cls += props.correct ? "text-green-500" : "text-red-500";
  }
  return cls;
});
</script>
