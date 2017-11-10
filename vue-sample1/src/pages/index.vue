<template>
  <div>
    <h1 class="logo">Vue Sample</h1>
    <ul class="list">
      <li v-for="item in lists" v-text="item.title"></li>
    </ul>
  </div>
</template>

<script>
//  为这个页面的组件设置data节点
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
    getData: function(params) {
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
