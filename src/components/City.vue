<template>
    <div>
        <b-card
            :title=city.name
            :class="color + ' cityCard'">
            <b-card-text>
                <p v-if="!loading">Qualité de l'air : {{ city.iqa }}</p>
            </b-card-text>
             <div v-if="loading" class="text-center">
                <b-spinner variant="primary" label="Text Centered"></b-spinner>
            </div>
             <b-button @click="deleteCityAction" pill variant="outline-secondary">Supprimer</b-button>
        </b-card>
    </div>
</template>

<script>
import {AirQualityService} from "@/services/AirQuality.service.js"

export default {
    props: {
        city: {
            type: Object,
            default: null
        },
    },
    data() {
        return {
            color: "",
            loading: false
        }
    },
    async mounted () {
        this.loading = true
        const infoCity = await AirQualityService.getAirQuality(this.city.name)
        this.loading = false
        this.city.iqa = infoCity.aqi

        if(this.city.iqa <= 30)this.color="pollution-faible"
        if(this.city.iqa > 30 && this.city.iqa <= 50)this.color="pollution-moyenne"
        if(this.city.iqa > 50)this.color="pollution-forte"
    },
    methods: {
        deleteCityAction() {
            this.$emit("deleteCity", this.city)
        }
    },

}
</script>

<style scoped>
.pollution-faible {
    background-color: rgb(93, 192, 93);
    color: white;
}

.pollution-moyenne {
    background-color: rgb(243, 181, 65);
    color: white;
}

.pollution-forte {
    background-color: rgb(224, 48, 48);
    color: white;
}

.cityCard {
    margin-bottom: 2em;
}
</style>