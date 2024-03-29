const Header = ({heading, paragraph}) => {
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-14 w-14"
                    src="https://ik.imagekit.io/qysd8alv5/icon.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676943689807"/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            </p>
        </div>
    )
}

export default Header;