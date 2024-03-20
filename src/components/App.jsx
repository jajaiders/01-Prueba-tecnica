import React from "react";
import "../styles/App.css"

const App = () => {
  return (
    <>
      {/* Formulario de registro para la empresa */}
      <div className="content-form">
        <h1>Registra tu empresa</h1>
        <form>
          <label htmlFor="nombre">Nombre de la empresa</label>
          <input type="text" id="nombre" />
          <label htmlFor="Direccion">Direccion</label>
          <input type="text" id="direccion" />
          <label htmlFor="nit">NIT</label>
          <input type="text" id="nit" />
          <label htmlFor="tel">Telefono</label>
          <input type="text" id="tel" />
          <label htmlFor="correo">Correo electronico</label>
          <input type="text" id="correo" />
        </form>
      </div>
      {/* Fin del formulario de registro */}

      {/* Visualisacion de las empresas registradas */}
      <div>
        <h2>Empresas registradas</h2>
      </div>

      {/* Fin de la visualisacion de la empresas */}
    </>
  );
};

export default App;
