import * as React from 'react';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography } from '@mui/material';


function ShoppingCart () {

    const [count, setCount] = useState(0);

    return (
    <>
        <ShoppingCartIcon style={{ margin: "20px 20px 10px 20px", fontSize: "25px", textAlign: "center", }}/>
        <Typography variant="h6" component="h5" style={{ background: "red", padding: "0px 2px 0px 2px", borderRadius: "100px", marginLeft: "-10px", marginTop: "20px", }}>
            {count}
        </Typography>
    </>
    )
}

export default ShoppingCart;