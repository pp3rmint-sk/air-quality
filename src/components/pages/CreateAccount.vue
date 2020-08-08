<template>
    <div>
        <h1 class="text-center">Créer un compte</h1>

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
            <b-button type="submit" variant="secondary">Créer un compte</b-button>
            <b-alert show v-if="messageError" variant="danger" class="my-4">{{ messageError }}</b-alert>
        </b-form>
    </div>
</template>

<script>
import { auth } from "@/firebase";

    export default {
        name: "CreateAccount",
        data() {
            return {
                email: null,
                password: null,
                messageError: null,
            }
        },
         methods: {
            async submitAction() {
                if (this.password.length >= 6) {
                    try {
                        await auth.createUserWithEmailAndPassword(this.email, this.password);
                        await auth.signInWithEmailAndPassword(this.email, this.password);
                        this.$router.replace({path: "/admin"});
                    } catch {
                        this.messageError = "Erreur lors de la création de votre compte, veuillez réessayer."
                    }
                }
                else {
                    this.messageError = "Le mot de passe doit comporter au moins 6 caractères."
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