import { createRouter, createWebHistory } from 'vue-router';
import MenuList from '@/components/MenuList.vue';
import MenuAdd from '@/views/MenuAdd.vue';
import MenuUpdate from '@/views/MenuUpdate.vue';
import MenuDetail from '@/views/MenuDetail.vue';

const routes = [
  { path: '/', component: MenuList },            
  { path: '/add', component: MenuAdd },          
  { path: '/update/:id', component: MenuUpdate }, 
  { path: '/detail/:id', component: MenuDetail }  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
