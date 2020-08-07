<template>
    <form v-on:submit.prevent="addCityAction" class="row form-group ajouterVille">
            <label class="col-md-5 col-form-label">Ajouter une ville :</label>
             <input type="text" id="cityField" class="form-control col-md-5" v-model="newCity">
             <b-button @click="addCityAction" class="primary col-md-1 ml-2">+</b-button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                newCity: null
            }
        },
        methods: {
            addCityAction() {
                if(this.newCity){
                    this.$emit("cityAddEvent", this.newCity)  // émet un evenement au composant parent
                    }
            },
            
        },
        
    }
</script>

<style scoped>
.ajouterVille {
    margin-top: 2em;
}

</style>