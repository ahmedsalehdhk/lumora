import React from 'react'

const QuestCard = (data: any) => {
  return (
    <div key={data.title} className='border border-neutral-300 p-2'>
        <h1 className='capitalize font-bold'>{data.title}</h1>
        <p className='capitalize'>{data.complexity} complexity & repeating {data.repeat}</p>
    </div>
  )
}

export default QuestCard
