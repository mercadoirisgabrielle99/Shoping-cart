<template>
  <div class="authentication-status">
    <p v-if="authenticated" class="authenticated">Authenticated as {{ username }}</p>
    <p v-else class="not-authenticated">Not Authenticated</p>
    <div v-if="!authenticated">
      <input type="text" v-model="usernameInput" placeholder="Username">
      <input type="password" v-model="passwordInput" placeholder="Password">
      <button @click="login" class="auth-toggle-btn">Login</button>
    </div>
    <button v-else @click="logout" class="auth-toggle-btn">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'AuthenticationStatus',
  data() {
    return {
      authenticated: false,
      username: '',
      usernameInput: '',
      passwordInput: ''
    };
  },
  methods: {
    login() {
      // Simulating login functionality with hardcoded credentials
      if (this.usernameInput === 'user' && this.passwordInput === 'password') {
        this.authenticated = true;
        this.username = this.usernameInput;
        this.usernameInput = '';
        this.passwordInput = '';
        this.$emit('toggle-authentication', true); // Emitting the event when user logs in
      } else {
        alert('Invalid username or password');
      }
    },
    logout() {
      this.authenticated = false;
      this.username = '';
      this.$emit('toggle-authentication', false); // Emitting the event when user logs out
    }
  }
};
</script>

<style scoped>
.authentication-status {
  position: absolute;
  top: 20px; /* Adjust the top position as needed */
  right: 20px; /* Adjust the right position as needed */
}

.authenticated {
  color: green;
}

.not-authenticated {
  color: red;
}

.auth-toggle-btn {
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
