import React from "react";
// import ReviewYellow from "../customicons/ReviewYellow";
// import ReviewGray from "../customicons/ReviewGray";

const ReviewCard = ({ name, starSrc, statement }) => {
  return (
    <div className='review'>
      <div className='review__body'>
        <div className='review__person'>
          <p className='review__name'>{name}</p>
        </div>

        <div className='review__rating'>
          <div className='review__star'>
            {/* <ReviewYellow />
            <ReviewYellow />
            <ReviewYellow />
            <ReviewYellow />
            <ReviewGray /> */}
            {starSrc}, {starSrc}, {starSrc}, {starSrc}, {starSrc}
          </div>
        </div>
      </div>

      <div className='review__message'>
        <p className='review__statement'>{statement}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
