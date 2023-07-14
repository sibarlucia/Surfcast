import { useState, useEffect } from "react";
import styles from "./newsletter.module.css";
import { Link, useNavigate } from "react-router-dom";
import { createResponse } from "../../services/responses/createResponse";


const benefitslist = [
    'Información exclusiva', 'Consejos', 'Trucos y tips', 'Promociones exclusivas'
]

const DEFAULT_DATA_FORM = {
    benefits: [],
    benefitsOthers: ''
}

const RESPONSE_NAMES = {
    benefits: 'newsletter/3/benefits',
    benefitsOthers: 'newsletter/3/benefitsOthers'
}

const Newsletter3 = ({defaultResponse = null, campaignId}) => {
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const [otroButton, setOtroButton] = useState(false)
    const navigate = useNavigate()
    const gris = styles.opcion;
    const violeta = styles.opcionVioleta;

    console.log(dataForm)

    useEffect(() => {
        if (defaultResponse) {
            const benefits = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['benefits'])?.answer || []
            const benefitsOthers = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['benefitsOthers'])?.answer || ''
            setDataForm({
                benefits,
                benefitsOthers
            })
            if (benefitsOthers) {
                setOtroButton(true)
            }
        }
    }, [defaultResponse])

 

    const handleButtonOtro = () => {
        setOtroButton(!otroButton);
    };


    const handleChangeOthers = (event) => {
        const { name, value } = event.target
        setDataForm({ ...dataForm, [name]: value })
    }

    const handleSelectButton = (selected) => () => {
        let updatedBenefits = [ ...dataForm.benefits ]
        if (dataForm.benefits.includes(selected)) {
            updatedBenefits = updatedBenefits.filter(item => item !== selected)
            setDataForm({ ...dataForm, benefits: updatedBenefits })
        } else {
            updatedBenefits.push(selected)
            setDataForm({ ...dataForm, benefits: updatedBenefits })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        Object.keys(dataForm).forEach(inputName => {
            let type = 'string'
            if (inputName === 'benefits') {
                type = 'Lista'
            }
            const answer = dataForm[inputName]
            createResponse({
                question_name: RESPONSE_NAMES[inputName],
                type,
                answer,
                campaign_id: campaignId
            })
        })
        navigate(`/campaign/${campaignId}/newsletter/4/`)
    }  

    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>
                <div className={styles.etapa}>3/5</div>

                <div>
                    <h1>¡Aumentemos tus suscripciones</h1>
                    <p>Es hora de personalizar tu campaña</p>
                </div>

                <div>
                    <h2>¿Qué beneficio se ofrecerá para los suscriptores?</h2>
                    <div className={styles.botonera}>
                        {
                            benefitslist.map((item, index) => {
                                return (
                                    <button
                                        type='button'
                                        key={`button-option-${index}`}
                                        className={dataForm.benefits.includes(item) ? violeta : gris}
                                        onClick={handleSelectButton(item)}
                                    >
                                        {item}
                                    </button>
                                )
                            })
                        }
                    </div>

                    <div className={styles.botonera}>
                        <button
                            type="button"
                            className={otroButton ? violeta : gris}
                            onClick={handleButtonOtro}
                        >
                            Otro
                        </button>

                        {otroButton == true && (
                            <input
                                onChange={handleChangeOthers}
                                name="benefitsOthers"
                                type="text"
                                placeholder="Escribe aquí"
                                className={styles.input2}
                                value={FormData.benefitsOthers}
                            ></input>
                        )}
                    </div>
                </div>

                {/* <Link to="/newsletter/4"> */}
                <button className={styles.botonSiguiente}>Siguiente</button>
                {/* </Link> */}

                <Link className={styles.volver} to={`/campaign/${campaignId}/newsletter/2/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link> 
                <Link className={styles.continuar} to={`/campaign/${campaignId}/newsletter/4/`}>
                    <img src="/src/assets/continuardespues.png" />
                </Link>
            </form>
        </div>
    );
};

export default Newsletter3;
