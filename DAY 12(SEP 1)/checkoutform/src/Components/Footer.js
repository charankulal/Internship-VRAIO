import React from 'react'
import Li from './Li'

export default function Footer() {
    const data=["Privacy","Terms","Support"]
  return (
    
      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">&copy; 2017-2018 Company Name</p>
        <ul className="list-inline">
            {data.map((ele)=>{
                return(
                    <Li desc={ele}/>
                );
            })}
          
        </ul>
      </footer>
    
  )
}
