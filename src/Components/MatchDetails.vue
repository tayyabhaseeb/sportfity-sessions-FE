<template>
  <div><section v-if="isLoading" class="loading"></section></div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
</script>
