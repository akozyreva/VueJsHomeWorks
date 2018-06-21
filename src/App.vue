<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <h1>Server Status</h1>
                </header>
            </div>
        </div>
        <hr>
        <div class="row">
            <server></server>
            <serverStatus></serverStatus>
        </div>
        <hr>
        <footerText></footerText>
    </div>
</template>

<script>
    import Server from './Server.vue';
    import ServerDetails from './ServerDetails.vue'
    import Footer from './Footer.vue'
    export default {
        components: {
            //have locally access
            'server': Server,
            'serverStatus': ServerDetails,
            'footerText': Footer
        }
    }
</script>

<style>

</style>
