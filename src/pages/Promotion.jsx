import React from 'react'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseURL'

export default function Promotion() {
    const {data: promotions} = useFetch(BASE_URL + "/promotion");
    const language = localStorage.getItem("lan");
    // console.log(promotions);
    
  return (
    <div className='container'>
        <h4 className="text-center mb-3">{language == "english" ? "Promotion" : "ပရိုမိုးရှင်း"}</h4>
        {promotions && promotions.map((promo, index) => (
            <div className="mb-3" key={index}>
                <img src={promo.img_url} width={"100%"} alt="" />
            </div>
        ))}
    </div>
  )
}
