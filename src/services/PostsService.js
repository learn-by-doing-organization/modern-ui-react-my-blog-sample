import request from './_baseService'
import { USE_DUMMY_DATA } from '../enums/posts';
import { getDummyDataList, getDummyDataById } from '../dummydata/posts';
import { POST_ENDPOINTS } from '../enums/posts';

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
        console.log({url})
        console.log({method})
        return request({
            url: url,
            method: method,
        });
    }
}

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
        return request({
            url: POST_ENDPOINTS.READ.replace('{id}', id.toString()),
            method: 'GET',
        });
    }
}

export const PostsService = {
    getAll,
    get,
    // create, update, delete, etc. ...
}

export default PostsService