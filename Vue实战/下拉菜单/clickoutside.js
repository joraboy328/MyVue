Vue.directive('clickoutside',{
    bind:function (el,binding,vnode) {
        function documentHandler(e) {
         
            if (el.contains(e.target)) {
                console.log('===1===');
                return false;

            }

            if (binding.expression) {
                console.log('===2===');
                binding.value(e);
            }
        }
        el._vueClickOutside_ = documentHandler;
        document.addEventListener('click',documentHandler);
    },
    unbind:function(el,binding) {
        document.removeEventListener('click',el._vueClickOutside_);
        delete el._vueClickOutside_;

    }

})