<template>
    <div class='signup'>
        <h1 class='title'>Register Now!</h1>
        <p class='description'>
            メールアドレスとパスワードで、<br>
            ユーザー登録をしましょう。
        </p>
        <div>
            <label class='formLabel'>E-mail：</label>
            <input type='text' placeholder='E-mail' v-model='email' required />
        </div>
        <div class='passwordForm'>
            <label class='formLabel'>Password：</label>
            <input type='password' placeholder='Password' v-model='password' required />
        </div>
        <router-link to='/'>
            <button class='toHome'>
                Cancel
            </button>
        </router-link>
        <button @click='createUserAccount' class='registerButton'>Register</button>
    </div>
</template>

<script>
import firebase from '../firebase.js'

export default {
    name: 'signup',
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        createUserAccount() {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    this.$router.push('/progress');
                })
                .catch(error => {
                    alert('Error', error.message);
                    console.error('Account Register Error', error.message);
                });
        }
    }
};
</script>