// for add item in cart
export const addCart = (product) => {
  return {
    type: "ADD_ITEM",
    payload: product,
  };
};

// for delete item in cart
export const deleteCart = (product) => {
  return {
    type: "DELETE_ITEM",
    payload: product,
  };
};
