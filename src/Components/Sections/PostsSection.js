import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Posts from '../Pages/Posts/List';
import Post from '../Pages/Posts/Details';

/**
 * Functional Component for handle routes to Posts Section.
 * 
 * @component
 * @example
 * return (
 *   <PostsSection />
 * )
 */
const PostsSection = withRouter(props =>
    <>
        <Route exact path={`${props.match.url}`} component={Posts} />
        <Route exact path={`${props.match.url}/:postId`} component={Post} />
    </>
);

export default PostsSection;