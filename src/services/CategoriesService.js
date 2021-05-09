import request from './_baseService'
import { USE_DUMMY_DATA } from '../enums/categories';
import { getDummyDataList, getDummyDataById } from '../dummydata/categories';
import { CATEGORY_ENDPOINTS } from '../enums/categories';

/**
 * Handle retrieve list of categories
 */
function getAll() {
    if(USE_DUMMY_DATA) {
        return new Promise((resolve, reject) => {
            try {
                const data = getDummyDataList();
                const result = {
                    total_items: data.totalItems,
                    items: data.items
                };
                resolve(result);
              } catch (error) {
                console.error(error);
                reject(error);
              }
        });
    } else {
        const [url, method] = CATEGORY_ENDPOINTS.LIST;

        return new Promise((resolve, reject) => {
            request({
                url: url,
                method: method,
            }).then((data) => {
                const result = {
                    total_items: data.length,
                    items: data
                };
                resolve(result);
            }).catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }
}

/**
 * Handle retrieve category details by id
 */
function get(id) {
    if(!id) {
        console.error('no id for get of CategoriesService');
    }
    if(USE_DUMMY_DATA) {
        return new Promise((resolve, reject) => {
            try {
                const categoryData = getDummyDataById(id);
                resolve(categoryData);
              } catch (error) {
                console.error(error);
                reject(error);
              }
        });
    } else {
        const [url, method] = CATEGORY_ENDPOINTS.READ;

        return new Promise((resolve, reject) => {
            request({
                url: url.replace('{id}', id.toString()),
                method: method,
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }
}

/**
 * Service class to handle retrieve of categories data
 */
export const CategoriesService = {
    getAll,
    get,
    // create, update, delete, etc. ...
}

export default CategoriesService