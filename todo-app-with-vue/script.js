Vue.createApp({
  data() {
    return {
      count: JSON.parse(localStorage.getItem("count")) || 0,
      Todos: JSON.parse(localStorage.getItem("Todos")) || [],
    };
  },
  computed: {},
  methods: {
    saveData() {
      localStorage.setItem("Todos", JSON.stringify(this.Todos));
      localStorage.setItem("count", JSON.stringify(this.count));
    },
    addTodo() {
      this.count++;
      this.Todos.push({
        description: todo_input.value,
        id: this.count,
        done: false,
      });
      this.saveData();
    },
    updateTodoState(todo) {
      todo.done = !todo.done;
      this.saveData();
    },
    filter(event) {
      if (event.target === document.querySelector("#open")) {
        this.Todos.filter((todo) => !todo.done);
      }
    },
  },
}).mount("#app");
