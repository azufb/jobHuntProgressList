<template>
  <div id='progress'>
    <h1 class='progressTitle'>Progress List</h1>
    <form v-on:submit.prevent='onclick'>
      <div class='inputForm'>
        <label for='name'>会社名：</label>
        <input type='text' v-model='name' placeholder='社名を入力して下さい' />
      </div>
      <div class='inputForm'>
        <label for='area'>所在地(勤務地)：</label>
        <input type='text' v-model='area'  placeholder='所在地を入力して下さい' />
      </div>
      <div class='inputForm'>
        <label for='progress'>選考状況：</label>
        <input type='text' v-model='progress' placeholder='選考状況を入力して下さい' />
      </div>
      <div class='inputForm'>
        <label for='url' class='url'>URL：</label>
        <input type='url' v-model='url' placeholder='URLを入力して下さい'  class='url'/>
      </div>
      <button type='submit'>
        ADD
        <i class="fas fa-plus"></i>
      </button>
    </form>
    <table>
      <tr>
        <th>会社名</th>
        <th>所在地</th>
        <th>選考状況</th>
        <th class='url'>URL</th>
        <th></th>
      </tr>
      <tr v-for='(company, index) in companies' :key='index'>
        <td>{{ company.name }}</td>
        <td>{{ company.area }}</td>
        <td>{{ company.progress }}</td>
        <td class='url'>
          <a :href='company.url' target='_blank' rel='noopener noreferrer'>
            {{ company.url }}
          </a>
        </td>
        <td>
          <button v-on:click='deleteCompanies(company.name)'>
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    </table>
    <div class='btn'>
      <router-link to='/'>
        <button class='toHome2'>
          <i class="fas fa-home"></i>
          Home
        </button>
      </router-link>
      <div class='signoutcomp'>
        <Signout></Signout></div>
      </div>
  </div>
</template>

<script>
import Signout from './signout'

export default {
  name: 'Progress',
  components: {
    Signout
  },
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
  margin-top: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.inputForm {
    display: block;
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

.btn {
  display: flex;
  justify-content: center;
}

.toHome2 {
  margin-top: 10px;
  font-size: 20px;
}

.signoutcomp {
  margin-left: 20px;
}

@media(max-width: 767px) {
  table {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    font-size: 10px;
  }

  .url {
    display: none;
  }
}
</style>
