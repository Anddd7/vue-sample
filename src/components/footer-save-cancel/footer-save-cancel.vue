<template>
  <div class="footer footer-save-cancel">
    <el-row type="flex" justify="space-around">
      <el-col :span="8">
        <el-button round v-on:click='back'>返回</el-button>
      </el-col>
      <el-col :span="8" v-if="showSave">
        <el-button type="primary" round v-on:click='save'>保存</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'footer-save-cancel',
    props: {
      saveFunction: {
        type: Function
      },
      showSave: {
        type: Boolean,
        default: true,
      }
    },
    data() {
      return {
        nextPath: null,
        queryTemp: {}
      }
    },
    created() {
      //const routerPath = this.$route.path;
      const query = this.$route.query;
      let pathStack = query.pathStack;
      if (!pathStack) {
        return;
      }

      this.queryTemp = {};
      if (pathStack instanceof Array) {
        this.nextPath = pathStack[pathStack.length - 1];
        this.queryTemp.pathStack = pathStack.slice(0, pathStack.length - 1);
      } else {
        this.nextPath = pathStack;
        this.queryTemp.pathStack = [];
      }
    },
    methods: {
      save() {
        this.saveFunction();
      },
      back() {
        console.log("back", this.nextPath, this.queryTemp);
        if (this.nextPath) {
          this.$router.push({
            path: this.nextPath,
            query: this.queryTemp
          });
        } else {
          this.$router.back();
        }
      }
    }
  }
</script>
