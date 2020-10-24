<template>
  <div id='app'>
    <div id='nav'>
      <router-link to='/' class='top'>
        <h2>Job Hunting Progress Manage</h2>
      </router-link>
      <router-link to='/signup' class='nav'>
        <span>
          Register
          <i class="fas fa-user-plus"></i>
        </span>
      </router-link>
      <router-link to='/signin' class='nav'>
        <span>
          Sign In
          <i class="fas fa-sign-in-alt"></i>
        </span>
      </router-link>
      <router-link to='/progress' class='jobHuntProgress'>
        <span>
          Progress
          <i class="fas fa-angle-double-right"></i>
        </span>
      </router-link>
    </div>
    <hr>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
$marginTop: 30px;
$marginLeft: 10px;
$marginRight: 10px;
$fontSize: 20px;
$mainColor: #2c3e50;

.top {
  text-decoration: none;
  color: $mainColor;
} 

#nav {
  text-align: right;
}  

.nav {
  margin: {
    right: $marginRight;
  }
  font-size: $fontSize;
  text-decoration: none;
  color: $mainColor;
}

.jobHuntProgress {
  margin: {
    right: $marginRight;
  }
  font-size: $fontSize;
  text-decoration: none;
  color: $mainColor;
}     

</style>
