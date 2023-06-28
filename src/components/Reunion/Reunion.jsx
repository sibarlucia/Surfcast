import React from "react";
import styles from "./reunion.module.css";
import { Link } from "react-router-dom";

const Reunion = () => {
  return (
    <div>
      <form>
        <div className={styles.etapa}>1/6</div>

        <div>
          <h1>¡Concretemos una reunión!</h1>
          <p>Es hora de personalizar tu campaña</p>
        </div>

        <div>
          <h2>¿Con qué tipo de cliente deseas reunirte?</h2>
          <select>
            <option>En qué rubro se encuentra</option>
            <option>Agricultura y pesca</option>
            <option>Minería y extracción</option>
            <option>Manufactura</option>
            <option>Electricidad, gas y aire acondicionado</option>
            <option>Construcción</option>
            <option>
              Comercio al por mayor y al por menor; reparación de vehículos
            </option>
            <option>Transporte y almacenamiento</option>
            <option>Alojamiento y servicios de comida</option>
            <option>Información y comunicación</option>
            <option>Actividades financieras y de seguros</option>
            <option>Bienes raíces</option>
            <option>Actividades profesionales, científicas y técnicas</option>
            <option>Administración y apoyo de oficina</option>
            <option>
              Administración pública y defensa; seguridad social obligatoria
            </option>
            <option>Educación</option>
            <option>Salud humana y servicios sociales</option>
            <option>Artes, entretenimiento y recreación</option>
            <option>Otros servicios</option>
            <option>
              Actividades de hogares individuales como empleadores; actividades
              de hogares individuales para el trabajo doméstico
            </option>
            <option>
              Actividades de organizaciones y organismos extraterritoriales.
            </option>
          </select>
          <select>
            <option>En qué país se desarrolla</option>
            <option>Opción 1</option>
            <option>Opción 2</option>
            <option>Opción 3</option>
          </select>
          <select>
            <option>Qué puesto tiene</option>
            <option>Ejecutivo</option>
            <option>Gerente</option>
            <option>Profesional</option>
            <option>Consultor</option>
            <option>Encargado de compras</option>
            <option>Otro (por favor especifica)</option>
          </select>
        </div>

        <Link to="/reunion/2">
          <button type="submit" className={styles.botonSiguiente}>
            Siguiente
          </button>
        </Link>

        <Link className={styles.volver} to="/importacion/2">
          <img src="/src/assets/volvernegro.png" />
        </Link>
        <Link className={styles.continuar} to="/reunion/2">
          <img src="/src/assets/crearcampañadespues.png" />
        </Link>
      </form>
    </div>
  );
};
export default Reunion;
