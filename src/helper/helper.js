const sumProducts = (products) => {
  const itemsCounter = products.reduce((acc, cur) => acc + cur.quantity, 0);
  const total = products
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
  return { itemsCounter, total };
};

const productQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};
const sumLikedProducts = (products) => {
  const likesCounter = products.reduce((acc, cur) => acc + 1, 0);
  return { likesCounter };
};
const productLikePosition = (state, id) => {
  const index = state.likedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.likedItems[index].liked;
  }
};

const validEmail = (email) => {
  const patt = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return patt.test(email);
};
const validateForm = ({ mobile, email, pass, repass }) => {
  const errors = { mobile: "", email: "", pass: "", repass: "" };

  if (mobile.length !== 11) {
    errors.mobile = "لطفا شماره همراه خود را به صورت صحیح وارد کنید.";
  }
  if(!validEmail(email)){
    errors.email = "لطفا ایمیل را به صورت صحیح وارد کنید."
  }
  if(pass.length < 6){
    errors.pass = "لطفا حداقل 8 کاراکتر را وارد کنید"
  }
  if(repass !== pass){
    errors.repass = "لطفا پسورد را به صورت صحیح وارد کنید."
  }
  return errors;
};
export {
  sumProducts,
  productQuantity,
  productLikePosition,
  sumLikedProducts,
  validEmail,
  validateForm
};
