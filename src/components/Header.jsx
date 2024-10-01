import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'

const Header = () => {
  return (
    <div style={{position: 'absolute', top: '10%', zIndex: '10', margin: '0 auto', left: '10%'}}>
      <ResponsiveAppBar />
    </div>
  )
}

export default Header
