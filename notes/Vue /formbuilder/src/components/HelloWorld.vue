<template>
  <div class="hello">
    <div class="forms">
      <label for="fruit">Select form type:</label>
      <select id="fruit" v-model="selectedFruit">
        <option v-for="typee in types" :value="typee.name" :key="typee.id">{{ typee.name }}</option>
      </select>
      <p>You selected: {{ selectedFruit }}</p>
      <input v-focus placeholder="Question " v-model="question" />
      <br>
      <br>
      <p>options</p>
      <div v-if="selectedFruit == 'radio' || selectedFruit == 'checkbox' || selectedFruit == 'select'">
        <div v-for="(option, index) in options" :key="index">
          <input v-model="options[index]" :placeholder="`add option ${index + 1}`">
          <br />
        </div>
        <button @click="addOptions">add option</button>
      </div>
      <br>
      <button @click="submit">submit</button>
    </div>

    <Form :mainObj="mainObj" />
  </div>
</template>

<script>
import Form from './Form.vue'

const vFocus = {
  mounted: (el) => el.focus()
}
export default {
  name: 'HelloWorld',

  props: {
    msg: String
  },
  components: {
    Form
  },
  directives: {
    focus: vFocus
  },

  data() {
    return {
      mainObj: [],
      selectedFruit: 'default',
      types: [
        { id: 1, name: 'text' },
        { id: 2, name: 'radio' },
        { id: 3, name: 'checkbox' },
        { id: 4, name: 'select' },
      ],
      question: '',
      options: []

    }
  },

  methods: {
    addOptions() {
      this.options = [...this.options, '']

    },
    submit() {
      let newObj = { question: this.question, type: this.selectedFruit }
      if (this.options.length > 0) {
        newObj.options = this.options
      }
      this.mainObj = [...this.mainObj, newObj]
      this.options = []
      this.selectedFruit = 'default'
      console.log(this.mainObj)
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  justify-content: space-around;

}

.forms {
  border: 1px solid;
  width: 400px;
  padding: 30px;
  border-radius: 10px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
