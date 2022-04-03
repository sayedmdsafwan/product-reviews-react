import React from "react";
import { AiFillStar } from "react-icons/ai";

const Review = (props) => {
    let { name, rating, description } = props.review;
    return (
        <div>
            <div className="p-12 m-3 rounded border-2">
                <p className="text-gray-600 tracking-wide">" {description} "</p>
                <span>
                    {rating}
                    <AiFillStar />
                </span>
                <p className="font-bold tracking-wider text-lg">- {name}</p>
            </div>
        </div>
    );
};

export default Review;
