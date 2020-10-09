<template>
    <div>
        <h1>登録</h1>
        <div>
            <label>E-mail</label>
            <input type='text' placeholder='E-mail' v-model='email' />
        </div>
        <div>
            <label>Password</label>
            <input type='text' placeholder='Password' v-model='password' />
        </div>
        <button @click='createUserAccount'>登録</button>
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
                    alert('登録');
                })
                .catch(error => {
                    alert('Error', error.message);
                    console.error('Account Register Error', error.message);
                });
        }
    }
};
</script>