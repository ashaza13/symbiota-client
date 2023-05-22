import React, { useState } from "react";

const NavSearch = () => {
    const [query, setQuery] = useState("");

    return (
        <div className="max-w-lg mr-4">
            <input
                type="search"
                name="search-form"
                id="search-form"
                className="border-none rounded-lg bg-gray-100"
                placeholder="Search for a product..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

        </div>
    );
};

export default NavSearch;