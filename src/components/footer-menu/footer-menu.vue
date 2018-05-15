<template>
  <div class="footer footer-menu">
    <el-row type="flex" justify="space-between">
      <el-col v-for="(menu,$index) in menus" :span="6" :key="menu.id">
        <div class="footer-menu-item" @click="goto(menu,$index)"
             :class="{'selected':menu.selected}">
          <i :class="[menu.selected && menu.icon2 ? menu.icon2 : menu.icon]"></i>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'footer-menu',
    data() {
      return {
        menus: [
          {
            id: 'dashboard',
            selected: false,
            icon: 'iconfont icon-fenlei1'
          }, {
            id: 'home',
            selected: true,
            icon: 'iconfont icon-bijiben',
            icon2: 'iconfont icon-shangchuan'
          }, {
            id: 'more',
            selected: false,
            icon: 'iconfont icon-gengduo1'
          }
        ]
      }
    },
    methods: {
      goto: function (menu, index) {
        this.$nextTick(function () {
          if (this.menus[1].selected === true && menu.id === 'home') {
            this.$router.push({
              path: '/note/-/edit',
              query: {
                pathStack: ['/home']
              }
            });
            return;
          }

          this.menus.forEach(function (menu) {
            menu.selected = false;
          });
          menu.selected = true;
          console.info(menu.id);
          // this.$router.push({
          //   path: '/'+menu.id
          // });
        });
      }
    }
  }
</script>

<style scoped>

</style>
