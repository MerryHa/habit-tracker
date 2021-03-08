import React, { memo } from 'react';

const Navbar = memo(props => {
    return (
        <nav className='navbar'>
            <i className='navbar-logo fas fa-leaf'></i>
            <h1>Habit Tracker</h1>
            <span className='navbar-count'>{props.totalCount}</span>
        </nav>
    );
});

export default Navbar;