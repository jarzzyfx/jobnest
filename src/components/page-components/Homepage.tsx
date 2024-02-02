"use client"

import React, { FC } from "react";
import Card from "../ui-components/Card";

interface HomepageProps {};

const Homepage:FC<HomepageProps> = (props) => {
    return <div className="w-full p-8 flex gap-8 flex-wrap">
        <Card _cardId={1} cardTitle="Game Developer" isOpen={true} no_of_freelancers={2} price={345} publisher="miracle mark" image="" key={1} />
        <Card _cardId={2} cardTitle="Game Developer" isOpen={true} no_of_freelancers={2} price={345} publisher="miracle mark" image="" key={2} />
        <Card _cardId={3} cardTitle="Game Developer" isOpen={true} no_of_freelancers={2} price={345} publisher="miracle mark" image="" key={3} />
        <Card _cardId={4} cardTitle="Game Developer" isOpen={true} no_of_freelancers={2} price={345} publisher="miracle mark" image="" key={4} />
        <Card _cardId={5} cardTitle="Game Developer" isOpen={true} no_of_freelancers={2} price={345} publisher="miracle mark" image="" key={5} />
        <Card _cardId={6} cardTitle="Game Developer" isOpen={true} no_of_freelancers={2} price={345} publisher="miracle mark" image="" key={6} />
        <Card _cardId={7} cardTitle="Game Developer" isOpen={true} no_of_freelancers={2} price={345} publisher="miracle mark" image="" key={7} />
        <Card _cardId={8} cardTitle="Game Developer" isOpen={true} no_of_freelancers={2} price={345} publisher="miracle mark" image="" key={8} />
        <Card _cardId={9} cardTitle="Game Developer" isOpen={true} no_of_freelancers={2} price={345} publisher="miracle mark" image="" key={9} />
        <Card _cardId={10} cardTitle="Game Developer" isOpen={true} no_of_freelancers={2} price={345} publisher="miracle mark" image="" key={10} />
        <Card _cardId={11} cardTitle="Game Developer" isOpen={true} no_of_freelancers={2} price={345} publisher="miracle mark" image="" key={11} />
        <Card _cardId={12} cardTitle="Game Developer" isOpen={true} no_of_freelancers={2} price={345} publisher="miracle mark" image="" key={12} />
       
    </div>
};

export default Homepage;