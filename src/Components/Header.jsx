import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import nbaLogo from "../Assets/nba-logo.png"

const Header = () => {

  return (
    <Container>
        <Image src={nbaLogo} width={200}></Image>
        <h1 className='my-2 display-4 fw-bold font-monospace'>NBA Legends</h1>

    </Container>
  )
}
export default Header