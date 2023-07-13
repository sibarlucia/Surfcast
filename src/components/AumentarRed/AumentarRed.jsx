import { useEffect, useState } from "react";
import styles from "./aumentarRed.module.css";
import { Link, useNavigate } from "react-router-dom";
import { getListOfCountries } from "../../utils/getListOfCountries";
import { createResponse } from "../../services/responses/createResponse";

const rubroOptions = [
    'Agricultura y pesca',
    'Minería y extracción',
    'Manufactura',
    'Electricidad, gas y aire acondicionado',
    'Construcción',
    'Comercio al por mayor y al por menor; reparación de vehículos',
    'Transporte y almacenamiento',
    'Alojamiento y servicios de comida',
    'Información y comunicación',
    'Actividades financieras y de seguros',
    'Bienes raíces',
    'Actividades profesionales, científicas y técnicas',
    'Administración y apoyo de oficina',
    'Administración pública y defensa; seguridad social obligatoria',
    'Educación',
    'Salud humana y servicios sociales',
    'Artes, entretenimiento y recreación',
    'Otros servicios',
    'Actividades de hogares individuales como empleadores',
    'actividades de hogares individuales para el trabajo doméstico',
    'Actividades de organizaciones y organismos extraterritoriales.',
]

const positionOptions = [
    'Ejecutivo',
    'Gerente',
    'Profesional',
    'Consultor',
    'Encargado de compras',
    'Otro (por favor especifica)',
]

const DEFAULT_DATA_FORM = {
    rubro: '',
    country: '',
    position: '',
    extraPosition: ''
}

const RESPONSE_NAMES = {
    rubro: 'aumentaTuRed/1/rubro',
    country: 'aumentaTuRed/1/country',
    position: 'aumentaTuRed/1/position',
    extraPosition: 'aumentaTuRed/1/extraPosition'
}

const AumentarRed = ({ defaultResponse = null, campaingId }) => {
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const navigate = useNavigate()

    useEffect(() => {
        if (defaultResponse) {
            let rubro = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['rubro'])?.answer || ''
            const country = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['country'])?.answer || ''
            const position = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['position'])?.answer || ''
            const extraPosition = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['extraPosition'])?.answer || ''
            setDataForm({
                rubro,
                country,
                position,
                extraPosition
            })
        }
    }, [defaultResponse])


    const handleChangeSelectValue = (event) => {
        const { value, name } = event.target 
        setDataForm({ ...dataForm, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({dataForm})
        Object.keys(dataForm).forEach(inputName => {
            createResponse({
                question_name: RESPONSE_NAMES[inputName],
                type: 'string',
                answer: dataForm[inputName],
                campaign_id: campaingId
            })
        })
        navigate(`/campaign/${campaingId}/aumentarred/2/`)
    } 

    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <div className={styles.etapa}>1/3</div>

                <div>
                    <h1>¡Hagamos crecer tu red!</h1>
                    <p>Es hora de personalizar tu campaña</p>
                </div>

                <div>
                    <h2>¿A qué tipo de personas te gustaría agregar?</h2>
                    <select
                        value={dataForm.rubro}
                        name='rubro'
                        onChange={handleChangeSelectValue}
                        required
                    >
                        <option value={''} hidden>
                          En qué rubro se encuentra
                        </option>
                        {
                            rubroOptions.map((item, index) => {
                                return (
                                    <option
                                        value={item}
                                        key={`rubroOption-${index}`}
                                    >
                                        {item}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <select
                        value={dataForm.country}
                        name='country'
                        onChange={handleChangeSelectValue}
                        required
                    >
                        <option value={''} hidden>
                          En qué país se desarrolla
                        </option>
                        {
                            getListOfCountries().map((item, index) => {
                                return (
                                    <option
                                        value={item}
                                        key={`countryOption-${index}`}
                                    >
                                        {item}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <select
                        value={dataForm.position}
                        name='position'
                        onChange={handleChangeSelectValue}
                        required
                    >
                        <option
                            value={''} hidden
                        >
                          Qué puesto tiene
                        </option>
                        {
                            positionOptions.map((item, index) => {
                                return (
                                    <option
                                        value={item}
                                        key={`positionOption-${index}`}
                                    >
                                        {item}
                                    </option>
                                )
                            })
                        }
                    </select>
                    {
                        dataForm.position === 'Otro (por favor especifica)' && (
                            <input
                                required
                                value={dataForm.extraPosition}
                                name="extraPosition"
                                onChange={handleChangeSelectValue}
                                placeholder="Especifica tu puesto"
                                type="text"
                            />
                        )
                    }
                    
                </div>

                {/* <Link to="/aumentarred/2"> */}
                <button
                    type="submit"
                    className={styles.botonSiguiente}
                >
                  Siguiente
                </button>
                {/* </Link> */}

                <Link className={styles.volver} to={`/campaign/${campaingId}/importacion/2`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaingId}/aumentarred/2`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default AumentarRed;
