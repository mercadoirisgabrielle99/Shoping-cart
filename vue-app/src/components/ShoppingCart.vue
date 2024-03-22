<template>
  <div class="cart">
    <h2>Shopping Cart</h2>
    <div v-for="(item, index) in cart" :key="index" class="cart-item">
      <div class="item-box">
        <div class="item-details">
          <p>{{ item.product.name }} - Quantity {{ item.quantity }} - Total: ₱{{ item.product.price * item.quantity }}</p>
        </div>
        <div class="item-actions">
          <button class="increase" @click="increaseQuantity(index)">+</button>
          <button class="decrease" @click="decreaseQuantity(index)">-</button>
          <button class="remove" @click="removeFromCart(index)">Remove</button>
        </div>
      </div>
    </div>
    <div class="total">
      <p>Total:</p>
      <p>₱{{ total }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cart', 'total'],
  methods: {
    removeFromCart(index) {
      this.$emit('remove-from-cart', index);
    },
    increaseQuantity(index) {
      this.$emit('increase-quantity', index);
    },
    decreaseQuantity(index) {
      this.$emit('decrease-quantity', index);
    }
  }
}
</script>

<style scoped>
.cart {
  background-color: #574f4f96; /* background color of the shopping cart */
  padding: 20px;
}

h2 {
  color: #ffffff; /* color of the heading text */
  font-weight: bolder;
  text-align: center;
}

.cart-item {
  margin-top: 10px;
  color: rgb(255, 255, 255); /* text color of cart items */
}

.item-box {
  border: 1px solid #ffffff;
  padding: 10px;
}

.item-details {
  flex-grow: 1;
}

.item-actions button {
  margin-left: 5px;
}

.total {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.total p {
  color: #fff3f3; /* color of the total text */
  font-weight: bolder;
}

.increase  {
  background-color: #77dc2a; /* background color of increase */
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 2px;
  cursor: pointer;
  border-radius: 4px;
}
.decrease {
  background-color: #f44336; /* background color of decrease*/
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 2px;
  cursor: pointer;
  border-radius: 4px;
}
.remove {
  background-color: #f44336; /* background color of remove */
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 2px;
  cursor: pointer;
  border-radius: 4px;
}
</style>

