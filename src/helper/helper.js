const sumProducts = (products) => {
  const itemsCounter = products.reduce((acc, cur) => acc + cur.quantity, 0);
  const total = products
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
  return { itemsCounter, total };
};

const productQuantity = (state, id)=>{
const index =state.selectedItems.findIndex(item => item.id === id);
if(index === -1){
  return 0 
} else{
  return state.selectedItems[index].quantity;
}

}
const sumLikedProducts = (products) => {
  const likesCounter = products.reduce((acc, cur) => acc + 1, 0);
  return { likesCounter };
};
const productLikePosition = (state, id)=>{
  const index =state.likedItems.findIndex(item => item.id === id);
  if(index === -1){
    return 0 
  } else{
    return state.likedItems[index].liked;
  }
  
  }
export { sumProducts, productQuantity, productLikePosition,sumLikedProducts };
