<template>
  <div>
    <div class="content" v-loading="loading">
      <h2 v-text="dat.title"></h2>
      <p>作者：{{dat.author.loginname}}　　发表于：{{$utils.goodTime(dat.create_at)}}</p>
      <hr>
      <article v-html="dat.content"></article>
      <h3>网友回复：</h3>
      <ul>
        <li v-for="i in dat.replies">
          <p>评论者：{{i.author.loginname}}　　评论于：{{$utils.goodTime(i.create_at)}}</p>
          <article v-html="i.content"></article>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        dat: {},
        loading: false
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        loading = true;
        this.$cnodeAPI.get('topic/' + this.id, null, r => {
          this.dat = r.data
          loading = false
        })
      }
    }
  }
</script>