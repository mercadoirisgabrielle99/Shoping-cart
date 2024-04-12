<template>
  <div class="shopping-cart">
    <h2>Shopping Cart</h2>
    <ul v-if="cart.length > 0" class="cart-list">
      <li v-for="(item, index) in cart" :key="index" class="cart-item">
        <div class="cart-item-info">
          <span class="cart-item-title">{{ item.title }}</span>
          <span class="cart-item-author" style="color: black;">by {{ item.author }}</span>
        </div>
        <button @click="removeFromCart(index)" class="remove-from-cart-btn">Remove</button>
      </li>
    </ul>
    <p v-else class="empty-cart" style="color: black;">Your cart is empty</p>
    <p v-if="cart.length > 0" class="total-price">Total Price: ₱{{ getTotalPrice() }}</p>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  props: {
    cart: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeFromCart(index) {
      this.$emit('remove-from-cart', index);
    },
    getTotalPrice() {
      return this.cart.reduce((total, item) => total + item.price, 0);
    }
  }
};
</script>

<style scoped>
.shopping-cart {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 10px;
  background-color: #a79c9c;
  width: 100%;
}

.shopping-cart h2 {
  margin-bottom: 10px;
}

.cart-list {
  list-style-type: none;
  padding: 0;
}

.cart-item {
  padding: 15px;
  border-bottom: 1px solid #020202;
  display: flex;
  justify-content: space-between;
}

.cart-item-info {
  flex: 1;
}

.cart-item-title {
  font-size: 16px;
  font-weight: bold;
}

.cart-item-author {
  font-size: 14px;
  color: #000000;
}

.remove-from-cart-btn {
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
}

.empty-cart {
  color: #666;
}

.total-price {
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
}
</style>
