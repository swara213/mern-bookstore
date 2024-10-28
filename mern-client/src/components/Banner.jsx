import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-[#F5E6CA] flex items-centre'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40' >
             <div className=' md:w-1/2 space-y-8 text-left'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Discover Hidden Gem</h2>
                <p>Uncover Unique Reads That Spark Curiosity and Inspire! ✩</p>
                <div>
                    <input type= "search" name="search" id="search" placeholder='Search Book' className='py-2 px-2 rounded-s-sm outline-non'></input>
                    <button className='bg-yellow-500 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
             </div>
             

             <div>
                <BannerCard></BannerCard>
            </div> 
        </div>
      
    </div>
  )
}
  
export default Banner