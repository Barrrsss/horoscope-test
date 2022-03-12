import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from "vuex";
const store = createStore({
    state: {
        footer: false,
    },
    getters: {
        getFooter: state => state.footer,
    },
    mutations: {
        INCREMENT_COUNT(state) {
            state.footer = false;
        },
    },
});

createApp(App).use(store).use(router).mount('#app')

