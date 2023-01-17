<template>
    <router-view/>
    <div id="message"></div>
</template>

<style>
* {
    padding: 0;
    margin: 0;
}

body {
    background-color: white;
}
</style>
<script>
import socket from '@/utils/Socket'

export default {
    components: {},
}
</script>
