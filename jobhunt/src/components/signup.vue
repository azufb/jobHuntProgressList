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

<style>
.signup {
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    width: 400px;
    height: 300px;
    border: 1px solid black;
}

.title {
    margin-bottom: 0px;
}

.description {
    margin-top: 0px;
}

.registerButton {
    margin-top: 30px;
    margin-left: 10px;
    font-size: 20px;
}

@media(max-width: 767px) {
    .signup {
        width: 270px;
    }
}

@media(max-width: 653px) {
    .signup {
        width: 260px;
    }
}
</style>