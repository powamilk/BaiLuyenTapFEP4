<template>
    <div>
      <h2>Cập nhật món ăn</h2>
      <MenuForm :id="id" />
    </div>
  </template>
  
  <script>
  import MenuForm from '@/components/MenuForm.vue';
  
  export default {
    components: {
      MenuForm
    },
    computed: {
      id() {
        return this.$route.params.id; 
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  