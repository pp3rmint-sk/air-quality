<template>
    <div>
        <h1>Admin</h1>
        <form v-on:submit.prevent="addCityAction" class="row form-group ajouterVille">
            <label class="col-md-5 col-form-label">Ajouter une ville :</label>
            <input type="text" id="cityField" class="form-control col-md-5" v-model="newCity">
            <b-button @click="addCityAction" class="primary col-md-1 ml-2">+</b-button>
        </form>
        <ul>
            <li v-for="city of cities" :key="city.id">{{ city.name }}</li>
        </ul>
    </div>
</template>

<script>
import { CitiesService } from "@/services/Cities.service.js";
    export default {
        name: 'Admin',
        data() {
            return {
                cities: [],
                newCity: null,
            }
        },

        async mounted () {
             this.cities = await CitiesService.getCities();
        },

        methods: {
            addCityAction() {
                if(this.newCity){
                    const city = {name: this.formatCityName(this.newCity), iqa: 0}
                    this.cities.push(city)
                    }
            },

            formatCityName(city) {
                return city.charAt(0).toUpperCase() + city.substr(1).toLowerCase();
            }
        },


    }
</script>

<style scoped>

</style>