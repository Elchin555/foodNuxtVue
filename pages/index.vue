<template>
  <main class="container">
    <appHeader />
    <appRestaurantInfo :datasource="fooddata"/>
  </main>
</template>

<script>
import { mapState } from "vuex";

import appHeader from "../components/appHeader";
import appRestaurantInfo from "../components/appRestaurantInfo"
export default {
  components: {
    appHeader,
    appRestaurantInfo
  },
  computed: {
    ...mapState(["fooddata"])
  }
};
</script>

<style></style>
