<template>
    <button class="btn">{{ label }}</button>
</template>

<script>
export default {
    props: ['label', 'color'],
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.btn {
    box-sizing: border-box;
    appearance: none;
    background-color: transparent;
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
