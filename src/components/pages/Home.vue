<template>
    <div>
         <h1 class="my-4">Mesure de la qualité de l'air</h1>
      <div class="row">
        <div v-for="city of cities" :key="city.index" class="col-sm-4">
          <City :city="city" @deleteCity="deleteCityAction"/>
        </div>
      </div>
      <div class="row form-row">
         <!-- recupere l'evenement emit avec $emit dans le composant enfant -->
        <div class="col-sm-6">
           <CityForm @cityAddEvent="addCityAction"/>
        </div>
          <div class="col-sm-6">
             <Alert :type="typeAlert" :message="messageAlert" v-if="showAlert"/>
          </div>

      </div>
    </div>
</template>

<script>
import City from "@/components/City"
import CityForm from "@/components/CityForm"
import Alert from "@/components/Alert"
import { AirQualityService } from "@/services/AirQuality.service.js"
import { CitiesService } from "@/services/Cities.service.js"


export default {
  name: 'Home',
  components: {
    City,
    CityForm,
    Alert,
  },
  data() {
    return {
      cities : [],
      typeAlert: "",
      messageAlert: "",
      showAlert: false,
    }
  },
  async mounted() {
    this.cities = await CitiesService.getCities();
  },
  methods: {
    async addCityAction(cityName) {

      const dataForNewCity = await AirQualityService.getAirQuality(cityName)

      if(dataForNewCity !== "Unknown station") {
        const city = {
          name: this.formatCityName(cityName),
          iqa: 0
        }
        this.cities.push(city),
        this.typeAlert = "success",
        this.messageAlert = "Ville ajoutée avec succès !",
        this.showAlert = true
      }
      else {
        this.typeAlert = "danger",
        this.messageAlert = "Ville inconnue ou non répertoriée.",
        this.showAlert = true
      }
    },

    deleteCityAction(city) {
      const indexToDelete = this.cities.findIndex(
        cityItem => cityItem.name === city.name
      )
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