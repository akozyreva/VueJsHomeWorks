<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selected='app-blue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selected='app-green'">Load Green Template</button>
                <button class="btn btn-danger" @click="selected='app-red'">Load Red Template</button>
                <hr>
                <component :is="selected">
                    <p>test</p>
                    <div slot="blue-title">
                        <p>title</p>
                        <h2>Test66</h2>
                    </div>
                    
                    <p>title2</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
            return {
                selected: 'app-blue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
