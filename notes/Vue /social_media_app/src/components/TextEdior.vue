<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {

    props: ['data'],
    emits: ['setQuestion'],
    components: {
        QuillEditor
    },
    data() {
        return {
            // question: '',
            content: '',
            options: {
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        [{ script: 'sub' }, { script: 'super' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ color: [] }, { background: [] }],
                        [{ align: [] }],
                        ['link', 'image', 'video'],
                        ['clean'],
                    ],
                },

                placeholder: 'Write answer here...',
                // readOnly: true,
                theme: 'snow'
            }
        }
    },
    computed: {
        question: {
            get() {
                return this.data.question;
            },
            set(value) {
                this.$emit('setQuestion', 'question', value);
            },
        },
        answer: {
            get() {
                return this.data.answer;
            },
            set(value) {
                this.$emit('setQuestion', 'answer', value);
            },
        },
    },

    methods: {
        submit() {
            console.log(this.content);
        }
    }
}
</script>
<template>
    <div>
        <input v-model="question" placeholder="Write a question here" class="form-control mb-2" />
        <QuillEditor :options="options" contentType="html" v-model:content="answer" />

    </div>
</template>
<style >
.ql-editor {
    height: 200px !important
}
</style>