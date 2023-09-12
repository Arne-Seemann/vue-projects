Vue.createApp({
  data() {
    return {
      red: 255,
      blue: 255,
      green: 255,
    };
  },
  computed: {
    color() {
      return `rgb(${this.red}, ${this.blue}, ${this.green})`;
    },
  },
}).mount("#app");
