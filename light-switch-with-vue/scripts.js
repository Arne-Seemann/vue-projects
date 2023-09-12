Vue.createApp({
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleLight() {
      this.isActive = !this.isActive;
      this.isActive
        ? (app.classList.add("nightContainer"),
          button.classList.add("nightSwitch"),
          (document.title = "Good Night"))
        : (app.classList.remove("nightContainer"),
          button.classList.remove("nightSwitch"),
          (document.title = "Good Morning"));
    },
  },
}).mount("#app");
