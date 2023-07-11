<template>
  <div class="class1">
    <div>{{ task.text }}</div>
    <span>{{ task.day }}</span>
    <button @click="onDelete(task.id)">delete</button>
    <button @click="$emit('editTask')">Edit task</button>

    <div v-if="task.reminder" class="circle"></div>
  </div>
  <br />
</template >
<script>
export default {
  name: "TaskList",
  props: ["task"],
  methods: {
    onDelete(id) {
      this.$emit("delete-task", id);
    },
  },
};
</script>
<style>
.class1 {
  background-color: antiquewhite;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
}
.circle {
  height: 5px;
  width: 5px;
  background-color: green;
  border-radius: 2.5px;
}
</style>