<template>
  <div class="available-books-section">
    <h2>Available Books</h2>
    <div class="available-books-grid">
      <div v-for="book in books" :key="book.id" class="book-item">
        <div class="book-info">
          <span class="book-title">{{ book.title }}</span>
          <span class="book-author">by {{ book.author }}</span>
          <span class="book-price">₱{{ book.price }}</span>
        </div>
        <button @click="addToCart(book)" class="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvailableBooks',
  props: {
    books: {
      type: Array,
      required: true
    },
    authenticated: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    addToCart(book) {
      if (this.authenticated) {
        this.$emit('add-to-cart', book);
      } else {
        alert("Please login to add items to cart.");
      }
    }
  }
};
</script>

<style scoped>
.available-books-section {
  margin-top: 20px;
}

.available-books-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns */
  grid-gap: 20px; /* Gap between grid items */
}

.book-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

.book-info {
  margin-bottom: 10px;
}

.book-title {
  font-weight: bold;
}

.book-author {
  font-style: italic;
}

.book-price {
  font-weight: bold;
}

.add-to-cart-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.add-to-cart-btn:hover {
  background-color: #0056b3;
}
</style>
