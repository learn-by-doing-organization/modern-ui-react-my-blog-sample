import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { CATEGORY_URLS } from '../../../enums/categories';
import { CategoriesService } from '../../../services/CategoriesService';
import BlogSectionMenu from './../../Partials/BlogSectionMenu';

/**
 * Component for showing the Categories List page.
 * 
 * @component
 * @example
 * return (
 *   <List />
 * )
 */
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            size : 0,
            total_items: 0,
            items: [],
            loading: false,
            hasErrors: false,
        };
    }

    componentDidMount() {
        const params = queryString.parse(this.props.location.search);
        const currentPage = params.page || 1;

        CategoriesService.getAll(currentPage).then((data) => {
            this.setState({ 
                total_items: data.total_items,
                size: data.size,
                items: data.items,
                loading: false,
                hasErrors: false,
            })
        }).catch((error) => {
            console.error(error);
            this.setState({ 
                total_items: 0,
                items: [],
                loading: false,
                hasErrors: true,
            })
        });

        this.setState({ 
            total_items: 0,
            items: [],
            loading: true,
            hasErrors: false,
        })
    }

    render() {
        const { 
            page,
            size,
            hasErrors,
            loading,
            total_items,
            items,
        } = this.state;

        const hasNextPage = ((size * (page - 1)) + items.length) < total_items;
        
        return (
            <div className="page">
                <Jumbotron className="page categories list">
                    <h1 className="display-4">Categories list</h1>
                    <p>Learn more <a href="/about">about this project</a>.</p>
                </Jumbotron>
                {hasErrors && (<span>oops an error occurred...</span>)}
                {loading && (<span>loading...</span>)}
                {!loading && !hasErrors && items.length === 0 && (<span>No categories exists</span>)}
                {!loading && !hasErrors && items.length > 0 && items.map((item, index) => (
                    <article key={index}>
                        <h3>{item.name}</h3>
                        <p>{item.name}</p>
                        <p><Link to={CATEGORY_URLS.READ.replace('{id}',item.id)}>read more...</Link></p>
                    </article>
                ))}
                {!loading && !hasErrors && hasNextPage && (
                    <p><Link to={`${CATEGORY_URLS.LIST}/?page=${page + 1}`}>next page</Link></p>
                )}
                <BlogSectionMenu />
            </div>
        );
    }
}

export default List;