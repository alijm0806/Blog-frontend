import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import PostsIndexView from "../views/PostsIndexView.vue";
import PostsNewView from "../views/PostsNewView.vue";
import PostsShowView from '../views/PostsShowView.vue';
import PostsEditView from '../views/PostsEditView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView
  },
  {
    path: '/posts',
    name: 'posts-index',
    component: PostsIndexView
  },
  {
    path: "/posts/new",
    name: "posts-new",
    component: PostsNewView
  },
  {
    path: '/posts/:id',
    name: 'posts-show',
    component: PostsShowView
  },
  {
    path: '/posts/:id/edit',
    name: 'posts-edit',
    component: PostsEditView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
