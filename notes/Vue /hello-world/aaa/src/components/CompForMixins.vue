<template lang="">
    <div>
        <h2>component where mixins are used</h2>
    </div>
    <button @click="increaseCount">{{count}} inc+</button><br>
    <button @click="getData">Fetch Api and display data using mixins</button>
    <div v-for="item in fetchedData.slice(0,5)" :key="item">
    <h6>{{item.title}}</h6>
    </div>
</template>
<script>
import Mixins from '../Mixins/Mixins'
import Mixins2 from '../Mixins/Mixin2'
export default {
    mixins: [Mixins, Mixins2]
}
</script>
<style scoped >
h2 {
    color: blue;
}
</style>