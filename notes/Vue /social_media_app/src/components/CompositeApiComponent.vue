
<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue'

const store = useStore();

const name = computed(() => store.state.surname);

const changeName = () => {

    store.commit('setSurName', 'Nale');
    store.dispatch('setSurNameAfterTimeout', 'Gawade');

};

</script>

<template>
    <div>
        <p class="f-10">Name from store: {{ name }}</p>
        <button class="btn1" @click="changeName">Change Name using vuex</button>
    </div>
</template>

<style scoped>
.btn1 {
    height: 20px;
    width: 200px;
    font-size: 10px
}

.f-10 {
    font-size: 10px;
}
</style>

