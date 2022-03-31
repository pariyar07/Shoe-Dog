import React from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

export const Rating = ({rating, onClick, style}) => {
    return (
        <>
            {
                [...Array(5)].map((_, i) => (
                    <span key={i} onClick={() => onClick(i)} style={style}>
                        {rating > i ? (
                            <AiFillStar className="rating-stars"/>
                        ) : (
                            <AiOutlineStar className="rating-stars"/>
                        )}
                    </span>
                ))
            }
        </>
    )
}
