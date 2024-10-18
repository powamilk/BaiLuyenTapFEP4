<template>
    <div>
      <h2>Chi tiết món ăn</h2>
      <div v-if="menuItem" class="card p-3">
        <p><strong>ID:</strong> {{ menuItem.id }}</p>
        <p><strong>Tên món ăn:</strong> {{ menuItem.name }}</p>
        <p><strong>Danh mục:</strong> {{ menuItem.category }}</p>
        <p><strong>Giá:</strong> {{ menuItem.price }} VND</p>
        <p><strong>Nguyên liệu chính:</strong> {{ menuItem.ingredients }}</p>
        <p><strong>Mô tả:</strong> {{ menuItem.description }}</p>
      </div>
      <router-link to="/" class="btn btn-primary mt-3">Trở về</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        menuItem: null
      };
    },
    mounted() {
      this.fetchMenuItem();
    },
    methods: {
      fetchMenuItem() {
        const id = this.$route.params.id;
        axios.get(`http://localhost:3000/menu/${id}`)
          .then(response => {
            this.menuItem = response.data;
          })
          .catch(error => {
            console.error('Failed to fetch menu item', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  