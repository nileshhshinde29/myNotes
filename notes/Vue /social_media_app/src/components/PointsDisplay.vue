<template>
    <div class="container">
        <button class="btn btn-secondary mb-4 floating-button " data-bs-toggle="modal" data-bs-target="#staticBackdrop"
            @click="() => addQuestion = !addQuestion">Add <br>Question</button>

        <!-- Modal -->
        <div class="modal  fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Add Question</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <TextEdior :data="data" @setQuestion='setQuestion' />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                            @click="edit = false">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                            @click="edit ? saveEdit(editId) : submit()">
                            {{ edit ? "Save Edit" : "Save" }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!questions.length">Please add questions 😶</div>
        <div class="accordion" v-for="item in questions" :key="item" :id="'accordionExample' + item._id">
            <div class="accordion-item">
                <h2 class="accordion-header" :id="item._id">

                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#collapseOne' + item._id" :aria-controls="'collapseOne' + item._id">
                        {{ item.question }}
                    </button>

                </h2>
                <div :id="'collapseOne' + item._id" class="accordion-collapse collapse" :aria-labelledby="item._id"
                    :data-bs-parent="'#accordionExample' + item._id">
                    <button class="btn float-end" @click="deleteQuestion(item._id)">Delete</button>
                    <button class="btn float-end" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                        @click="edits(item)">Edit</button><br>

                    <div class="accordion-body" v-html="item.answer">

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import TextEdior from './TextEdior.vue';
import axios from 'axios'
export default {

    components: {
        TextEdior,

    },
    mounted() {
        this.getQuestions()
        console.log(this.$route.params.id);
    },

    data() {
        return {
            addQuestion: false,
            questions: [],
            data: {
                question: '',
                answer: '',
            },
            edit: false,
            editId: null
        };
    },

    watch: {
        '$route.params.id': {
            handler() {
                this.getQuestions()
            },
            immediate: true
        }
    },

    methods: {
        async getQuestions() {
            await axios
                .post("http://localhost:8081/question/getQuestions", { course_id: this.$route.params.id },
                    {
                        headers: {
                            Authorization: JSON.parse(localStorage.getItem("currentUser")),
                        }
                    })
                .then((res) => {
                    this.questions = res.data
                })
                .catch((e) => console.log(e));
        },

        async submit() {
            await axios
                .post("http://localhost:8081/question/addQuestion", { question: this.data.question, answer: this.data.answer, course_id: this.$route.params.id },
                    {
                        headers: {
                            Authorization: JSON.parse(localStorage.getItem("currentUser")),
                        }
                    })
                .then(() => {
                    this.data.question = ''
                    this.data.answer = ''
                    this.getQuestions()
                })
                .catch((e) => console.log(e));
        },
        setQuestion(name, value) {

            this.data[name] = value
        },
        edits(item) {
            this.edit = true
            this.editId = item._id
            this.data.question = item.question,
                this.data.answer = item.answer
        },

        async saveEdit(id) {
            await axios
                .put(`http://localhost:8081/question/editQuestion${id}`, { question: this.data.question, answer: this.data.answer },
                    {
                        headers: {
                            Authorization: JSON.parse(localStorage.getItem("currentUser")),
                        }
                    })
                .then(() => {
                    this.edit = false
                    this.data.question = ''
                    this.data.answer = ''
                    this.getQuestions()
                })
                .catch((e) => console.log(e));

        },
        async deleteQuestion(id) {
            await axios
                .delete(`http://localhost:8081/question/delete${id}`,
                    {
                        headers: {
                            Authorization: JSON.parse(localStorage.getItem("currentUser")),
                        }
                    })
                .then((res) => {
                    console.log(res);
                    this.getQuestions()
                })
                .catch((e) => console.log(e));
        }

    }
}
</script>

<style scoped>
.container {
    position: relative;
}

.floating-button {
    position: fixed;
    bottom: 20px;
    z-index: 10000;
    right: 20px;
    padding: 10px 20px;
    background-color: #171718;
    color: white;
    border: none;
    border-radius: 150px;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    height: 100px;
    width: 100px;
}
</style>