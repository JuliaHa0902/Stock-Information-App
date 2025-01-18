import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getCompanyProfile } from '../../api';
import { CompanyProfile } from '../../company';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tile/Tile';

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
        const result = await getCompanyProfile(ticker!);
        setCompany(result?.data[0]);
    }
    getProfileInit();
  }, []);
  return (
    <div>
        {company ? (
            <div>
                <Sidebar />
                <CompanyDashboard ticker={ticker!}>
                    <Tile title="Company Name" subTitle={company.companyName}/>
                </CompanyDashboard>
            </div>
        ) : (
            <div>Company not found!</div>
        )}
    </div>
  )
}

export default CompanyPage