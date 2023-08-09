<script setup  >
import { defineProps, ref } from 'vue'
// defineProps({ todos: String, removeTodo: any })
const props = defineProps(['todos', 'removeTodo'])
const todos = ref(props.todos)
// const { todos } = props;

// watch(todos, () => {
//     console.log(todos);
// })

</script>
<template>
    <ul>
        <li v-for="(todo, index) in todos" :key="index">
            {{ todo }}
            <button @click="removeTodo(index)">Remove</button>
        </li>
    </ul>
</template>
