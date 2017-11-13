<template>
  <div>
    <ul class="list">
      <li v-for="i in lists">
        <time v-text="$utils.goodTime(i.create_at)"></time>
        <router-link :to="'/content/' + i.id">
          {{ i.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        lists: []
      };
    },
    created() {
      this.getData();
    },
    methods: {
      getData: function (params) {
        this.$cnodeAPI.get(
          "topics",
          params ? params : {},
          data => (this.lists = data.data),
          error => console.log(error.statusText)
        );
      }
    }
  };
</script>