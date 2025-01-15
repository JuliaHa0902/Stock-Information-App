import React, { SyntheticEvent } from 'react'

interface Props {
    onPorfolioCreate: (e: SyntheticEvent) => void;
    symbol: string;
}

const AddPortfolio = ({onPorfolioCreate, symbol}: Props) => {
  return (
    <form onSubmit={onPorfolioCreate} className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
        <input readOnly={true} hidden={true} value={symbol} />
        <button type="submit" className="p-2 px-8 text-white bg-darkBlue rounded-lg hover:opacity-70 focus:outline-none">Add</button>
    </form>
  )
}

export default AddPortfolio