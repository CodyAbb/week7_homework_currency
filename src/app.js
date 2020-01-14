import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: null,
      selectedCurrency: null,
      euroInput: null,
      otherCurrencyInput: null
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
      currencyCalculation: function(euroInput, currency){
       const result = euroInput * currency
       return result.toFixed(2);
     },
     toEuroCalculation: function(otherCurrencyInput, currencyRate){
       const result = otherCurrencyInput/currencyRate
       return result.toFixed(2);
     }
  }
  });
});
