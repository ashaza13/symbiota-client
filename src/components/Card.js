const Card = ({ name, long_description, id, family_ids }) => {
    return (
        <>
            <div className="max-w-sm rounded col-span-1 flex flex-col overflow-hidden shadow-lg py-4" key={id}>
                <img className="w-full" src={name} alt={name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">
                        {long_description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    { family_ids != null &&
                        family_ids.map((family_id, i) => (
                            <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{family_id}</span>
                        ))
                }
                </div>
            </div>
        </>
    )
}

export default Card;