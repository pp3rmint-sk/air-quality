<template>
    <div>
        <h1>Admin</h1>
        <form v-on:submit.prevent="addCityAction" class="row form-group ajouterVille">
            <label class="col-md-5 col-form-label">Ajouter une ville :</label>
            <input type="text" id="cityField" class="form-control col-md-5" v-model="newCity">
            <b-button @click="addCityAction" class="primary col-md-1 ml-2">+</b-button>
        </form>
        <ul>
            <li v-for="city of cities" :key="city.id">{{ city.name }}
                 <b-button @click="deleteCity(city)">Supprimer</b-button>
            </li>
           
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
            async addCityAction() {
                if(this.newCity){
                    //Définit mon nouvel objet city
                    const city = {name: this.formatCityName(this.newCity), iqa: 0}

                    //Ajoute ma nouvelle ville dans Firebase et récupère l'id de la ville
                    const idCity = await CitiesService.addCity(city);
                    city.id = idCity;

                    // L'ajoute à mon tableau cities
                    this.cities.push(city)
                    }
            },

            deleteCity(city){
                //delete from firebase Db
                CitiesService.deleteCity(city);

                //delete du tableau cities de mon app
                const indexToDelete = this.cities.findIndex(
                    cityItem => city.id === cityItem.id
                );
                this.cities.splice(indexToDelete, 1)
            },

            formatCityName(city) {
                return city.charAt(0).toUpperCase() + city.substr(1).toLowerCase();
            }
        },


    }
</script>

<style scoped>

</style>