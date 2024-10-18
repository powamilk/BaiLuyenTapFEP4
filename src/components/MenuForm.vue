<template>
    <form @submit.prevent="submitForm" class="border p-4 rounded bg-light">
      <div class="form-group mb-3">
        <label for="name" class="form-label">Tên món ăn</label>
        <input type="text" id="name" v-model="form.name" class="form-control" required minlength="3" placeholder="Nhập tên món ăn" />
      </div>
      <div class="form-group mb-3">
        <label for="category" class="form-label">Danh mục</label>
        <select id="category" v-model="form.category" class="form-control" required>
          <option value="" disabled>Chọn danh mục</option>
          <option value="khai vị">Khai vị</option>
          <option value="chính">Chính</option>
          <option value="tráng miệng">Tráng miệng</option>
          <option value="đồ uống">Đồ uống</option>
        </select>
      </div>
      <div class="form-group mb-3">
        <label for="price" class="form-label">Giá</label>
        <input type="number" id="price" v-model="form.price" class="form-control" required min="1" placeholder="Nhập giá" />
      </div>
      <div class="form-group mb-3">
        <label for="ingredients" class="form-label">Nguyên liệu chính</label>
        <input type="text" id="ingredients" v-model="form.ingredients" class="form-control" required minlength="5" placeholder="Nhập nguyên liệu chính" />
      </div>
      <div class="form-group mb-3">
        <label for="description" class="form-label">Mô tả</label>
        <textarea id="description" v-model="form.description" class="form-control" required minlength="10" placeholder="Nhập mô tả món ăn"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">{{ isEdit ? 'Cập nhật' : 'Thêm' }} món ăn</button>
    </form>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['id'],
    data() {
      return {
        form: {
          name: '',
          category: '',
          price: 0,
          ingredients: '',
          description: ''
        },
        isEdit: false
      };
    },
    mounted() {
      if (this.id) {
        this.isEdit = true;
        this.fetchMenuItem();
      }
    },
    methods: {
      fetchMenuItem() {
        axios.get(`http://localhost:3000/menu/${this.id}`)
          .then(response => {
            this.form = response.data;
          })
          .catch(error => {
            console.error('Failed to fetch menu item', error);
          });
      },
      submitForm() {
        const method = this.isEdit ? 'PUT' : 'POST';
        const url = this.isEdit
          ? `http://localhost:3000/menu/${this.id}`
          : 'http://localhost:3000/menu';
  
        axios({
          method: method,
          url: url,
          data: this.form
        })
          .then(() => {
            this.$router.push('/');
          })
          .catch(error => {
            console.error('Failed to submit menu item', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  