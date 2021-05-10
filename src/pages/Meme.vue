<template>
  <div class="columns is-multiline">
    <div v-for="meme in memes" class="column meme" :key="meme.id">
      <img :src="'http://localhost:3000/' + meme.image" />
      <p>{{ meme.title }}</p>
    </div>
  </div>
</template>
<script>
import { FETCH_MEME_QUERY } from "../gql/meme";
export default {
  data() {
    return {
      memes: [],
    };
  },
  apollo: {
    memes: {
      query: FETCH_MEME_QUERY,
      update(data) {
        return data["meme"];
      },
    },
  },
};
</script>
<style lang="scss">
.meme {
  background-color: var(--foreground-background-color);
  border-radius: 5px;
  padding: 10px;
}
</style>
