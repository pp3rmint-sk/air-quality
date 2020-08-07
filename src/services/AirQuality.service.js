import {config} from "@/config/config.js"
import axios from "axios"

const baseUrl = "https://api.waqi.info/feed"

export const AirQualityService = {
    async getAirQuality(cityName) {
        const url = `${baseUrl}/${cityName}/?token=${config.token}`

        try {
            const result = await axios.get(url)
            return result.data.data

        } catch (error) {
            console.log("error", error)
        }

    }
}