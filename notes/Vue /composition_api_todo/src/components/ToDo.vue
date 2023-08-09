<template>
    <div class="todo-app">
        <h1>Todo App</h1>
        <div>
            <input type="text" v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo..." />
            <button @click="addTodo">Add</button>
        </div>

        <DisplayTodos :todos="todos" :removeTodo="removeTodo" />

    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import DisplayTodos from './DisplayTodos.vue';

const newTodo = ref('');
const todos = ref([]);

const addTodo = () => {
    if (newTodo.value.trim() === '') return;
    todos.value.push(newTodo.value);
    newTodo.value = '';
};

const removeTodo = (index) => {
    todos.value.splice(index, 1);
};

watch(todos, (newValue) => {

    alert(`Todo added: ${newValue}`);

}, { deep: true });

</script>

<style>
.todo-app {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
}
</style>
