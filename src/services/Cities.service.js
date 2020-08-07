import { db } from "@/firebase";

export const CitiesService = {
    async getCities() {
       const citiesRef = db.collection("cities");
       const citiesDoc = await citiesRef.get()

       const cities = citiesDoc.docs.map(city => city.data());
       console.log(cities);

       return cities;
    }
}