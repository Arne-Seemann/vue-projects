Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    getOffset(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    removeFruit(removedFruit) {
      this.fruitBasket = this.fruitBasket.filter((fruit) => {
        return fruit !== removedFruit;
      });
    },
  },
}).mount("#app");
