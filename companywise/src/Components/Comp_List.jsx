import React, { useState, useEffect } from 'react'
import '../Style/index.css'
import data from '../companylist.json'
import { useDispatch } from 'react-redux/es/exports'
import Questions from './Comp_qns'
import { Link } from "react-router-dom";
import CompanyCard from './CompanyCard'

const List = () => {

  const [companies, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data)
  }, []);


  return (
    <div className='companies'>

      <div className='qn_heading'  > 
        Company-Wise Questions List
      </div>



      <div className='qn_section'>
        {companies.map((company) => (



          
          // <div key={company.id} className='cList'>

            <CompanyCard name={company.title} question={company.question} data ={company} />

          // </div>
      
        ))}

      </div>


    </div>
  )

}

export default List
