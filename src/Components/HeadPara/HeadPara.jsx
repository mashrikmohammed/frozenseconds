import React from 'react'
import './HeadPara.scss'

export default function HeadPara({head,para,margin}) {
  return (
    <div className={margin ? "headPara_wrapper headparaMargin": "headPara_wrapper"}>
          <h1>{head}</h1>
          <p>{para}</p>
        </div>
  )
}