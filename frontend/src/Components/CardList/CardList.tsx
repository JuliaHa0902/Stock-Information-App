import React, { SyntheticEvent } from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company'
import { v4 as uuidv4 } from "uuid";

interface Props {
  searchResult: CompanySearch[];
  onPorfolioCreate: (e: SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({ searchResult, onPorfolioCreate }: Props): JSX.Element => {
  return (
    <div>
      {searchResult.length > 0 ? (
        searchResult.map((result) => {
          return <Card id={result.symbol} key={uuidv4()} searchResult={result} onPorfolioCreate={onPorfolioCreate}/>
        })
      ) : (
        <h1>No result</h1>
      )}
    </div>
  )
}

export default CardList