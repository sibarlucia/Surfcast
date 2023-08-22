import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./producto.module.css";
import { createResponse } from "../../services/responses/createResponse";

const DEFAULT_DATA_FORM = {
    producto: '',
}

const RESPONSE_NAMES = {
    producto: 'producto/1/producto',
}

const Producto = ({ defaultResponse = null, campaignId }) => {

    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const navigate = useNavigate()

    useEffect(() => {
        if (defaultResponse) {
            const producto = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['producto'])?.answer || ''
            setDataForm({
                producto,
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
                campaign_id: campaignId
            })
        })
        navigate(`/campaign/${campaignId}/producto/2/`)
    } 

    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <div className={styles.etapa}>1/5</div>

                <div>
                    <h1>¡Promocionemos tu producto o servicio!</h1>
                    <p>Es hora de personalizar tu campaña</p>
                </div>

                <div>
                    <h2>¿Qué producto o servicio es?</h2>
                    <input

                        type="text"
                        placeholder="¿Qué necesidad satisface o qué problema soluciona?"
                        className={styles.input2}
                        value={dataForm.producto}
                        name='producto'
                        onChange={handleChangeSelectValue}
                    />
                </div>

                
                <button className={styles.botonSiguiente}>Siguiente</button>
                
                <Link className={styles.volver} to={`/campaign/${campaignId}/importacion/2/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaignId}/producto/2/`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Producto;
