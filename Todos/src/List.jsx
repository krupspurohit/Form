import React from 'react'

export const List = (props) => {

const data = props;
console.log(data)
  return (
    <div className='text-center font-bold m-auto'>
        <div>This is Props</div>
    <div>{props.data?.map(item => (
        <div>
        <div key={item.name2.id}>Name : {item.name1.name}</div>
        <div> Type :
            {item.name2.type}
        </div>
        <div>Address: {item.name1.adress}</div>
        </div>
    ))}</div>
    </div>
  )
}
