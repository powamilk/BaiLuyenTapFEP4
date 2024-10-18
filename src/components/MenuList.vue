<template>
    <div>
      <h2>Danh sách món ăn</h2>
      <router-link to="/add" class="btn btn-primary mb-3">Thêm món ăn</router-link>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên món ăn</th>
            <th>Danh mục</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="menuItem in menuItems" :key="menuItem.id">
            <td>{{ menuItem.id }}</td>
            <td>{{ menuItem.name }}</td>
            <td>{{ menuItem.category }}</td>
            <td>{{ menuItem.price }}</td>
            <td>
              <router-link :to="`/edit/${menuItem.id}`" class="btn btn-warning btn-sm">Chỉnh sửa</router-link>
              <router-link :to="`/detail/${menuItem.id}`" class="btn btn-info btn-sm">Xem</router-link>
              <button @click="deleteMenuItem(menuItem.id)" class="btn btn-danger btn-sm">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        menuItems: []
      };
    },
    mounted() {
      this.fetchMenuItems();
    },
    methods: {
      fetchMenuItems() {
        axios.get('http://localhost:3000/menu')
          .then(response => {
            this.menuItems = response.data;
          })
          .catch(error => {
            console.error('Failed to fetch menu items', error);
          });
      },
      deleteMenuItem(id) {
        if (confirm('Bạn có chắc muốn xóa món ăn này không?')) {
          axios.delete(`http://localhost:3000/menu/${id}`)
            .then(() => {
              this.fetchMenuItems();
            })
            .catch(error => {
              console.error('Failed to delete menu item', error);
            });
        }
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  