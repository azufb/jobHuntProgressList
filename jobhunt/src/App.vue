<template>
  <div id="app">
    <h1>就職活動状況リスト</h1>
    <form v-on:submit.prevent="onclick">
      <label for="name">社名：</label>
      <input type="text" v-model="name" placeholder="社名を入力して下さい" />
      <label for="area">所在地(勤務地)：</label>
      <input type="text" v-model="area" placeholder="所在地を入力して下さい" />
      <label for="progress">選考状況：</label>
      <input type="text" v-model="progress" placeholder="選考状況を入力して下さい" />
      <label for="url">URL：</label>
      <input type="url" v-model="url" placeholder="URLを入力して下さい" />
      <input type="submit" value="登録" />
    </form>
    <table>
      <tr>
        <th>会社名</th>
        <th>所在地</th>
        <th>選考状況</th>
        <th>URL</th>
      </tr>
      <tr v-for='(company, index) in companies' :key="index">
        <td>{{ company.name }}</td>
        <td>{{ company.area }}</td>
        <td>{{ company.progress }}</td>
        <td>{{ company.url }}</td>
        <td><input type="button" v-on:click="deleteCompanies(company.name)" value="削除" /></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    companies() {
      return this.$store.getters.companies;
    }
  },
  data() {
    return {
      name: '',
      area: '',
      progress: '',
      url: ''
    }
  },
  methods: {
    onclick() {
      this.$store.commit('addCompanies', {
        company: {
          name: this.name,
          area: this.area,
          progress: this.progress,
          url: this.url
        },
      })
      this.name = '';
      this.area = '';
      this.progress = '';
      this.url = '';
    },
    deleteCompanies(name) {
      this.$store.commit("deleteCompanies", name)
    }
  }
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
