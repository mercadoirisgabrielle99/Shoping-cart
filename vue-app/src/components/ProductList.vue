<template>
    <div class="product-list">
      <img src="@/assets/logo.png" alt="Logo" class="logo">
      <div class="row" v-for="(row, index) in Math.ceil(products.length / 5)" :key="index">
        <div class="column" v-for="(product, i) in products.slice(index * 5, (index * 5) + 5)" :key="product.id">
          <div class="product">
            <h3>{{ product.name }}</h3>
            <p class="price">Price: ₱{{ product.price }}</p>
            <button class="add-to-cart" @click="addToCart(product)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import logo from '@/assets/logo.png'; // Add the import statement for the logo
  
  export default {
    props: ['products'],
    methods: {
      addToCart(product) {
        this.$emit('add-to-cart', product);
      }
    }
  }
  </script>
  
  <style scoped>

.logo {
  width: 300px; /* width of the logo */
  margin-bottom: 15px; /* spacing between the logo and the products */
  margin-left: 350px;
}

.row {
  display: flex;
  justify-content: center;
}

.column {
  flex: 0 0 20%;
  padding: 10px;
}

.product {
  border: 2px solid #080505;
  padding: 15px;
  text-align: center;
  color: #000000ce; /* color of the text */
  background-color: rgba(255, 255, 255, 0.676); /* background color of the product */
  height: 200px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.price {
  margin: 10px 0;
}

.add-to-cart {
  background-color: #54d836fb; /* background color of add to cart */
  border: none;
  color: rgb(255, 255, 255);
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
