export default function validateCalculator(propertyValue, loanAmount, zipcode) {
  let errors = {};

  if (propertyValue !== null) {
    if (isNaN(propertyValue)) {
      errors.propertyValue =
        'The Property Value must be a number with no decimals, commas, or $ sign.';
    }
  }
  if (loanAmount !== null) {
    if (isNaN(loanAmount)) {
      errors.loanAmount =
        'The Loan Amount must be a number with no decimals, commas, or $ sign.';
    }
  }
  if (zipcode !== null) {
    if (isNaN(zipcode) || zipcode.length > 5) {
      errors.zipcode = 'The Zip Code must be a 5 digit number.';
    }
  }

  return errors;
}

// export default function validateCalculator(propertyValue, loanAmount, zipcode) {
//   let errors = {};

//   if (propertyValue === null) {
//     return errors;
//   } else if (isNaN(propertyValue)) {
//     errors.propertyValue =
//       'The Property Value must be a number with no decimals, commas, or $ sign.';
//   }
//   if (loanAmount === null) {
//     return errors;
//   } else if (isNaN(loanAmount)) {
//     errors.loanAmount =
//       'The Loan Amount must be a number with no decimals, commas, or $ sign.';
//   }
//   if (zipcode === null) {
//     return errors;
//   } else if (isNaN(zipcode) || zipcode.length > 5) {
//     errors.zipcode = 'The Zip Code must be a 5 digit number.';
//   }

//   return errors;
// }
