import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import M from 'materialize-css';

import Login from './Login';

const Admin = (props) => {

    return (
        <Fragment>
            <Helmet><title>Admin : : Vegistech.com</title></Helmet>
            <Login />
        </Fragment>
    );
};

export default Admin;