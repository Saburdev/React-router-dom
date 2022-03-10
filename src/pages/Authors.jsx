import React from 'react'

export const Authors = () => {
    const authors = ["Javokhir","Olloyor","Sabur","Shahzod"]
  return (
    <div>
        <ul>
        {authors.map((author,index) => <li key={index}>{author}</li>)}
        </ul>
    </div>
  )
}
