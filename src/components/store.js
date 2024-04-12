import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    availableBooks: [
      { id: 1, title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 3000, image: 'catcher-in-the-rye.jpg' },
      { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 1000, image: 'to-kill-a-mockingbird.jpg' },
      { id: 3, title: '1984', author: 'George Orwell', price: 2000, image: '1984.jpg' },
      { id: 4, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 1200, image: 'great-gatsby.jpg' },
      { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', price: 1800, image: 'pride-and-prejudice.jpg' },
      { id: 6, title: 'Moby-Dick', author: 'Herman Melville', price: 1400, image: 'moby-dick.jpg' },
      { id: 7, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', price: 2500, image: 'lord-of-the-rings.jpg' },
      { id: 8, title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 1600, image: 'the-hobbit.jpg' },
      { id: 9, title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', price: 2200, image: 'harry-potter.jpg' },
      { id: 10, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', price: 1700, image: 'alice-in-wonderland.jpg' },
      { id: 11, title: 'A Time to Kill', author: 'John Grisham', price: 2200, image: 'a-time-to-kill.jpg' },
      { id: 12, title: 'The House of Mirth', author: 'Edith Wharton', price: 1700, image: 'house-of-mirth.jpg' }
    ],
    cart: [],
    authenticated: false
  },
  mutations: {
    addToCart(state, book) {
      state.cart.push(book);
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1);
    },
    toggleAuthentication(state) {
      state.authenticated = !state.authenticated;
    }
  },
  actions: {
    // You can define actions here if needed
  },
  getters: {
    totalCartPrice: state => {
      return state.cart.reduce((total, item) => total + item.price, 0);
    }
    // Define more getters as needed
  }
});

export default store;
