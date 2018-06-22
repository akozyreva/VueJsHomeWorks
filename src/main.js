import Vue from 'vue'
import App from './App.vue'

Vue.filter('text-length', val => {
	return `${val} (${val.length})`;
});

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
