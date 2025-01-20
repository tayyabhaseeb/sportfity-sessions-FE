<script>
export default {
  data() {
    return {
      leagues: [
        { league_name: "Seven Sisters", organiser: "Bruno's uncle" },
        { league_name: "King's Cross", organiser: "Bruno's bruno" },
        { league_name: "Prince of Wales", organiser: "Bruno's auntie" },
      ],
      name: "Bruno",
      link: "https://google.com",
      background: "light",
    };
  },
  methods: {
    toggleBackground() {
      if (this.background === "light") {
        console.log("light background");
        this.background = "dark";
      } else {
        console.log("dark background");
        this.background = "light";
      }
    },
  },
};
</script>
<template>
  <div>
    <div>
      <h1>Leagues</h1>
    </div>
    <ol>
      <li v-for="league in leagues" :key="league">{{ league.league_name }}</li>
    </ol>
    <a :href="link">google</a>
    <button @click="toggleBackground">Toggle Background</button>
  </div>
</template>
