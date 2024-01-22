import { useState } from "react";

import Formulario from "../Formulario/Formulario";
import SocialButton from "../SocialButton/SocialButton";
import Alert from "../Alert/Alert";

const Registro = () => {
  const [alert, setAlert] = useState({ error: "", msg: "", color: "" });
  return (
    <>
        <h1 className="fs-1">Crea una cuenta</h1>
        <div className="d-flex gap-3 justify-content-center my-3">
          <SocialButton icon="./src/assets/facebook.png" />
          <SocialButton icon="./src/assets/github.png" />
          <SocialButton icon="./src/assets/linkedin.png" />
        </div>
        <h5>O usa tu email para registrarte</h5>
        <Formulario className = "formulario" setAlert={setAlert}/>
        {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
    </>
  );
};

export default Registro;
