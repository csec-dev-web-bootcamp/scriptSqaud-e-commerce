"use client"

import Link from 'next/link'
import CatagoryCard from '@app/client/components/admincomponent/catagorycard/catagoryCard'
import DataContext from '@app/client/components/admincomponent/globalcontext/DataContext'

import { useContext } from 'react'



export default function Catagory() {

  const { categoryData } = useContext(DataContext);

  const products=categoryData.map((catagory)=>{
    return(
      <CatagoryCard
        id={catagory.id}
        image={catagory.image}
        name={catagory.name}
        discription={catagory.description}
      />
    )
  })


  return (
    <div className='home'>
        <h2 className='name_header'>Edit Catagory</h2>
    <div className='products'>
      <div className='add_products'>
      <Link  href='/admin/catagory/addCatagory'>
          <div className='add'>+</div>
        </Link>
      </div>
      {products}
      
    </div>
    </div>
  
  )
}
