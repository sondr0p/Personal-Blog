import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

class Header extends Component {
    render() {
        const { user, isAuthenticated } = this.props.auth;

        const userLinks = (
            <div className='nav-item active dropdown show'>
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">{user ? user.username : ''}</a>
                <div className='dropdown-menu'>
                    <a className='dropdown-item' onClick={this.props.logout} >
                        Logout
                    </a>
                </div>
            </div >
        );

        const guestLinks = (
            <div className='nav justify-content-end'>
                <Link to='/register'>
                    Sign Up
                </Link>
                <Link to='/login'>
                    Login
                </Link>
            </div>
        );

        return (
            <div className='navbar navbar-expand-lg navbar-dark bg-primary'>
                <Link to='/' className='navbar-brand'>
                    My Blog
                </Link>
                <div className="collapse navbar-collapse">
                    <div className='navbar-nav mr-auto'>
                        <Link to='/' className='nav-item active'>
                            <a className="nav-link">Home</a>
                        </Link>
                        {isAuthenticated ? userLinks : guestLinks}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logout }
)(Header);
