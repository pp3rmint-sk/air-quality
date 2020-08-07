<template>
    <div class="row align-items-center">
        <div class="col-12">
             <b-alert :variant="type"
             :show="dismissCountDown"
             fade>
             {{ message }}
             </b-alert>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: ""
            },
            message: {
                type: String,
                default: ""
            },
        },
        data() {
            return {
                dismissCountDown: 3,
            }
        }

    }
</script>

<style scoped>

</style>