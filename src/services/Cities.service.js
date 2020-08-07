import { db } from "@/firebase";

const citiesRef = db.collection("cities"); //Se place dans la collection cities

export const CitiesService = {
    async getCities() {
       // je récupère toutes les entrées de la collection
       const citiesDoc = await citiesRef.get()

       //je crée un nouvel objet pour chaque entrée, avec ses data (name et iqa) et auquel je rajoute manuellement l'id (pour pouvoir manipuler la ville plus tard)
       const cities = citiesDoc.docs.map(city => Object.create(
           {...city.data(), //spread operator pour récup toutes les data
            id: city.id
            }
        ));
       return cities;
    },

    async addCity(city) {
        const result = await citiesRef.add(city); //ajoute notre city à la collection cities de firebase
        return result.id;
    },

    deleteCity(city) {
        const citiesRefDelete = citiesRef.doc(city.id); //recherche le document correspondant à l'id
        citiesRefDelete.delete();
    }
}