import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { POST_URLS } from '../../../enums/posts';
import { CATEGORY_URLS } from '../../../enums/categories';
import { PostsService } from '../../../services/PostsService';
import BlogSectionMenu from './../../Partials/BlogSectionMenu';

/**
 * Component for showing the Post Details page.
 * 
 * @component
 * @example
 * return (
 *   <Details />
 * )
 */
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: props.match.params.postId,
            post: null,
            loading: false,
            hasErrors: false,
        };
    }

    componentDidMount() {
        let { postId } = this.state;
        PostsService.get(postId).then((data) => {
            this.setState({ 
                post: data,
                loading: false,
                hasErrors: false,
            })
        }).catch((error) => {
            console.error(error);
            this.setState({ 
                post: [],
                loading: false,
                hasErrors: true,
            })
        });

        this.setState({ 
            post: [],
            loading: true,
            hasErrors: false,
        })
    }

    render() {
        let { postId, post, loading, hasErrors } = this.state;
        return (
            <div className="page">
                <Jumbotron className={`page posts-${postId} details`}>
                    <h1 className="display-4">Blog post</h1>
                    <p>Learn more <a href="/about">about this project</a>.</p>
                </Jumbotron>
                {hasErrors && (<span>oops an error occurred...</span>)}
                {loading && (<span>loading...</span>)}
                {!loading && !hasErrors && !post && (<span>No post exists</span>)}
                {!loading && !hasErrors && post && (
                    <article>
                        <h3>{post.title}</h3>
                        <p>{post.text}</p>
                        {post.category && (<p>
                            <em>Category: </em>
                            <Link to={CATEGORY_URLS.READ.replace('{id}', post.category.id)}>{post.category.name}</Link>
                        </p>)}
                    </article>
                )}
                <BlogSectionMenu />
            </div>
        );
    }
}

export default Details;