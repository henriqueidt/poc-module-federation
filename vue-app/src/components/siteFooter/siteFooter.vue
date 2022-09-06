<script>
import store, { increment } from "host/zustandStore";

const { subscribe } = store;

export default {
  data() {
    return {
      countValue: 0,
    };
  },
  methods: {
    onClick() {
      increment();
    },
  },
  mounted() {
    subscribe((state) => {
      this.countValue = state.count;
    });
  },
};
</script>

<template>
  <footer>
    <button @click="onClick">increment</button>
    <div>This is the footer</div>
    <div>The zustand count is: {{ countValue }}</div>
  </footer>
</template>
