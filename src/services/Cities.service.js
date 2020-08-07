import { db } from "@/firebase";

export const CitiesService = {
    async getCities() {
        //Je me place dans la collection cities
       const citiesRef = db.collection("cities");

       // je récupère toutes les entrées de la collection
       const citiesDoc = await citiesRef.get()

       //je crée un nouvel objet pour chaque entrée, avec ses data (name et iqa) et auquel je rajoute manuellement l'id (pour pouvoir manipuler la ville plus tard)
       const cities = citiesDoc.docs.map(city => Object.create(
           {...city.data(), //spread operator pour récup toutes les data
            id: city.id
            }
        ));
       console.log(cities);

       return cities;
    },

    async addCity(city) {
        const citiesRef = db.collection("cities");
        const result = await citiesRef.add(city); //ajoute notre city à la collection cities de firebase

        return result.id;

    }
}