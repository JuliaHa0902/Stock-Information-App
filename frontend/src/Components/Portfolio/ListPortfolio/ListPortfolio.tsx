import React, { SyntheticEvent } from 'react'
import CardPortfolio from '../CardPortfolio/CardPortfolio';
import { v4 as uuidv4 } from "uuid";

interface Props {
    portfolioValues: string[];
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

const ListPortfolio: React.FC<Props> = ({portfolioValues, onPortfolioDelete}: Props):JSX.Element => {
  return (
    <div>
        <h3>My Portfolio</h3>
        <ul>
            {portfolioValues && portfolioValues.map((portfolioValue) => {
                return <CardPortfolio key={uuidv4()} portfolioValue={portfolioValue} onPortfolioDelete={onPortfolioDelete}/>
            })}
        </ul>
    </div>
  )
}

export default ListPortfolio