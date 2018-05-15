<template>
  <div>
    <div class="vertical-center-container">
      <div class="vertical-center-item login">
        <p class="title">Login Page</p>
        <el-form class="loginForm" :model="loginForm" label-width="60px">
          <el-form-item label="账号">
            <el-input placeholder="请输入账号" v-model="loginForm.username" clearable/>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" placeholder="******" v-model="loginForm.password"
                      clearable
                      auto-complete="off"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain v-on:click="login" icon="iconfont icon-zhengque">登录
            </el-button>
            <el-button v-if="showRegister" plain v-on:click="register" icon="iconfont icon-geren">注册
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <CopyrightFooter/>
  </div>
</template>

<script>
  import CopyrightFooter from "@/components/footer-copyright.vue";
  import {Message} from 'element-ui'

  export default {
    components: {
      CopyrightFooter: CopyrightFooter
    },
    data() {
      return {
        loginForm: {
          username: "",
          password: ""
        },
        showRegister: false
      }
    },
    methods: {
      login: function () {
        this.$Rest.login({
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(res => this.$router.push('home'))
        .catch(err => {
          this.showRegister = true;
          Message.error(err.msg);
        });
      },
      register: function () {
        this.$Rest.get(`/user/register`, {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(() => this.login());
      }
    }
  }
</script>

<style scoped>

</style>
