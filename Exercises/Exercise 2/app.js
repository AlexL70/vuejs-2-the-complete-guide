new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            onClickAlertButton: function() {
                alert('Alert!');
            },
            onInputKeydown: function(event) {
                //console.log(event.target);
                this.value = event.target.value;
            }
        },
    });