<template>
  <div><section v-if="isLoading" class="loading"></section></div>
</template>

<script>
import { getMatches } from "../src/utils/api";
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import MatchCard from "./MatchCard.vue";

export default {
  components: MatchCard,
};
</script>
