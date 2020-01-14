import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: null,
      selectedCurrency: null,
      input: null
    },
    mounted(){
      this.currencyFetch()
    },
    methods:{
      currencyFetch: function(){
        fetch('https://api.exchangeratesapi.io/latest')
        .then(req => req.json())
        .then(data => this.currencies = data.rates)
        this.currencies = null;
      },
      currencyCalculation: function(input, currency){
       return input * currency
      }
  }
  });
});
