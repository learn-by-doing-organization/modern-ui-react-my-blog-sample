import React, { Component } from 'react';
import AboutSectionMenu from './../Partials/AboutSectionMenu';
import Jumbotron from 'react-bootstrap/Jumbotron';

/**
 * Component for showing the About Page page.
 * 
 * @component
 * @example
 * return (
 *   <About />
 * )
 */
class About extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         match: props.match
    //     };
    // }

    render() {
        // let { match } = this.state;
        return (
            <div className="page">
                <Jumbotron className="page about">
                    <h1>About Project</h1>
                    <h2>Learn By Doing</h2>
                    <p><strong>Learn By Doing</strong> is a project to teach web programming.</p>
                </Jumbotron>
                <p>A series of repositories will be created to encourage <em>learning by doing</em>.</p>
                <p>From time to time activities will be proposed as if they were <em>real work tasks</em> commissioned by customers.</p>
                <p>
                    The activities will be divided into categories (database, frontend and backend) to allow you to discover your <em>programming interests and talents</em>.
                </p>
                <AboutSectionMenu />
            </div>
        );
    }
}

export default About;