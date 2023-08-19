import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const RatingStars = ({ rating }) => {
    const maxStars = 5;
    const filledStarsQuant = Math.floor(rating);
    const emptyStarsQuant = maxStars - filledStarsQuant;

    const filledStars = Array.from({ length: filledStarsQuant }, (_, i) => (
        <AiFillStar size={16} key={i} style={{ color: "#3483FA" }} />
    ));

    const emptyStars = Array.from({ length: emptyStarsQuant }, (_, i) => (
        <AiOutlineStar size={16} key={i} style={{ color: "#3483FA" }} />
    ));

    return (
        <div>
            {filledStars}
            {emptyStars}
        </div>
    );
};

export default RatingStars;
