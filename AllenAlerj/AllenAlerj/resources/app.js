var home = new Vue({
    el: '#home',
    data: {
        cep: '',
        logradouro: '',
        list: [],
    },

    methods: {
        checkZip: function () {
            if (this.cep.length == 8) {
                this.$http.get('http://viacep.com.br/ws/' + this.cep + '/json/', function (data) {
                    if (data) {
                        this.logradouro = data.logradouro;
                    }
                });
            }
            else
            {
                this.logradouro = '';
            }
        },

        addZip: function () {
            if (this.cep && this.logradouro) {
                this.list.push({ cep: this.cep, logradouro: this.logradouro });
            }
        }
    }
});