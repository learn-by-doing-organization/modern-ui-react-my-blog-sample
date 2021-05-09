import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { POST_URLS } from '../../../enums/posts';
import { CategoriesService } from '../../../services/CategoriesService';
import BlogSectionMenu from './../../Partials/BlogSectionMenu';

/**
 * Component for showing the Category Details page.
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
            categoryId: props.match.params.categoryId,
            post: null,
            loading: false,
            hasErrors: false,
        };
    }

    componentDidMount() {
        let { categoryId } = this.state;
        CategoriesService.get(categoryId).then((data) => {
            this.setState({ 
                category: data,
                loading: false,
                hasErrors: false,
            })
        }).catch((error) => {
            console.error(error);
            this.setState({ 
                category: [],
                loading: false,
                hasErrors: true,
            })
        });

        this.setState({ 
            category: [],
            loading: true,
            hasErrors: false,
        })
    }

    render() {
        let { categoryId, category, loading, hasErrors } = this.state;
        return (
            <div className="page">
                <Jumbotron className={`page categories-${categoryId} details`}>
                    <h1 className="display-4">Blog category</h1>
                    <p>Learn more <a href="/about">about this project</a>.</p>
                </Jumbotron>
                {hasErrors && (<span>oops an error occurred...</span>)}
                {loading && (<span>loading...</span>)}
                {!loading && !hasErrors && !category && (<span>No category exists</span>)}
                {!loading && !hasErrors && category && (
                    <article>
                        <h3>{category.title}</h3>
                        <p>{category.description}</p>
                        {category.posts.length > 0 && category.posts.map((item, index) => (
                            <article key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p><Link to={POST_URLS.READ.replace('{id}',item.id)}>read more...</Link></p>
                            </article>
                        ))}
                    </article>
                )}
                <BlogSectionMenu />
            </div>
        );
    }
}

export default Details;