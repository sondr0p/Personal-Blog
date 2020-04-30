import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className='navbar navbar-expand-lg navbar-dark bg-primary'>
                <a className='navbar-brand' href="/">My Blog</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;
