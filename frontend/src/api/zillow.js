import axios from 'axios';

export default axios.create({
  baseURL: 'https://mortgageapi.zillow.com/getCurrentRates'
});

// const zillow = () => {
//   axios.get('https://mortgageapi.zillow.com/getCurrentRates', {
//     params: {
//       partnerId: `${process.env.REACT_APP_PARTNER_ID}`
//     }
//   });
// };

// export default zillow;
