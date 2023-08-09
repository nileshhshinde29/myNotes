<template>
    <div>
        <textarea v-model="userCode" rows="10" cols="50"></textarea>
        <button @click="executeCode">Run Code</button>
        <div class="output">
            <p v-for="output in codeOutput" :key="output">{{ output }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userCode: '',
            codeOutput: []
        };
    },
    methods: {
        executeCode() {
            try {
                let executeCode = new Function(this.userCode);
                this.codeOutput = [];
                const logCapture = msg => this.codeOutput.push(msg);
                console.log = logCapture; // Capture console logs
                executeCode();
            } catch (error) {
                this.codeOutput.push(`Error: ${error.message}`);
            }
        }
    }
};
</script>