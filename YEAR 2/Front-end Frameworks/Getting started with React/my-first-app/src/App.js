import { useState } from 'react';
import './App.css';
import './styles.css'
import styles from './App.module.css'


// Props 
function Product(props) {
    return <li> {props.title} - {props.price}</li>;
}

function Products(props) {
    return <div>{props.productTitle}</div>;
}

// Components
function Greeting() {
    return <p>Hi Ola Nordmann!</p>
}



function App() {

    // State
    const [firstName, setFirstName] = useState('Ole');
    const [counter, setCounter] = useState(0);
    const [productTitle, setProductTitle] = useState("Milk");

    function buttonClick() {
        setCounter(counter + 1);
    }

    // Events
    function onButtonClick() {
        console.log("I got Clicked!")
    }

    function onButtonClickTwo() {
            setProductTitle("Cheese");
    
    }

//Mapping out lists
const storeItems = [
    { id: 0, title: 'Bread', price: 19.99 },
    { id: 1, title: 'Milk', price: 29.99 },
    { id: 2, title: 'Cheese', price: 35.99 },
    { id: 3, title: 'Water', price: 15.99 },
];

const saleProducts = [
    { id: 0, title: 'Bread', price: 19.99, isOnSale: true },
    { id: 1, title: 'Milk', price: 29.99, isOnSale: false },
    { id: 2, title: 'Cheese', price: 35.99, isOnSale: false },
    { id: 3, title: 'Water', price: 15.99, isOnSale: true },
  ];


  return <div  className={styles.container}>
            <h1 className="text">Product Cart</h1>
            <ul className='ul-styles'>
                <Product title="Cheese" price="35.99" />
                <Product title="Bread" price="15.99" />
                <Product title="Milk" price="29.99" />
                <Greeting />
                <Products productTitle={productTitle}/>
                {storeItems.map((item) => (
                    <li key={item.id}>{item.title} - {item.price}</li>
                ))}
                {saleProducts.map((item) => (
                    <li key={item.id}>{item.title} - {item.price}{item.isOnSale ? " ON SALE" : " not on sale"}</li>
                ))}
            </ul>
            <div>
                <button onClick={onButtonClickTwo}>Change milk to Cheese</button>
                <button onClick={onButtonClick}>Click me!</button>
                <div>
                    <h2>Counter: {counter}</h2>
                    <button onClick={buttonClick}>Add 1</button>  
                </div>
            </div>
            <div>
                {firstName}
            </div>
        </div>;
}

export default App;
