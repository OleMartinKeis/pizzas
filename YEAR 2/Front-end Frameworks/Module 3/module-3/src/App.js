import { useContext, useEffect, useState } from 'react'
import './App.css';
import React, { useReducer, createContext } from 'react';
import { create } from 'zustand';
import { ProductCart } from './cart'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeTwo from './store'; // Import your Redux store
import App from './App';

// Using Zustand to create a cart that can update and clear the cart

const useStore = create((set) => ({
    products: [
        {
            id: 0,
            title: 'Milk',
            price: 19.99,
            discountedPrice: 19.99,
          },
          {
            id: 1,
            title: 'Bread',
            price: 12.99,
            discountedPrice: 12.99,
          },
          {
            id: 2,
            title: 'Cheese',
            price: 25.99,
            discountedPrice: 25.99,
          },
    ],
    addToCart: (product) => set((state) => ({ products: [...state.products, product] })),
    clearCart: () => set({ products: [] })
})
)

function Product({ product }){
    const addToCart = useStore((state) => state.addToCart);

    return <div>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
}

function Cart() {
    const products = useStore((state) => state.products)
    const clearCart = useStore((state) => state.clearCart)

    return (
        <div>
            <h2>Shopping cart</h2>
            <ul>
                {products.map((product) => (
                <li key={product.id}>
                    {product.title} - ${product.price}
                </li>    
                ))}
            </ul>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    )
}

// Using a createContext/useContext for variuos supermarket products

const ProductContext = createContext();
export function ProductProvider({ children }) {
    const products = [
        { id: 0, title: 'Bread', price: 19.99 },
        { id: 1, title: 'Milk', price: 29.99 },
        { id: 2, title: 'Cheese', price: 35.99 },
        { id: 3, title: 'Water', price: 15.99 },
    ]

    return (
        <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
    )
}

//Using a useEffect hook to an event listener while also performing cleanup

function ExampleUseEffect() {

    useEffect(() => {
        const timerId = setInterval(() => {
            console.log("Timer running");
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return <div> Example is showing</div>
}

// Using a REDUCER to create an attack on enemy with 100hp;

const initialState = { enemyHitPoints: 100 }

function reducer(state, action) {
    switch (action.type) {
        case 'attack':
            return { enemyHitPoints: state.enemyHitPoints - 1};
        default: 
            throw new Error();
    }
}

function App() {
    const products = useStore((state) => state.products);

 // Using a createContext/useContext for variuos supermarket products

 function ProductList() {
    const products = useContext(ProductContext);

    return (
        <div>
            <h3>createContext product list</h3>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.title} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    )
 }

 //creating a STATE below (useState) that toggles on and off by clicking a button
    const [isActive, setIsActive] = useState(false);
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const onButtonClick = () => {
        setIsActive(!isActive);
    };

    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root')
      );

  return <div className="App">
        <div className='useStates'>
            <button onClick={onButtonClick}>Activate/Deactivate</button>
            {isActive ? <ExampleUseEffect /> : <div>I am not active</div>}
        </div>
        <div className='reduce'>
            <div className='monster'>
                <h2>Monster</h2>
                <h3>{state.enemyHitPoints}</h3>
            </div>
            <div className='attack'>
                <button onClick={() => dispatch({ type: 'attack' })}>Attack</button>
            </div>
            <div className='useContext'>
                <ProductProvider>
                    <ProductList>

                    </ProductList>
                </ProductProvider>
            </div>
            <div className='Zustand Shopping Cart'>
                <h2>Zustand products</h2>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
                <div className='CartContainer'>
                    <Cart /> 
                </div>
            </div>
            <div className='Redux Shopping cart'>
                <anotherCart></anotherCart>
            </div>
        </div>
    </div>
}

export default App;
