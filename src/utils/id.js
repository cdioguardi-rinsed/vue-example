import { ref } from "vue";

let globalId = 0;
export function useId() {

  const id = ref((globalId++).toString());
  
  return {
    id,
  };
}
