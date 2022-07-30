/* eslint-disable no-unreachable */
/* eslint-disable no-alert */
export const GET_IMAGE = 'GET_IMAGE';

const API = 'https://mocki.io/v1/d368ce9c-d7f4-49d1-b950-990bf0fd25b9';

export const getImage = () => {
  try {
    return async dispatch => {
      const rezult = await fetch(API, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      });

      const json = await rezult.json();

      if (json) {
        dispatch({
          type: GET_IMAGE,
          payload: json,
        });
      } else {
        console.log('Unable to fatch');
      }
    };
  } catch (error) {
    alert(error);
  }
};
