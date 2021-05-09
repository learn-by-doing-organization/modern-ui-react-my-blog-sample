import { HTTP_METHOD } from './http';

/**
 * SET to true for use DUMMY DATA
 */
export const USE_DUMMY_DATA = true;

/**
 * the base path for react app link
 */
const urlBase = '/posts';

/**
 * Enums with urls of react app for Posts
 */
export const POST_URLS = {
  LIST: urlBase,
  READ: urlBase +'/{id}',
  EDIT: urlBase +'/{id}',
}

/**
 * the base endpoint for posts
 */
const endpointBase = '/api/v1/posts';
// const endpointBase = '/home';

/**
 * Enums with endpoints for Posts
 */
export const POST_ENDPOINTS = {
  LIST: [ endpointBase, HTTP_METHOD.GET ],
  CREATE: [ endpointBase, HTTP_METHOD.POST ],
  READ: [ endpointBase +'/{id}', HTTP_METHOD.GET ],
  EDIT: [ endpointBase +'/{id}', HTTP_METHOD.PUT ],
  DELETE: [ endpointBase +'/{id}', HTTP_METHOD.DELETE ],
}