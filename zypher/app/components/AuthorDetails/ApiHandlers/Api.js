import axios from 'axios';
import Config from "../../../config";

const baseURI = Config.baseURL;

export const getAuthorDetails = async (authorId) => {
  try {
    const res = await axios.post(`${baseURI}author/viewDetails/`, {
      authorId: authorId,
    });
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

export const getBookDetails = async () => {
  try {
    const res = await axios.post(`${baseURI}books/getbooksBytags`, {
      booksPerpage: 50,
      tags: 'business',
      pageNumber: 0,
      showAll: true,
    });
    return {
      success: true,
      data: res.data.books,
    };
  } catch (err) {
    return {
      success: false,
      data: err,
    };
  }
};
