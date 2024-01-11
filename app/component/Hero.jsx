"use client"
import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { loadThunk } from '../redux/action/action'

const Hero = (props) => {
    const {data} = useSelector(state => state.products_data)
    console.log(data);
    useEffect(()=>{
        props.loadThunk()
    },[])
  return (
    <div>
        Console da chiqdi
    </div>
  )
}

export default connect(null, {loadThunk})(Hero)