<template>
  <div>
    <h2>{{id}}</h2>
    <footer-save-cancel :showSave='false'/>
  </div>
</template>

<script>
  import FooterSaveCancel from "../../components/footer-save-cancel/footer-save-cancel";

  export default {
    components: {
      FooterSaveCancel
    },
    data() {
      return {
        id: this.$route.params.id,
      }
    }
  }
</script>

<style scoped>

</style>
