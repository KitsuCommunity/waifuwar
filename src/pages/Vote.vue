<template>
  <b-tabs type="is-toggle-rounded">
    <b-tab-item label="Tier A">
      <form class="grid">
            <div class="grid-items">
              <b-radio v-model="vote"
                  name="opponents"
                  :native-value="1">
                  <img src="https://www.anime-planet.com/images/characters/asuka-langley-soryu-2679.jpg"/>
                  <p>Asuka</p>
              </b-radio>
              <b-radio v-model="vote"
                  name="opponents"
                  :native-value="2">
                  <img src="https://static.zerochan.net/Ayanami.Rei.full.697234.jpg"/>
                  <p>Rei</p>
              </b-radio>
            </div>
            <input v-if="authenticated" type="button" value="Submit your vote" @click="SubmitVote()" class="button is-primary"/>
            <input v-else type="button" value="You need to log in" disabled class="button is-primary"/>
      </form>
    </b-tab-item>
    <b-tab-item label="Tier B">
      <p>B</p>
    </b-tab-item>
    <b-tab-item label="Tier Meme">
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
      <p>Meme</p>
    </b-tab-item>
  </b-tabs>
</template>
<script>
export default {
  props: ['authenticated'],
  data() {
    return {
      vote: null
    }
  }
}
</script>
<style scoped>

form  input[type="button"] {
  width: 100%;
}
.radio img {
  max-height: 250px;
  margin: auto;
}
.b-radio {
  min-width: 250px;
  background-color: var(--foreground-background-color);
  border-radius: 5px;
  padding: 10px;
}
.b-radio:hover {

}
.check {
  display: inline-block !important;
  position: absolute !important;
  bottom: 0px;
  margin-left: calc(50% - 10px);
  margin-bottom: 5px;
}
</style>