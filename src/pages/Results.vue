<template>
  <b-tabs type="is-toggle-rounded">
    <b-tab-item label="Tier A">
      <iframe
        src="https://challonge.com/en/6oaq7bkv/module"
        width="100%"
        height="500"
        frameborder="0"
        scrolling="auto"
        allowtransparency="true"
      ></iframe>
    </b-tab-item>
    <b-tab-item label="Tier B">
      <iframe
        src="https://challonge.com/en/bj4lpoi/module"
        width="100%"
        height="500"
        frameborder="0"
        scrolling="auto"
        allowtransparency="true"
      ></iframe>
    </b-tab-item>
    <b-tab-item label="Tier Meme">
      <iframe
        src="https://challonge.com/en/8vjsy6wl/module"
        width="100%"
        height="500"
        frameborder="0"
        scrolling="auto"
        allowtransparency="true"
      ></iframe>
    </b-tab-item>
  </b-tabs>
</template>
<script>
export default {
  props: ["token"]
}
</script>
<style scoped>
.column {
  padding: 0px !important;
}
.b-tabs {
  margin-top: 15px;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
}
</style>
