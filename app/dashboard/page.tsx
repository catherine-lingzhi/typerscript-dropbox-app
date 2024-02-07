import { auth } from '@clerk/nextjs';
import React from 'react'

function Dashboard() {
  const {userId} = auth();
  return (
    <div>Dashboard( user is {userId} )</div>
  )
}

export default Dashboard