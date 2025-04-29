import React from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Profile from './components/Profile'
import Introduction from './components/Introduction'

const App = () => {
  return (
    <>
      <Header />
      <SideBar />
      <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2'>
          <Introduction />
        </div>
        <div className='hidden md:block'>
          <Profile />
        </div>
      </div>
    </>
  )
}

export default App