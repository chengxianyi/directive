import Vue from 'vue'
Vue.directive('monitor', {
    bind(el, binding) {
        el.addEventListener('click', () => {
            console.log(binding.value);//获取到对应的参数后调用接口
        })
    }

});
export default Vue.directive
