import React, { useState, useEffect } from 'react';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const apiKey = process.env.REACT_APP_API_KEY;

const SearchScreen = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(null);

    const [q, setQ] = useState("");

    useEffect(() => {
        fetch("https://api.earth911.com/earth911.getMaterials?api_key=" + apiKey)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    function search(items) {
        return items.filter((item) => {
            if (q === "") {
                return item;
            } else if (item.description.toLowerCase().includes(q.toLowerCase())) {
                return item;
            }
        })
    };
    if (error) {
        return (
            <>
                <Error text="Symbiota Search" msg={error.message} />
            </>
        )
    } else if (!isLoaded) {
        return (
            <>
                <Loading text="Symbiota" />
            </>
        )
    }
    else {

        return (
            <>
                <div className="container mx-auto">
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className={inputStyle}
                        placeholder="Search for a product..."
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
                    <div className="items">

                        <ul className="grid grid-cols-1 gap-4 md:grid-cols-4">
                            {search(items).map((item, i) => (
                                <li key={i} className="mt-auto component py-4 col-span-1">
                                    <Link to={`/details/${item.material_id}`}>
                                        <Card id={item.material_id} name={item.description} long_description={item.long_description} family_ids={item.family_ids} image={item.image} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
};

export default SearchScreen;

const inputStyle = "rounded-md appearance-none relative block w-full px-3 my-5 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"