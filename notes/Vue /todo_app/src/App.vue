<template>
  <div>
    <AddTask
      :editTaskState="editTaskState"
      @addTask="addTask"
      @saveEditTask="saveEditTask"
    />
    <div class="myClass">
      <Header title="Task Tracker" />
      <Butten
        name="button1"
        :style="{ backgroundColor: 'green', color: 'white' }"
      />
      <Butten
        name="button2"
        :style="{ backgroundColor: 'blue', color: 'white' }"
      />
      <Butten
        name="button3"
        :style="{ backgroundColor: 'red', color: 'white' }"
      />
    </div>
    <TaskList @editTask="editTask" @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import TaskList from "./components/TaskList.vue";
import Butten from "./components/Butten.vue";
import Header from "./components/Header.vue";
import AddTask from "./components/AddTask.vue";

export default {
  name: "App",
  components: {
    Header,
    Butten,
    TaskList,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      editTaskState: { status: false },
    };
  },

  created() {
    this.tasks = [
      { id: 1, text: "Doctors appointment", day: "1 march", reminder: true },
      { id: 2, text: "Engineers appointment", day: "1 april", reminder: false },
      { id: 3, text: "Car Washing", day: "1 june", reminder: false },
      { id: 4, text: "Interview scheduled", day: "1 july", reminder: true },
    ];
  },
  methods: {
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    addTask(data) {
      const newId = Math.floor(Math.random() * 100000);
      this.tasks = [...this.tasks, { ...data, id: newId }];
      console.log("added in app", data);
    },

    editTask(id) {
      const task = this.tasks.filter((item) => item.id === id)[0];
      // this.editTaskState = true;
      const editObj = {
        status: true,
        id: id,
        text: task.text,
        day: task.day,
        reminder: task.reminder,
      };
      this.editTaskState = { ...this.editTaskState, ...editObj };
      console.log("task editaed", this.editTaskState, task);
    },
    saveEditTask(data) {
      const newData = this.tasks.map((item) =>
        item.id === data.id ? data : item
      );
      this.tasks = newData;
      this.editTaskState = {
        status: false,
        id: "",
        text: "",
        day: "",
        reminder: "",
      };
    },
  },
};
</script>

<style>
.myClass {
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
