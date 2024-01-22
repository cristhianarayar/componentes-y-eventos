import { useState } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Style.css'

const Formulario = ({setAlert}) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validarDatos = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setAlert({
        error: true,
        msg: "Las contraseñas no coinciden !",
        color: "danger",
      });
    return
    }
    
    if(nombre === '' || email === '' || password === '' || confirmPassword === '') {
        setAlert({
            error: true,
            msg: "Completa todos los campos !",
            color: "danger",
          });
        return
    }
    
    setAlert({ error: false, msg: "Cuenta creada exitosamente !", color: "success" });
    setNombre('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }
  return (
    <>
      <Form className='form-login' onSubmit={validarDatos}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Control type="email" placeholder="tuemail@ejemplo.com" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Confirma tu contraseña" onChange={(e) => setConfirmPassword(e.target.value)}/>
          </Form.Group>

          <Button className='btn-registrar' variant="success" type="submit">
            Registrarse
          </Button>
    </Form>
    </>
  );
};

export default Formulario;
