const IMAGE_URL = "https://manage.earth911.com/media/"

const Card = ({ name, long_description, id, family_ids, image }) => {
    return (
        <>
            <div className="max-w-sm rounded col-span-1 flex flex-col overflow-hidden shadow-lg" key={id}>
                <img className="object-contain h-48 w-96" src={IMAGE_URL + image} alt={name} onerror="this.onerror=null; this.src='../static/fallback.jpg'" />
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