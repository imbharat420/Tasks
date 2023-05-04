import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {Link} from "react-router-dom"
function Home() {
  return (
    <div>
      <h1>Home</h1>
        <ButtonGroup aria-label="Basic example">
          <Button as={Link} to="/store" variant="secondary">Store</Button>
          <Button as={Link} to="/album/8" variant="secondary">Album 8</Button>
          <Button as={Link} to="/gift" variant="secondary">Gift</Button>
        </ButtonGroup>
    </div>
  )
}

export default  Home
