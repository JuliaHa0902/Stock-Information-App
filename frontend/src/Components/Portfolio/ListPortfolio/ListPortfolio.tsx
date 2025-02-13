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
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
            {portfolioValues.length > 0 ? 
              (portfolioValues.map((portfolioValue) => {
                return <CardPortfolio key={uuidv4()} portfolioValue={portfolioValue} onPortfolioDelete={onPortfolioDelete}/>
                })
              ) : (
                <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
                  Your portfolio is empty.
                </h3>
              )}
        </div>
    </div>
  )
}

export default ListPortfolio