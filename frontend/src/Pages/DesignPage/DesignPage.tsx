import React from 'react'
import Table from '../../Components/Table/Table'
import RadioList from '../../Components/RadioList/RadioList'
import { testIncomeStatementData } from '../../Components/Table/testData'

type Props = {}

const tableConfig =  [{
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  }]

const DesignPage = (props: Props) => {
  return (
    <div>
        <h1>Design Page</h1>
        <h2>This is our design page. This is where we will house various deisng aspects of the app</h2>
        <RadioList data={testIncomeStatementData} config={tableConfig}/>
        <Table />
    </div>
  )
}

export default DesignPage