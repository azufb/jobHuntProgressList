<template>
  <div id='app'>
    <div id='nav'>
      <router-link to='/' class='top'>
        <h2 class='mainTitle'>Job Hunting Progress Manage</h2>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.top {
  text-decoration: none;
  color: #2c3e50;
}

.mainTitle {
  margin-bottom: 0px;
  text-align: left;
}

#nav {
  text-align: right;
}

.nav {
  margin-right: 10px;
  font-size: 20px;
  text-decoration: none;
  color: #2c3e50;
}

.jobHuntProgress {
  margin-right: 10px;
  font-size: 20px;
  text-decoration: none;
  color: #2c3e50;
}

@media(max-width: 767px) {
  #nav {
    text-align: left;
  }

  .nav {
    font-size: 15px;
  }

  .jobHuntProgress {
    font-size: 15px;
  }
}

@media(max-width: 653px) {
  .mainTitle {
    font-size: 18px;
  }
  .nav {
    font-size: 12px;
  }

  .jobHuntProgress {
    font-size: 12px;
  }
}
</style>
