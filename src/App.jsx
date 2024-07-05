
import { useState } from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container,Row,Col,Card} from 'react-bootstrap'

function App() {
  const [students,setStudents]=useState([])
  const [name,setName]=useState('')
  const [age,setAge]=useState('')
  
const handleSubmit=(event)=>{
event.preventDefault()
  setStudents([...students,{name,age}])
  setName('')
  setAge('') 
}
const handleDelete=(index)=>{
  const newStudents=[...students]
  newStudents.splice(index,1)
  setStudents(newStudents)
}


  return (
    <Container>

    <Row>

  
    <Form onSubmit={handleSubmit}>
     
        <Form.Group className="mb-3">
          <Form.Label > Nombre Estudiante</Form.Label>
          <Form.Control  placeholder="Ingrese Nombre" value={name} onChange={(e)=>setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label > Edad Estudiante</Form.Label>
          <Form.Control  placeholder="Ingrese Edad" value={age} onChange={(e)=>setAge(e.target.value)} />
        </Form.Group>
        
       
       
        <Button type="submit">Agregar estudiante</Button>
    
    </Form>
    </Row>

      <Row>
        {
          students.map((student,index)=>(
           <Col>
           <Card style={{ width: '18rem' }}>
              
            <Card.Body>
              <Card.Title>Datos Estudiante</Card.Title>
               <Card.Text>Nombre:{student.name} </Card.Text>
               <Card.Text>Edad:{student.age} </Card.Text>
              <Button variant="danger" onClick={()=>handleDelete(index)}>Eliminar</Button>
            </Card.Body>
          </Card>
           </Col>

          ))
        }
      
      </Row>
    </Container>
  )
}

export default App
