import React,{useState,useEffect}from 'react'
import { useParams,Link } from 'react-router-dom'
import {
    Card,
    Row,
    Col,
    Breadcrumb
} from "react-bootstrap"
import axios from "axios"

//https://jsonplaceholder.typicode.com/albums/${id}/photos
const api = async (id) =>{
    return await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)   
}






function Album() {
  const {id} = useParams()

  const [data, setData] = useState([])

  useEffect(() => {
    api(id).then((res) => {
        console.log(res.data,id)
      setData(res.data)
    })
  }, [id])

  return (
    <div className='my-5'>
      <h1 className='my-3'>Shop Now</h1>
      <Breadcrumb>
        <Breadcrumb.Item >
          <Link to={'/'}>Home</Link>
        </Breadcrumb.Item>
      <Breadcrumb.Item active> Album {id}</Breadcrumb.Item>
    </Breadcrumb>
      <Row xs={1} md={2} className="g-4">
        {data.map((item,index) =>(
          <Col key={index}> 
            <Card>
              <Card.Img variant="top" src={item.url} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>  
        ))} 
      </Row>
  </div>
  )
}

export default Album
