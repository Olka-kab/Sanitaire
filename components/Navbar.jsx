import React, { useContext } from 'react';

import Link from 'next/link'

import {Context} from './context/StateContext'


import { ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';

const Navbar = () => {

    const {totalQty} = useContext(Context)

    return(
        <nav>
            <Link href='/'>DEMO ECOMMERCE</Link>
            <Link clasName='cart' href='/product/cart'>
                <Badge badgeContent={totalQty} color="primary">
                    <ShoppingCartOutlined/>
                </Badge>
            </Link>   
        </nav>
    )
}

export default Navbar;