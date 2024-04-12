<template>
    <div class="checkout">
      <h2>Checkout</h2>
      <div v-if="cart.length === 0">
        <p>Your cart is empty.</p>
      </div>
      <div v-else>
        <ul class="cart-items">
          <li v-for="(item, index) in cart" :key="index" class="cart-item">
            <span class="item-title">{{ item.title }}</span>
            <span class="item-price">₱{{ item.price }}</span>
          </li>
        </ul>
        <p class="total">Total: ₱{{ getTotalPrice() }}</p>
        <button @click="purchase" :disabled="cart.length === 0" class="purchase-btn">Purchase</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Checkout',
    props: {
      cart: {
        type: Array,
        required: true
      }
    },
    methods: {
      getTotalPrice() {
        return this.cart.reduce((total, item) => total + item.price, 0);
      },
      purchase() {
        // Handle purchase logic here
        alert('Thank you for your purchase!');
        this.$emit('complete-purchase');
      }
    }
  };
  </script>
  
  <style scoped>
  .checkout {
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .checkout h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .cart-items {
    list-style: none;
    padding: 0;
  }
  
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .item-title {
    font-weight: bold;
  }
  
  .item-price {
    color: #555;
  }
  
  .total {
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
  }
  
  .purchase-btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  .purchase-btn:hover {
    background-color: #0056b3;
  }
  </style>
  