"use client"
import { useState } from "react";
import { CiStar } from "react-icons/ci"
const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="flex">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            
            <CiStar
              key={i}
              className="m-0 p-0"
              size={25}
              color={ratingValue <= (hover || rating) ? "orange" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setRating(ratingValue)}
            />
          </label>
        );
      })}

    </div>
  );
};

export default StarRating;
