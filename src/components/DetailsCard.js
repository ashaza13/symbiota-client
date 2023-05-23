import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RiRecycleFill } from "react-icons/ri";
import { motion } from "framer-motion";

const IMAGE_URL = "https://manage.earth911.com/media/"


const DetailsCard = ({ item }) => {
    return (
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 0.5, type: "spring" }}
            >
                <div className="details-card absolute top-8 py-4 px-4 rounded drop-shadow-lg left-3 bg-white max-w-sm z-10 ">
                    <Link to="/search">
                        <div className="inline-block bg-green-600 rounded text-white font-bold px-3 py-1 mb-4 drop-shadow-md transition hover:drop-shadow-lg hover:scale-110">
                            <button className="flex">
                                <AiOutlineArrowLeft className="translate-y-1 -translate-x-1" />
                                Back
                            </button>
                        </div>
                    </Link>

                    <div className="content divide-y">
                        <div className="material-name pb-2">
                            <h1 className="font-bold text-lg">{item.description}</h1>
                        </div>
                        <div className="material-description py-2">
                            <img className="mx-auto rounded my-1 drop-shadow-md w-1/2" src={IMAGE_URL + item.image} alt={item.description} />
                            <p className="text-sm">{item.long_description}</p>
                        </div>
                        <div className="material-facilities py-2">
                            <h2 className="font-bold">There are {item.locations.length} facilities near you that can recycle this material.</h2>
                        </div>
                        <div className="pt-4 pb-2">
                            {item.family_ids != null &&
                                item.family_ids.map((family_id, i) => (
                                    <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{family_id}</span>
                                ))
                            }
                        </div>
                    </div>
                    <div className="float-right inline-block rounded bg-green-600 drop-shadow-md py-0.5 px-3 mr-2 transition hover:drop-shadow-lg hover:scale-110">
                        <button><RiRecycleFill className="translate-y-0.5 scale-125 text-white" /></button>
                    </div>
                </div>
            </motion.div>
    );
};

export default DetailsCard;