<template>
  <div>Note Index</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        loading: false
      }
    },
    created() {
      this.getList()
    },
    methods: {
      getList: function (params) {
        this.loading = true
        this.$Rest.get("/note", null,
          data => {
            this.tableData = data.obj;
            this.loading = false;
          }
        )
      },
      rowClick: function (row, event, column) {
        this.$router.push({
          path: row.id + '/info'
        })
      }
    }
  }
</script>
