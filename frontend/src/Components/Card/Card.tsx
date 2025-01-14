import React, { SyntheticEvent } from 'react'
import "./Card.css";
import { CompanySearch } from '../../company';
import AddPortfolio from '../Portfolio/AddPortfolio/AddPortfolio';

interface Props {
    id: string;
    searchResult: CompanySearch;
    onPorfolioCreate: (e : SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({ id, searchResult, onPorfolioCreate }: Props): JSX.Element => {
  return (
    <div className="card">
        <img alt="company logo"/>
        <div className="details">
            <h2>{searchResult.name} ({searchResult.symbol})</h2>
            <p>{searchResult.currency}</p>
        </div>
        <p className="info">
            {searchResult.exchangeShortName} - {searchResult.stockExchange}
        </p>
        <AddPortfolio onPorfolioCreate={onPorfolioCreate} symbol={searchResult.symbol}/>
    </div>
  )
}

export default Card