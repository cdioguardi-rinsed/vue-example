<template>
  <section class="bg-white p-2 rounded shadow">
    <h6 class="text-lg">{{ props.question.question }}</h6>
    <!-- @ is shorthand for v-on -->
    <!-- .prevent is a built-in modifier for this event. calls `event.preventDefault()` -->
    <form @submit.prevent="submit">
      <QuestionAnswer
        v-for="option in ['A', 'B', 'C', 'D']"
        v-model="selectedAnswer"
        :key="option"
        :id="id"
        :value="option"
        :text="props.question[option]"
        :correct="option == props.question.answer"
        :answered="answered"
      ></QuestionAnswer>
      <button
        v-if="!answered"
        type="submit"
        :disabled="!selectedAnswer"
        :class="
          'uppercase font-mono px-2 py-1 rounded border border-transparent ' +
          (!selectedAnswer
            ? 'text-gray-500'
            : 'text-green-500 hover:border-green-500')
        "
      >
        Submit
      </button>
    </form>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useId } from "../utils/id";
import QuestionAnswer from "./QuestionAnswer.vue";

const props = defineProps({
  question: Object,
});
const emit = defineEmits(["answered"]);

// this just genertes a unique ID to use for each question,
// so each radio button can have an id for the corresponding label
const { id } = useId();

const selectedAnswer = ref(null);
const answered = ref(false);

function submit() {
  answered.value = true;
  emit("answered", selectedAnswer.value == props.question.answer);
}
</script>
