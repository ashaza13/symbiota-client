import React, { useState } from "react";

const NavSearch = () => {
    const [query, setQuery] = useState("");

    return (
        <div className="mr-16">
            <input
                type="search"
                name="search-form"
                id="search-form"
                className="w-full border-none rounded-lg bg-gray-100"
                placeholder="Search for a product..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

        </div>
    );
};

export default NavSearch;