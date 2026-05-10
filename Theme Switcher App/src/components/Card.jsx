import React from 'react'

function Card() {

    return (

        <div className="w-full bg-white border border-gray-200 rounded-lg shadow
        dark:bg-gray-800 dark:border-gray-700 duration-300">

            <a href="/">
                <img
                    className="p-8 rounded-t-lg"
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg"
                    alt="product"
                />
            </a>

            <div className="px-5 pb-5">

                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Apple Watch Series 7 GPS
                </h5>

                <div className="flex items-center justify-between mt-5">

                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        $599
                    </span>

                    <button className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5">
                        Add to cart
                    </button>

                </div>

            </div>

        </div>
    )
}

export default Card