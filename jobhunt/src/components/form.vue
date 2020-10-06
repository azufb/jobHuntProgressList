<template>
    <div>
        <form>
            <label>社名：</label>
            <input type="text" placeholder="社名を入力して下さい" />
            <label>所在地(勤務地)：</label>
            <input type="text" placeholder="所在地を入力して下さい" />
            <label>選考状況：</label>
            <input type="text" placeholder="選考状況を入力して下さい" />
            <label>URL：</label>
            <input type="url" placeholder="URLを入力して下さい" />
        </form>
        <ul v-for='(company, index) in companies' :key="index">
            <li>
                {{ company.name }}
                {{ company.area }}
                {{ company.progress }}
                {{ company.url }}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'Form',
    computed: {
        getCompanies() {
            return this.$store.getters.getCompanies;
        }
    }
}
</script>