import { USE_DUMMY_DATA } from '../enums/posts';

/**
 * convert data for send to backend
 */
export const transformToAPI = ((data) => {
  if(USE_DUMMY_DATA) {
    return data;
  } else {
    return data;
  }
});

/**
 * convert data for details
 */
export const transformToDetails = ((data) => {
  if(USE_DUMMY_DATA) {
    return data;
  } else {
    return data;
  }
});

/**
 * convert data for list view
 */
export const transformToList = ((data) => {
    if(USE_DUMMY_DATA) {
      return data;
    } else {
      return data;
    }
});