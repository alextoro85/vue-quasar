<template>
    <button class="btn">{{ label }}</button>
</template>

<script>
export default {
    props: ['label', 'color', 'log'],
    data() {
        return {
        }
    },
    beforeCreate() {
        if (this.log)
            console.log('beforeCreate', document.querySelector('#app').innerHTML)
    },
    created() {
        if (this.log)
            console.log('created()', document.querySelector('#app').innerHTML)
    },
    beforeMount() {
        if (this.log)
            console.log('beforeMount()', document.querySelector('#app').innerHTML)
    },
    mounted() {
        if (this.log)
            console.log('mounted()', document.querySelector('#app').innerHTML)
    },
    beforeUpdate() {
        if (this.log)
            console.log('beforeUpdate()', document.querySelector('#app').innerHTML)
    },
    updated() {
        if (this.log)
            console.log('updated()', document.querySelector('#app').innerHTML)
    },
    beforeUnmount() {
        if (this.log)
            console.log('beforeUnmount()', document.querySelector('#app').innerHTML)
    },
    unmounted() {
        console.log('unmounted()', document.querySelector('#app').innerHTML)
    },
}
</script>

<style scoped>
.btn {
    box-sizing: border-box;
    appearance: none;
    background-color: lightgrey;
    border: 2px solid v-bind('color');
    border-radius: 0.6em;
    color: v-bind('color');
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: 20px;
    padding: 1.2em 2.8em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
}

.btn:hover,
.btn:focus {
    color: #fff;
    outline: 0;
}
</style>
