<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">Air quality</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/login">Admin</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "NavBar",

    }
</script>

<style lang="scss" scoped>

</style>