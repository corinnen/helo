import React from 'react';

import {withRouter, Link} from 'react-router-dom';

function Nav(props) {
    if(props.location.pathname === '/'){
        return null
    }

        return (
            <div>
                <Link to="/Dashboard">Home</Link>
                <Link to="/new">New Post</Link>
                <Link to="/">Logout</Link>
            </div>         
        )
    
}

export default withRouter(Nav)