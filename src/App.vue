<template>
  <div id="app">
    <AuthenticationStatus :authenticated="authenticated" @toggle-authentication="toggleAuthentication" />
    <div class="header">
      <input type="text" v-model="searchQuery" @input="searchBooks" placeholder="Search books...">
    </div>
    <div class="main-content">
      <AvailableBooks :books="filteredBooks" :authenticated="authenticated" @add-to-cart="addToCart" />
      <ShoppingCart :cart="cart" @remove-from-cart="removeFromCart" />
    </div>
    <div class="section">
    </div>
  </div>
</template>

<script>
import AvailableBooks from './components/AvailableBooks.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import AuthenticationStatus from './components/AuthenticationStatus.vue';

export default {
  name: 'App',
  components: {
    AvailableBooks,
    ShoppingCart,
    AuthenticationStatus
  },
  data() {
    return {
      availableBooks: [
        { id: 1, title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 3000 },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 1000 },
        { id: 3, title: '1984', author: 'George Orwell', price: 2000 },
        { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 1200 },
        { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', price: 1800 },
        { id: 6, title: 'Moby-Dick', author: 'Herman Melville', price: 1400 },
        { id: 7, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', price: 2500 },
        { id: 8, title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 1600 },
        { id: 9, title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', price: 2200 },
        { id: 10, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', price: 1700 },
        { id: 11, title: 'A Time to Kill', author: 'John Grisham', price: 2200 },
        { id: 12, title: 'The House of Mirth', author: 'Edith Wharton', price: 1700 }
      ],
      cart: [],
      authenticated: false,
      searchQuery: ''
    };
  },
  computed: {
    filteredBooks() {
      if (!this.searchQuery) return this.availableBooks;
      return this.availableBooks.filter(book =>
        book.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    addToCart(book) {
      this.cart.push(book);
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
    },
    toggleAuthentication(authenticated) {
      this.authenticated = authenticated;
    },
    searchBooks() {
      // No need to implement anything here, computed property handles the filtering
    }
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
}

.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
}

.header input[type="text"] {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
}

.main-content {
  display: flex;
  flex-direction: column;
}

.section {
  margin-bottom: 20px;
}

.book-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #000000;
  color: rgb(0, 0, 0); /* Set text color to white */
}

.cart-item {
  padding: 15px;
  border-bottom: 1px solid #000000;
  color: rgb(0, 0, 0); /* Set text color to white */
}

.shopping-cart {
  margin-top: 20px; /* Adjust margin-top as needed */
}

.available-books-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.available-books-list {
  list-style: none;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
  background-image: url('@/assets/bg.jpg'); /* Add the path to your background image */
  background-size: cover;
  background-position: center;
  background-color: rgb(76, 77, 78);
}
</style>
