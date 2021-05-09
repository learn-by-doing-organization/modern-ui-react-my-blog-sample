import React from 'react';

/**
 * Functional Component for showing the footer of the site
 * @component
 * @example
 * return (
 *  <Footer />
 * )
 */
const Footer = () => {
    return (
        <footer className="partial footer" style={{ borderTop: "solid thin black" }}>
            <p>
                This is the footer of <b><a href="https://github.com/learn-by-doing-organization/modern-ui-react-my-blog-sample">modern-ui-react-my-blog-sample</a></b>
            </p>
            <p>
                Realized by <a target="_blank" rel="noopener noreferrer" href="https://github.com/Magicianred">magicianred</a>
            </p>
        </footer>
    )
}

export default Footer;