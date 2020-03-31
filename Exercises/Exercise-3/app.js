new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result: function() {
                return this.value >= 37 ? 'There!' : 'Not there yet';
            }
        },
        watch: {
            result: function() {
                if(this.value != 0) {
                    let self = this;
                    setTimeout(function(){
                            self.value = 0;
                    }, 5000);
                }
            }
        },
    });