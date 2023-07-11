<template >
  <div>
    <input v-model="text" placeholder="tack" />
    <input v-model="day" placeholder="time" />
    <input v-model="reminder" id="check" type="checkbox" />
    <label for="check">Reminder</label>
    <button v-if="!editTaskState.status" @click="addTask">Add Task</button>
    <button v-else @click="saveEditTask">Edit Task</button>
  </div>
</template>
<script>
export default {
  name: "addTask",
  emits: ["addTask"],
  props: ["editTaskState"],
  data() {
    return {
      text: "",
      day: "",
      reminder: false,
    };
  },
  //   updated() {
  //     // Code to execute after component data is updated
  //     console.log(this.editTaskState.text);
  // (this.text = this.editTaskState.text),
  // (this.day = this.editTaskState.day),
  // (this.reminder = this.editTaskState.reminder);
  //   },

  methods: {
    addTask() {
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
      this.$emit("addTask", newTask);
      (this.text = ""), (this.day = ""), (this.reminder = false);
    },
    saveEditTask() {
      const newTask = {
        id: this.editTaskState.id,
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };

      this.$emit("saveEditTask", newTask);
      (this.text = ""), (this.day = ""), (this.reminder = false);
    },
  },
  watch: {
    editTaskState: {
      handler() {
        (this.text = this.editTaskState.text),
          (this.day = this.editTaskState.day),
          (this.reminder = this.editTaskState.reminder);
        console.log("Tasks have changed:");
      },
      deep: true, // Watch for nested changes in 'tasks' array elements
    },
  },
};
</script>
<style>
</style>