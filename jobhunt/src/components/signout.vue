<template>
    <div>
        <button @click='signout' class='signOutButton'>
            Sign Out
            <i class="fas fa-sign-out-alt"></i>
        </button>
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
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error);
                });
        }
    }
};
</script>

<style>
.signOutButton {
    margin-top: 10px;
    margin-right: 10px;
    font-size: 20px;
}
</style>