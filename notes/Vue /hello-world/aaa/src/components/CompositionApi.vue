<template lang="">
    <div>
        Composition Api
        Title = {{title}}<br>
        Form data = {{formData}}
        <div>
            email- {{emailId}}
        </div>
        <div>
            email2 with toRef- {{emailId2}}
        </div>
        <button @click="changeName">change name</button>
    </div>
</template>
<script>

import { ref, reactive, toRef, isReactive, isRef, onMounted } from 'vue'
export default {
    name: 'CompositionAPI',
    setup() {
        let title = ref('nilesh')
        const formData = reactive({  // By using the reactive function, any changes to the properties of formData will trigger automatic updates in the UI.
            name: 'nilesh',
            email: 'first@gmail.com'
        })

        onMounted(() => {
            console.log('hii I am mounted')
        })

        console.log(isReactive(formData))
        console.log(isRef(title))

        setTimeout(() => {

            title.value = "new title"
            formData.name = "new name in form"
            formData.email = "changed@gmail.com"
        }, 2000)


        const newForm = toRef(formData, "email");
        const changeName = () => {
            formData.name = "change name on click"
        }


        return {
            title,
            formData,
            emailId: formData.email,
            emailId2: newForm,
            changeName,
        }


    },
    methods: {
        // changeName() {

        //     this.formData.name = "nilesh111111"
        // }
    }
}
</script>
<style lang="">
    
</style>