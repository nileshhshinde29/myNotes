<template>
  <div>
    <div v-for="(task, index) in tasks" :key="index">
      <Task
        @editTask="$emit('editTask', task.id)"
        @delete-task="$emit('delete-task', task.id)"
        :task="task"
      />
    </div>
  </div>
</template>
<script>
import Task from "./Task";
export default {
  name: "TaskList",
  components: {
    Task,
  },
  props: ["tasks"],
  emits: ["delete-task", "editTask"],
};
</script>
<style>
</style>