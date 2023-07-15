import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./producto.module.css";
import { createResponse } from "../../services/responses/createResponse";


const incentivosOptions = [
    'Descuentos',
    'Regalos con la compra',
    'Cupones',
    'Programas de lealtad',
    'Ninguno',
    'Otro (por favor especifica)'
]

const DEFAULT_DATA_FORM = {
    incentivo1: '',
    incentivo2: '',
  
}

const RESPONSE_NAMES = {
    incentivo1: 'producto/4/incentivo1',
    incentivo2: 'producto/4/incentivo2',

}
const Producto4 = ({ defaultResponse = null, campaignId }) => {

    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const [extraIncentivo, setExtraIncentivo] = useState(false)
    const [escondido, setEscondido] = useState(false)
    const navigate = useNavigate()

    console.log(dataForm);

    const handleExtraIncentivo = () => {
        setExtraIncentivo(true)
        setEscondido(true)
    }

    useEffect(() => {
        if (defaultResponse) {
            const incentivo1 = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['incentivo1'])?.answer || ''
            const incentivo2 = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['incentivo2'])?.answer || ''
            
            setDataForm({
                incentivo1,
                incentivo2
                
            })
        }
    }, [defaultResponse])

    const handleChangeSelectValue = (event) => {
        const { value, name } = event.target 
        setDataForm({ ...dataForm, [name]: value })
    }

    // const handleCambioOpcion = (event) => {
    //     setOpcion(event.target.value);
    // };
    // console.log(opcion);

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
        navigate(`/campaign/${campaignId}/producto/5/`)
    } 

    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <div className={styles.etapa}>4/5</div>

                <div>
                    <h1>¡Promocionemos tu producto o servicio!</h1>
                    <p>Es hora de personalizar tu campaña</p>
                </div>

                <div>
                    <h2>
            ¿Qué incentivo/s te gustaría usar para que compren tu producto o
            servicio?
                    </h2>

                    <select value={dataForm.incentivo1}
                        name='incentivo1'
                        onChange={handleChangeSelectValue}
                        required>

                        <option value={''} hidden>
                          Elige un incentivo
                        </option>
                        {
                            incentivosOptions.map((item, index) => {
                                return (
                                    <option
                                        value={item}
                                        key={`incentivosOptions-${index}`}
                                    >
                                        {item}
                                    </option>
                                )
                            })
                        }
                    </select>
                        
                    <button type="button" onClick={handleExtraIncentivo} className={styles.agregar} hidden={escondido}><img src="/src/assets/iconPlus.png"/></button>
                    {extraIncentivo == true && (  
                        
                        <select value={dataForm.incentivo2}
                            name='incentivo2'
                            onChange={handleChangeSelectValue}
                            required>

                            <option value={''} hidden>
                          Elige un incentivo
                            </option>
                            {
                                incentivosOptions.map((item, index) => {
                                    return (
                                        <option
                                            value={item}
                                            key={`incentivosOptions-${index}`}
                                        >
                                            {item}
                                        </option>
                                    )
                                })
                            }
                        </select> 
                    )}
                    
                </div>  

                <button className={styles.botonSiguiente}>Siguiente</button>

                <Link className={styles.volver} to={`/campaign/${campaignId}/producto/3`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaignId}/producto/5`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Producto4;
