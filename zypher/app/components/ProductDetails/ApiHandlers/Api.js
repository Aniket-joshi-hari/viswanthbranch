import axios from 'axios';

const baseURI = 'https://test-zypher.herokuapp.com/';

export const getProductDetails = async pid => {
  try {
    const res = await axios.post(`${baseURI}books/getProduct/`, {
      pid,
    });
    return {
      success: true,
      data: res.data.bookDetails,
    };
  } catch (err) {
    return {
      success: false,
      data: err,
    };
  }
};

export const addProductToCart = async pid => {
  try {
    const res = await axios.post(`${baseURI}user/cart/addToCart`, {
      pid,
      userId: '5ccac7d72669d60017dadd51',
    });
    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
    };
  }
};
