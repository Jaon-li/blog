<template>
  <div id="app">

    <div class="line"></div>
    <el-menu
        :default-active="activeIndex2"
        @mode="horizontal"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
      <el-menu-item index="1">Jaon的博客</el-menu-item>
      <el-menu-item index="2">浏览记录</el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
      <el-menu-item index="4">个人中心</el-menu-item>
      <el-menu-item index="5">
        <el-col :span="12">
          <div class="demo-basic--circle">
            <div class="block">
              <el-avatar :size="40" :src="circleUrl"></el-avatar>
            </div>
            <div class="block" v-for="size in sizeList" :key="size">
              <el-avatar :size="size" :src="circleUrl"></el-avatar>
            </div>
          </div>
        </el-col>
      </el-menu-item>
    </el-menu>


    <router-view/>


  </div>


</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>


<script>

  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",

      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>
