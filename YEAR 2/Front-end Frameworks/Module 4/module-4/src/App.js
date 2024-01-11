import logo from './logo.svg';
import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import Navbar from './nav';
import Home from './homePage';
import Product from './productPage';
import Contact from './contactPage';
import React, { useEffect, useState } from 'react';

const url = 'https://api.noroff.dev/api/v1/online-shop';

function App() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function getData() {
            try{
                setIsError(false);
                setIsLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setPosts(json);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }

        }
        getData();
    }, []);

    if (isLoading) {
        return <div>Loading Posts</div>
    }
  
    if (isError) {
        return <div>Error Loading Posts</div>
    }

    return (
        <div>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productPage" element={<Product />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <div>
                {posts.map((post) => (
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <p>{post.price}</p>
                        <p>{post.imageurl}</p>
                    </div>
                ))}
            </div>
        </div>
        
      );
}

export default App;
