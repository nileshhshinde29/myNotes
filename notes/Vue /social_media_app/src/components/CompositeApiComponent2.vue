<script setup>

import { reactive, watch } from 'vue'

let formData = reactive({
    fname: '',
    lname: '',
    mobile: '',
    gender: ''

})


watch(formData, () => {
    error = {}
    if (!formData.fname) {
        error.fname = 'F name required'
    }
    if (!formData.lname) {
        error.lname = "l name required"
    }
    if (!formData.mobile) {
        error.mobile = 'mobile required'
    }
    if (!formData.gender) {
        error.gender = "gender required"

    }
}, { deep: true })

let error = reactive({})

const submit = () => {

    if (Object.keys(error).length == 0) {

        console.log(formData);
        formData.fname = ''
        formData.lname = ''
        formData.mobile = ''
        formData.gender = ''
    }
    console.log(error);

}

</script >
<template>
    <div>
        <input :class="`f-10 ${error.fname ? 'red' : ''}`" placeholder="First Name" v-model="formData.fname" /><br>
        <input :class="`f-10 ${error.lname ? 'red' : ''}`" placeholder="Last Name" v-model="formData.lname" /><br>
        <input :class="`f-10 ${error.mobile ? 'red' : ''}`" placeholder="Mobile no" v-model="formData.mobile" /><br>
        <input :class="`f-10 ${error.gender ? 'red' : ''}`" placeholder="gender" v-model="formData.gender" /><br>
        <button @click="submit" class="f-10">Submit</button>
    </div>
</template>
<style scoped>
.btn1 {
    height: 20px;
    width: 200px;
    font-size: 10px
}

.red {
    border: 1px red solid
}

.f-10 {
    font-size: 10px;
}
</style>