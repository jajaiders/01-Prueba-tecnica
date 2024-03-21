import React, { useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  // Variables de estado
  const companiesInfo = JSON.parse(localStorage.getItem("companiesInfo")) || [];
  const [registro, setRegistro] = useState(companiesInfo);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    nit: "",
    tel: "",
    email: "",
  });

  // Obtener los datos del formulario
  const getData = (event) => {
    event.preventDefault();

    const updatedData = {
      name: formData.name,
      address: formData.address,
      nit: formData.nit,
      tel: formData.tel,
      email: formData.email,
    };

    setRegistro([...registro, updatedData]);
    setFormData({
      name: "",
      address: "",
      nit: "",
      tel: "",
      email: "",
    });
  };

  // Verificar que solo se puedan ingresar caracteres numericos
  const valueError = (e) => {
    const { id, value } = e.target;

    if (id === "nit" && !/^\d+$/.test(value)) {
      setError("El NIT debe contener solo números.");
    } else if (id === "tel" && !/^\d+$/.test(value)) {
      setError("El teléfono debe contener solo números.");
    } else {
      setError("");
      setFormData({ ...formData, [id]: value });
    }
  };

  // Guardar informacion en el localStorage
  const savedInfo = (info) => {
    const infoString = JSON.stringify(info);
    localStorage.setItem("companiesInfo", infoString);
  };

  useEffect(() => {
    savedInfo(registro);
  }, [registro]);

  // Eliminar la informacion registrada
  const deleteInfo = (id) => {
    const temporalInfo = registro;
    temporalInfo.splice(id, 1);
    setRegistro([...temporalInfo]);
  };

  // Editar la informacion registrada
  const editInfo = (id) => {
    const Edit = registro[id];
    setFormData(Edit);

    const tempRegistro = [...registro];
    tempRegistro.splice(id, 1);
    setRegistro(tempRegistro);
  };

  return (
    <>
      {/* Formulario de registro para la empresa */}
      <div className="content">
        <div className="content-form">
          <h1>Registra tu empresa</h1>
          <form onSubmit={getData}>
            <label htmlFor="name">Nombre de la empresa</label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={valueError}
            />
            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              id="address"
              required
              value={formData.address}
              onChange={valueError}
            />
            <label htmlFor="nit">NIT</label>
            <input
              type="text"
              id="nit"
              required
              value={formData.nit}
              onChange={valueError}
            />
            <label htmlFor="tel">Teléfono</label>
            <input
              type="text"
              id="tel"
              required
              value={formData.tel}
              onChange={valueError}
            />
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={valueError}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Enviar</button>
          </form>
        </div>
        {/* Fin del formulario de registro */}

        {/* Visualisacion de las empresas registradas */}
        <div className="content-registro">
          <h2>Empresas registradas</h2>
          <div className="show-companies">
            <ul>
              {registro.map((item, x) => (
                <div className="targetInfo">
                  <li key={x} id={x}>
                    <div>nombre: {item.name}</div>
                    <div>Direccion: {item.address}</div>
                    <div>NIT: {item.nit}</div>
                    <div>Telefono: {item.tel}</div>
                    <div>Correo: {item.email}</div>
                    <button onClick={() => deleteInfo(x)}>Eliminar</button>
                    <button onClick={() => editInfo(x)}>Editar</button>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Fin de la visualisacion de la empresas */}
    </>
  );
};

export default App;
