new Vue({
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0
    },
    //  This section methods are called only if properties they depend on changes (if they are called in HTML code)
    computed: {
        output: function() {
            console.log('Computed output called!');
            return this.counter > 5 ? 'Greater than 5' : 'Smaller or equal to 5';
        }
    },
    //  This section methods are called whenever something changes on page if where they output something
    methods: {
        outputSecond: function() {
            console.log('Method output called!');
            return 'Constant.';
        }
    }
});