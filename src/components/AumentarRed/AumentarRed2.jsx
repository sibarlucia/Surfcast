import { useEffect, useState } from "react";
import styles from "./aumentarRed.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createResponse } from "../../services/responses/createResponse";

const personTypeOptions = [
    'Opción 1',
    'Opción 2',
    'Opción 3'
]

const DEFAULT_DATA_FORM = {
    personType: '',
}

const RESPONSE_NAMES = {
    personType: 'aumentaTuRed/2/personType',
}

const AumentarRed2 = ({ defaultResponse = null, campaingId }) => {
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const navigate = useNavigate()

    console.log({dataForm})

    useEffect(() => {
        if (defaultResponse) {
            const personType = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['personType'])?.answer || ''
            setDataForm({
                personType,
            })
        }
    }, [defaultResponse])

    const handleSubmit = (event) => {
        event.preventDefault()
        Object.keys(dataForm).forEach(inputName => {
            createResponse({
                question_name: RESPONSE_NAMES[inputName],
                type: 'string',
                answer: dataForm[inputName],
                campaign_id: campaingId
            })
        })
        navigate(`/campaign/${campaingId}/aumentarred/3/`)
    } 

    const handleChangeSelectValue = (event) => {
        const { value, name } = event.target 
        setDataForm({ ...dataForm, [name]: value })
    }

    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <div className={styles.etapa}>2/3</div>

                <div>
                    <h1>¡Hagamos crecer tu red!</h1>
                    <p>Es hora de personalizar tu campaña</p>
                </div>

                <div>
                    <h2>¿A qué tipo de personas te gustaría agregar?</h2>
                    <select
                        value={dataForm.personType}
                        name='personType'
                        onChange={handleChangeSelectValue}
                        required
                    >
                        <option value={''} hidden>
                          Elige un tema
                        </option>
                        {
                            personTypeOptions.map((item, index) => {
                                return (
                                    <option
                                        value={item}
                                        key={`personTypeOption-${index}`}
                                    >
                                        {item}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>

                {/* <Link to="/aumentarred/3"> */}
                <button type="submit" className={styles.botonSiguiente}>
                  Siguiente
                </button>
                {/* </Link> */}

                <Link className={styles.volver} to={`/campaign/${campaingId}/aumentarred/1`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaingId}/aumentarred/3`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default AumentarRed2;
