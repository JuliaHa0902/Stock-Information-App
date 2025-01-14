import React, { SyntheticEvent } from 'react'

interface Props {
    onPorfolioCreate: (e: SyntheticEvent) => void;
    symbol: string;
}

const AddPortfolio = ({onPorfolioCreate, symbol}: Props) => {
  return (
    <form onSubmit={onPorfolioCreate}>
        <input readOnly={true} hidden={true} value={symbol} />
        <button type="submit">Add</button>
    </form>
  )
}

export default AddPortfolio