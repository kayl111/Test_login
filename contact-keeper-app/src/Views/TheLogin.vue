<template>
  <div class = theback>
    <form @submit.prevent="handleLogin" autocomplete="off">
      <div class="form">
        <h1>Moto Lab</h1>
        <pre>Fuel Your Freedom</pre>
        <div>
          <TextField
            label="Email"
            id="Email"
            name="Email"
            v-model="email"  
          />
          <TextField
            label="Password"
            type="password"
            id="Pass"
            name="Password"
            v-model="password"
          />
          <p class="forgot">Forgot Password?</p>
          <AppButton @click="handleLogin">Let's Ride Baby</AppButton>
          <div class="new">
            <p>New to Lab?</p>
            <p>
              <a
                href="#"
                style="color: #1d0f02; text-decoration: none; font-weight: 400;"
              >
                Join the Club
              </a>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import AppButton from './components/buttons.vue';
import TextField from './components/Text-Field.vue';

export default {
  name: 'TheLogin',
  components: {
    AppButton,
    TextField,
  },
  data() {
    return {
      email: '',    
      password: '', 
      validEmail: 'nap.kjsabello@gmail.com',
      validPassword: '123456789',
    };
  },
  methods: {
    isValidLogin() {
      const email = this.email;
      const password = this.password;
      console.log('Email:', email);  
      console.log('Password:', password);  
      return email === this.validEmail && password === this.validPassword;
    },
    handleLogin() {
      console.log('Attempting login');  
      this.isValidLogin()
        ? this.$router.push({ name: 'Homepage' })
        : alert('Invalid email or password!');
    },
  },
    computed: {
    
    isEmailValid() {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailPattern.test(this.email);
    },
    
    isPasswordValid() {
      return this.password.length >= 8;
    },
    
    isFormValid() {
      return this.isEmailValid && this.isPasswordValid;
    },
  },
};
</script>

<style scoped>


.form {
  background: #fff;
  padding: 40px 40px;
  border: rgb(187, 187, 187) solid;
  border-width: 0.20px;
  border-radius: 8px;
  width: 150%;
  max-width: 500px;
  box-shadow: 0 4px 16px rgba(181, 101, 29, 0.4);
  }

  h1 {
  text-align: center;
  color: #1d0f02;
  }

  pre {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #1d0f02;
  margin-top: -10px;
  margin-bottom: 20px;
  font-size: 16px;
  }

  .new {
  display: flex;
  flex-direction: row; 
  justify-content: center;   
  gap: 10px;   
  margin-top: 20px;
  }

  .new p {
  margin: 5px;
  }

  .new p:first-child {
  font-weight: 600;
  color: #1d0f02;
  }

  p.forgot {
  text-align: left;
  margin: 15px 0 20px;
  font-size: 16px;
  color: #1d0f02;
  cursor: pointer;
  }

  p.forgot:hover {
  text-decoration: underline;
  }
</style>
