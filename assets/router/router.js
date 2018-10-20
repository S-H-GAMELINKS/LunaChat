import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import About from '../components/about.vue'
import Contact from '../components/contact.vue'
import CreateChatRoom from '../components/chats/index.vue'
import ChatRoom from '../components/chats/room.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/chats', component: CreateChatRoom },
    { path: '/chats/rooms/:id', component: ChatRoom, name: 'chatroom' },
  ],
})