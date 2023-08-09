<script setup>
import { ref } from 'vue'

let show = ref(true)



</script>

<template>
    <div>

        <button @click="show = !show">Toggle</button>
        <Transition>
            <div v-if="show">hello</div>
        </Transition>


    </div>
</template>

<style scoped>
/* .v-enter-active, */
.v-leave-active {
    transition: opacity 0.5s ease;
}

/* .v-enter-from, */

.v-leave-to {
    opacity: 0;
}
</style>