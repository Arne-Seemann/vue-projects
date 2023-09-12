Vue.createApp({
  data() {
    const allTodos = JSON.parse(localStorage.getItem("Todos")) || [];
    return {
      count: JSON.parse(localStorage.getItem("count")) || 0,
      Todos: allTodos,
      TodosCopy: [...allTodos],
    };
  },
  methods: {
    saveData() {
      localStorage.setItem("Todos", JSON.stringify(this.Todos));
      localStorage.setItem("count", JSON.stringify(this.count));
    },
    addTodo() {
      if (todo_input.value.length < 5) {
        alert("You must write something!");
      } else {
        this.count++;
        this.Todos.push({
          description: todo_input.value,
          id: this.count,
          done: false,
        });
        this.saveData();
      }
    },
    updateTodoState(todo) {
      todo.done = !todo.done;
      this.saveData();
    },
    filter(e) {
      const currentBtn = e.target;
      const btnAll = document.getElementById("all");
      const btnOpen = document.getElementById("open");
      const btnDone = document.getElementById("done");
      if (btnOpen === currentBtn) {
        this.Todos = [...this.TodosCopy];
        this.Todos = this.Todos.filter((todo) => !todo.done);
        btnDone.checked = false;
        btnAll.checked = false;
      } else if (btnDone === currentBtn) {
        this.Todos = [...this.TodosCopy];
        this.Todos = this.Todos.filter((todo) => todo.done);
        btnOpen.checked = false;
        btnAll.checked = false;
      } else if (btnAll === currentBtn) {
        this.Todos = [...this.TodosCopy];
        btnOpen.checked = false;
        btnDone.checked = false;
      }
    },
    deleteDone() {
      this.Todos = this.Todos.filter((todo) => !todo.done);
      this.TodosCopy = [...this.Todos];
      this.saveData();
    },
  },
}).mount("#app");
