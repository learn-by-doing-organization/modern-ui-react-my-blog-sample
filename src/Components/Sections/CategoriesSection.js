import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Categories from '../Pages/Categories/List';
import Category from '../Pages/Categories/Details';

/**
 * Functional Component for handle routes to Categories Section.
 * 
 * @component
 * @example
 * return (
 *   <CategoriesSection />
 * )
 */
const CategoriesSection = withRouter(props =>
    <>
        <Route exact path={`${props.match.url}/:categoryId`} component={Category} />
        <Route exact path={`${props.match.url}`} component={Categories} />
    </>
);

export default CategoriesSection;