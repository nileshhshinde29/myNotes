<template lang="">
    <div>
        <h6>Preview</h6> 
        <span class="x-btn" @click="$emit('cancelImg')">x</span>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'SloT',
    emits: ["cancelImg"]

}
</script>
<style>
.x-btn {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 18px;
    margin: 14px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
}

.x-btn:active {
    color: 'red';
    transform: scale(0.80);
}
</style>