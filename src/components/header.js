import React from 'react'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div>
            <img src={require('../images/drop-logo1.png')} alt='drop logo' className='logo-img' />
        </div>
        <div className="content">
            <div className="inner">
                <h1>-DROP-</h1>
                <h3>INTERSTELLAR CORPORATION</h3>
                <p>We seek, come and destroy - conquering every system.
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('admirals')}}>Admirals</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('navigator')}}>Navigator</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('armory')}}>Armory</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('gallery')}}>Gallery</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('blog')}}>Blog</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Apply</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
