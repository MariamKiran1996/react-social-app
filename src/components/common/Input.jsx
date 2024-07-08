import React from 'react'
import classes from './common.module.css'

export default function Input({props}) {
  return (
    <input type={props.type} placeholder={props.placeholder} />
  )
}
