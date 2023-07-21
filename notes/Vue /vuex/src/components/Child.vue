<template lang="">

  <div>
    <h1>Vuex in vue</h1>
    Hello {{$store.state.name}}
    <button @click="changeName">Change name</button>
    <button @click="changeNameAsync">Change Async name</button>
    <h6>Getters {{privateKey}}&nbsp; If we have to add something before or after the any value then we can use getters</h6>
    <h6>Getters {{getterInsideAnotherGetter}}&nbsp; We can add getter inside another getter.</h6>
    <p>Map</p>
    <h6>Name : {{name}}</h6>
    <h6>SecreteKey : {{secreteKey}}</h6>
    <br/>
    <p>Module</p>
    <h6>{{userType}}</h6>
    <button @click="changeUserType('Malak')">change User type</button>
    <h6></h6>
    <h6></h6>

  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'chIld',
  computed: {
    ...mapState({
      name: (state) => state.name,
      userType: state => state.admin.userType

    }),
    ...mapGetters({
      secreteKey: 'hashAdd'

    }),



    privateKey() {
      return this.$store.getters.hashAdd
    },
    getterInsideAnotherGetter() {
      return this.$store.getters.hashAddNew;
    }
  },

  methods: {

    ...mapMutations({
      setNewName: 'setNewName',
      changeUserType: 'changeUserType'
    }),

    ...mapActions({
      setName: 'setName'

    }),


    changeName() {
      // this.$store.commit('setNewName', 'Nilesh shinde')
      // this.$store.state.name = "Nilesh Shinde"

      this.setNewName('set by map Mutation')
    },

    changeNameAsync() {
      // this.$store.dispatch('setName', "Onkar Bhosale")
      this.setName("set by Map Action")
    }
  },

}
</script> 
<style lang="">
  
</style>