<template>
    <div class='signin'>
        <h1>Sign In!</h1>
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
        <button @click='userSignIn' class='signInButton'>Sign In</button>
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
                    this.$router.push('/progress');
                });
        }
    }
};
</script>

<style>
.signin {
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    width: 400px;
    height: 300px;
    border: 1px solid black;
}

.formLabel {
    font-size: 20px;
}

.passwordForm {
    margin-top: 10px;
}

.signInButton {
    margin-top: 30px;
    margin-left: 10px;
    font-size: 20px;
}

.toHome {
    margin-top: 30px;
    font-size: 20px;
}

@media(max-width: 767px) {
    .signin {
        width: 270px;
    }
}

@media(max-width: 653px) {
    .signin {
        width: 260px;
    }
}
</style>