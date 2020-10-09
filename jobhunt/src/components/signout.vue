<template>
    <div>
        <h1>サインアウト</h1>
        <button @click='signout'>サインアウト</button>
    </div>
</template>

<script>
import firebase from '../firebase.js'

export default {
    name: 'signout',
    methods: {
        signout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    alert('サインアウトしました。');
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error);
                });
        }
    }
};
</script>