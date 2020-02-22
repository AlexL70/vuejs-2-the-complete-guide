new Vue({
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0,
        outputSecond: ""
    },
    //  This section methods are called only if properties they depend on changes
    //  (if they are called in HTML code)
    computed: {
        output: function() {
            console.log('Computed output called!');
            return this.counter > 5 ? 'Greater than 5' : 'Smaller or equal to 5';
        }
    },
    //  This watches known properties from "data" section and executes code whenever appropriate property changes
    //  It is less optimal way to do things than using computed properties
    watch: {
        secondCounter: function(value) {
            vm = this;
            //  Emuate calling server
            setTimeout( function() {
                vm.outputSecond = value > 5 ? "Second is greater than 5" : "Second is smaller or equal to 5";
            }, 500)
        }
    }
});