import request from './_baseService'
import { USE_DUMMY_DATA } from '../enums/posts';
import { getDummyDataList, getDummyDataById } from '../dummydata/posts';
import { POST_ENDPOINTS } from '../enums/posts';

/**
 * Handle retrieve list of posts
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
        const [url, method] = POST_ENDPOINTS.LIST;

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
 * Handle retrieve post details by id
 */
function get(id) {
    if(!id) {
        console.error('no id for get of PostsService');
    }
    if(USE_DUMMY_DATA) {
        return new Promise((resolve, reject) => {
            try {
                const postData = getDummyDataById(id);
                resolve(postData);
              } catch (error) {
                console.error(error);
                reject(error);
              }
        });
    } else {
        const [url, method] = POST_ENDPOINTS.READ;

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
 * Service class to handle retrieve of posts data
 */
export const PostsService = {
    getAll,
    get,
    // create, update, delete, etc. ...
}

export default PostsService