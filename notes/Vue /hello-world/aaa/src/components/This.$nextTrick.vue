<!-- app.vue -->
<template>
    <div>
        <h1>nextTick Method</h1>
        <h2>{{ message }}</h2>
        <button @click="changeMessage">Change Message</button>
        <p ref="messageOutput">This will be updated: {{ message }}</p>
        <input ref="myFocus" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Initial Message',
        };
    },
    methods: {
        changeMessage() {
            // Perform some data changes
            this.message = 'Updated Message';
            this.$refs.myFocus.focus();

            // Use nextTick to execute code after the DOM update cycle
            this.$nextTick(() => {
                // Code here will run after the DOM has been updated
                // You can safely access updated DOM elements or components
                // and perform additional tasks after the reactivity cycle.

                // For example, you can access DOM elements using refs
                const messageOutput = this.$refs.messageOutput;
                console.log('Updated message:', messageOutput.textContent);
            });
        },
    },
};
</script>
