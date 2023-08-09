<template>
    <div>
        <h4>Pipe in Vue 3</h4>
        {{ capitalize(message) }}
        <br>
        <input v-model="message" />
    </div>
</template>

<script>
export default {
    name: 'NaMe',
    data() {
        return {
            message: '',
        };
    },

    methods: {
        capitalize(value) {
            if (!value) return '';
            return value.toUpperCase();
        },
    },
};
</script>
