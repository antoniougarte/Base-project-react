import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function PrimaryLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default PrimaryLayout