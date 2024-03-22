<template>
  <div id="app">
    <div class="login-container">
      <!-- If user is not logged in, show login inputs and button -->
      <template v-if="!loggedIn">
        <input type="text" placeholder="Username" v-model="username" />
        <input type="password" placeholder="Password" v-model="password" />
        <button @click="login">Login</button>
      </template>
      <!-- If user is logged in, show logout button -->
      <template v-else>
        <button @click="logout">Logout</button>
      </template>
    </div>
    <ProductList :products="products" @add-to-cart="addToCart" />
    <ShoppingCart :cart="cart" :total="total" @remove-from-cart="removeFromCart" @increase-quantity="increaseQuantity" @decrease-quantity="decreaseQuantity" />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import ShoppingCart from './components/ShoppingCart.vue';

export default {
  name: 'App',
  components: {
    ProductList,
    ShoppingCart
  },
  data() {
    return {
      username: '',
      password: '',
      loggedIn: false,
      products: [
        { id: 1, name: 'All Time Low Shirt', price: 500 },
        { id: 2, name: 'All Time Low Hood', price: 1500 },
        { id: 3, name: 'All Time Low Cap', price: 200 },
        { id: 4, name: 'All Time Low Mug', price: 150 },
        { id: 5, name: 'All Time Low Pillow', price: 250 },
        { id: 6, name: 'All Time Low Stickers', price: 80 },
        { id: 7, name: 'All Time Low Bed Sheet', price: 320 },
        { id: 8, name: 'All Time Low Tumbler', price: 185 },
        { id: 9, name: 'All Time Low Curtain', price: 300 },
        { id: 10, name: 'All Time Low Pen', price: 97 }
      ],
      cart: [] // cart data
    };
  },
  computed: {
    total() {
      return this.cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    }
  },
  methods: {
    addToCart(product) {
      if (this.loggedIn) {
        const existingItem = this.cart.find(item => item.product.id === product.id);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          this.cart.push({ product, quantity: 1 });
        }
      } else {
        alert('Please login to add items to the cart.');
      }
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    increaseQuantity(index) {
      this.cart[index].quantity++;
    },
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      }
    },
    login() {
      // Implement your login logic here
      // For demonstration purposes, let's just set loggedIn to true if username and password are not empty
      if (this.username !== '' && this.password !== '') {
        this.loggedIn = true;
        alert('Login successful!');
      } else {
        alert('Please enter username and password.');
      }
    },
    logout() {
      // Implement your logout logic here
      this.loggedIn = false;
      // Clear username and password fields
      this.username = '';
      this.password = '';
    }
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
}

.login-container {
  position: absolute;
  top: 20px;
  right: 20px;
}

.login-container input {
  margin-right: 10px;
}

.login-container button {
  cursor: pointer;
}
/* global styles */
body {
  margin: 0;
  padding: 0;
  background-image: url('@/assets/bg.png'); /* path to background image */
  background-size: cover;
  background-position: center;
  background-color: rgb(33, 82, 132);
}

</style>
