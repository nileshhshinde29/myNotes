<template lang="">
    <div class='myForm'>
        <div v-for='(obj, index) in mainObj' :key="obj" class='my-form'>
         <h6>{{index+1}}&nbsp;{{obj.question}}</h6>  
         <input v-if="obj.type=='text'" v-model="answers[index]['answer']" />
          <div v-if="obj.type=='radio'"> 
             <label v-for="opt in obj.options" :key="opt" >
                 <input type="radio" :value='opt' v-model="answers[index]['answer']" />
                    {{opt}}
                 </label>
            <br/>
        </div>

        <div v-if="obj.type=='checkbox'"> 
             <label v-for="opt in obj.options" :key="opt">
                 <input type="checkbox" :value="opt"  v-model="answers[index]['answer']" />
                    {{opt}}
                 </label>
            <br/>
        </div>

        <div v-if="obj.type=='select'"> 
        <select id="fruit" v-model="answers[index]['answer']">
        <option v-for="opt in obj.options" :value="opt" :key="opt">{{ opt }}</option>
      </select>
            <br/>
        </div>


        
        </div> 
        <br>
       
        <button @click='onSubmit'>submit form</button>
    </div>
</template>
<script>
export default {
    name: 'forM',
    props: ['mainObj'],
    data() {
        return {
            answers: [],
        }
    },
    created() {
        console.log('c', this.mainObj)
    },
    watch: {
        mainObj(newVal, oldVal) {
            console.log('Previous value:', oldVal);
            console.log('New value:', newVal);
            this.answers = newVal.map(item => ({ que: item.question, answer: [] }))
            // Perform actions based on the previous and new values

        }
    },

    methods: {
        onSubmit() {
            console.log(this.answers)

        }
    }
}
</script>
<style >
.myForm {
    border: 1px solid;
    width: 400px;
    padding: 30px;
    border-radius: 10px;
}

.my-form {
    margin-left: 0px
        /* display: flex; */
        /* justify-content: start; */
        /* align-items: start; */
}
</style>