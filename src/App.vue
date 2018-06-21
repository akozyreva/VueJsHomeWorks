<template lang="pug">
    .container
        .row.main
            .col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3
            h1.red Direcitve
            <button v-myDirective:click="counted"> +1 </button>
            p {{ counter }}        
</template>
<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    directives: {
        myDirective: {
            bind(el, binding, vnode) {
                let type = binding.arg;
                let myFunction = binding.value;
                console.log(type, myFunction)
                el.addEventListener(type, myFunction);
            }
        }
    },
    methods: {
        counted() {
            return this.counter++;
        }
    }
}
</script>
<style lang="stylus">
.main
    background-color green
    .red
        color red
</style>