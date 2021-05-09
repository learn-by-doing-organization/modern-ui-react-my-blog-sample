import { HTTP_METHOD } from './http';

/**
 * SET to true for use DUMMY DATA
 */
export const USE_DUMMY_DATA = true;

/**
 * the base path for react app link
 */
const urlBase = '/categories';

/**
 * Enums with urls of react app for Categories
 */
export const CATEGORY_URLS = {
  LIST: urlBase,
  READ: urlBase +'/{id}',
  EDIT: urlBase +'/{id}',
}

/**
 * the base endpoint for categories
 */
const endpointBase = '/api/v1/categories';

/**
 * Enums with endpoints for Categories
 */
export const CATEGORY_ENDPOINTS = {
  LIST: [ endpointBase, HTTP_METHOD.GET ],
  CREATE: [ endpointBase, HTTP_METHOD.POST ],
  READ: [ endpointBase +'/{id}', HTTP_METHOD.GET ],
  EDIT: [ endpointBase +'/{id}', HTTP_METHOD.PUT ],
  DELETE: [ endpointBase +'/{id}', HTTP_METHOD.DELETE ],
}