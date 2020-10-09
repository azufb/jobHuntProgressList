<template>
  <div id="progress">
    <h1>サインアウト</h1>
    <h1>就職活動状況リスト</h1>
    <form v-on:submit.prevent="onclick">
      <label for="name">会社名：</label>
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
        <th></th>
      </tr>
      <tr v-for='(company, index) in companies' :key="index">
        <td>{{ company.name }}</td>
        <td>{{ company.area }}</td>
        <td>{{ company.progress }}</td>
        <td>
          <a :href="company.url" target="_blank" rel="noopener noreferrer">
            {{ company.url }}
          </a>
        </td>
        <td><input type="button" v-on:click="deleteCompanies(company.name)" value="削除" /></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Progress',
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
#progress {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

table {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 1100px;
  border: 1px solid #2c3e50;
  border-collapse: collapse;
  font-size: 13pt;
}

table th {
  border-bottom: 1px solid #2c3e50;
}

</style>
