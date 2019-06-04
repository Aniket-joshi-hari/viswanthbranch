import axios from 'axios';

const baseURI = 'https://test-zypher.herokuapp.com/';

export const getExploreDetails = async () => {
  try {
    const res = await axios.get(`${baseURI}test/test/`);
    return {
      success: true,
      data: res.data,
    };
  } catch (err) {
    return {
      success: false,
      data: err,
    };
  }
};
