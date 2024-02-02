import React, { FC } from "react";

interface CardProps {
    _cardId: number
    image?: string
    cardTitle: string
    isOpen: boolean
    price: number
    publisher: string
    no_of_freelancers: number

};

const Card:FC<CardProps> = ({_cardId,cardTitle,image,isOpen,no_of_freelancers,price,publisher}) => {
    return<div className="p-2 outline outline-blue-500 outline-[1px] shadow-md rounded-md">
            {_cardId}
            {cardTitle}
            {image}
            {isOpen}
            {no_of_freelancers}
            {price}
            {publisher}
        </div>
};

export default Card;