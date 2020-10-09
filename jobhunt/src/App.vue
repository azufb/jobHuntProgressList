<template>
  <div id='app'>
    <!--<Progress></Progress>-->
    <div id='nav'>
      <router-link to='/'>Home</router-link>|
      <router-link to='/signup'>登録</router-link> |
      <router-link to='/signin'>サインイン</router-link> |
      <router-link to='/signout'>サインアウト</router-link> |
      <router-link to='/progress'>Progress</router-link> |
    </div>
    <router-view />
  </div>
</template>

<script>
//import Progress from './components/progressManage.vue'
export default {
  name: 'App',
  /*components: {
    Progress
  }*/
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
