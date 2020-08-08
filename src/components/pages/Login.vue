<template>
    <div>
        <h1>Connexion</h1>
        <b-form @submit.prevent="submitAction">
            <b-form-group label="Adresse email">
                <b-form-input type="email"
                v-model="email"
                @change="initMessageError">
                </b-form-input>
            </b-form-group>

             <b-form-group label="Mot de passe">
                <b-form-input type="password"
                v-model="password"
                @change="initMessageError">
                </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" class="mr-5">Se connecter</b-button>
            <b-button type="button" variant="secondary" to="/create-account">Créer un compte</b-button>
            <b-alert show v-if="messageError" variant="danger" class="my-4">{{ messageError }}</b-alert>
        </b-form>
    </div>
</template>

<script>
import { auth } from "@/firebase";

    export default {
        name: "Login",
        data() {
            return {
                email: null,
                password: null,
                messageError: false,
            }
        },
        methods: {
            async submitAction() {
                //console.log({email:this.email, password:this.password})
                try {
                    //utilise la fonction firebase pour l'authentification
                    await auth.signInWithEmailAndPassword(this.email, this.password);
                    //redirige vers la page d'admin
                    this.$router.replace({path: "/admin"})
                }
                catch(error) {
                    this.messageError = "Mauvais identifiant et / ou mot de passe."
                }

            },
            initMessageError() {
                this.messageError = false;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>