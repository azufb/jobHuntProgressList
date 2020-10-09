<template>
    <div>
        <h1>サインイン</h1>
        <div>
            <label>E-mail</label>
            <input type='text' placeholder='E-mail' v-model='email' />
        </div>
        <div>
            <label>Password</label>
            <input type='text' placeholder='Password' v-model='password' />
        </div>
        <button @click='userSignIn'>サインイン</button>
    </div>
</template>

<script>
import firebase from '../firebase.js'

export default {
    name: 'signin',
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        userSignIn() {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert('サインイン成功');
                    this.$router.push('/progress');
                });
        }
    }
};
</script>