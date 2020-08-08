<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">Air quality</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/admin">Admin</b-nav-item>
         <b-nav-item v-if="connected" @click="logout">Logout</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
    </div>
</template>

<script>
import { auth } from "@/firebase";

    export default {
        name: "NavBar",
        data() {
          return {
            connected: false,
          }
        },

       mounted () {
         auth.onAuthStateChanged(user=>{
           if (user) {
             this.connected = true
           } else {
             this.connected = false
           }
         });
       },

       methods: {
         logout() {
           auth.signOut();
           this.$router.replace("/");
         }
       },

    }
</script>

<style lang="scss" scoped>

</style>