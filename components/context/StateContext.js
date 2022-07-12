import React, {createContext, useState, useEffect } from 'react';

/*import {toast} from 'react-hot-toast';*/

export const Context = createContext();


export const StateContext = ({children}) => {
    useEffect(() => {
        const updLoacal = JSON.parse(localStorage.getItem('cartItems') || '[]');
        if(updLoacal){
            setCartItems(updLoacal)
        }
    }, [])
    

    const [qty, setQty] = useState(1);
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQty, setTotalQty] = useState(0);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])



    let foundProduct;
    let index;


    const increaseCart = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        index = cartItems.findIndex((i) => i._id === product._id);
        cartItems[index].quantity += 1;
        setCartItems([...cartItems]);
        setTotalQty((prevTotalQty) => prevTotalQty + 1);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price );
        
    }

    const decreaseCart = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        index = cartItems.findIndex((i) => i._id === product._id);
        
        if(product.quantity > 1){
            cartItems[index].quantity -= 1;
            setCartItems([...cartItems]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price );
            setTotalQty((prevTotalQty) => prevTotalQty - 1); 
        }else{
            const newArray = cartItems.filter((i) => i._id !== product._id)
            setCartItems(newArray);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price );
            setTotalQty((prevTotalQty) => prevTotalQty - 1); 
        }
         
    }
    
    
    const onAdd  = (product, quantity) => {
        const checkProductCart = cartItems.find((item) => item._id === product._id);
        setTotalQty((prevTotalQty) => prevTotalQty + quantity);

        if (checkProductCart) {
            
            const uptadedCartItems = cartItems.findIndex((i) => i._id === product._id);

            if(uptadedCartItems !== undefined){
                product.quantity =  cartItems[uptadedCartItems].quantity + qty
                cartItems.splice(uptadedCartItems, 1, product)
                setCartItems(...cartItems)
                
            }

        }else {
            product.quantity = quantity;
            setCartItems([...cartItems, {...product}])
        }
        setQty(1)
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity );

    }

    const deleteCart = (product) => {
        setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price * product.quantity );
        setTotalQty((prevTotalQty) => prevTotalQty - product.quantity);

        const deleteProduct = cartItems.filter((i) => i._id !== product._id );
        setCartItems(deleteProduct);
    }

    const increase = () => {
        setQty((prevQty) => prevQty + 1)
    };
    const decrease = () => {
        setQty((prevQty) => prevQty -1 < 1 ? 1 : prevQty -1 )
    };


    return (
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQty,
                qty,
                increase,
                decrease,
                onAdd,
                increaseCart,
                decreaseCart,
                deleteCart
            }}
        >
            {children}
        </Context.Provider>
    )
}
 