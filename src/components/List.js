import React from 'react'
import '../App.css'
import Image from './cross.png'

function List({setData,data}) {
    const handler = (item) => {
            let arr = []
            data.map((item1)=>{
                console.log(item1, item)
                if(item == item1){
                    // arr.push(item1)
                }else {
                    arr.push(item1)
                }
            })
setData(arr)
        data.remove(item)
    }
  return (
    <div className='container'>
        <div className='formHeading'>List component</div>
    <div className='form' id="form" >
    <ul>
        {data?.map((item, index)=>{
            return(
                <li>{item}  <img className='image' src={Image} onClick={()=>handler(item)}/></li>
            )
        })}
        </ul>
    </div>
    </div>
  )
}

export default List