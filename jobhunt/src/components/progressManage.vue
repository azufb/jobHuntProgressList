<template>
  <div id='progress'>
    <h1 class='progressTitle'>Progress List</h1>
    <form v-on:submit.prevent='onclick'>
      <label for='name'>会社名：</label>
      <input type='text' v-model='name' placeholder='社名を入力して下さい' />
      <label for='area'>所在地(勤務地)：</label>
      <input type='text' v-model='area'  placeholder='所在地を入力して下さい' />
      <label for='progress'>選考状況：</label>
      <input type='text' v-model='progress' placeholder='選考状況を入力して下さい' />
      <label for='url' class='url'>URL：</label>
      <input type='url' v-model='url' placeholder='URLを入力して下さい'  class='url'/>
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
        <button class='toHome'>
          <i class="fas fa-home"></i>
          Home
        </button>
      </router-link>
      <div class='signoutBtn'>
        <Signout></Signout>
      </div>
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