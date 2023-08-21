import { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import styles from "./importacion2.module.css";
import { ProgressBar } from "../General/ProgressBar";
import { createResponse } from "../../services/responses/createResponse";
import { useNavigate } from "react-router-dom";

const progressData = [
    {
        node: {
            text: "Leads",
            color: "#7D7DFE",
            active: true,
        },
        line: {
            progress: 100, // porcentaje de la barra con color
            beginColor: "#7D7DFE",
            endColor: "#000000", // hace un degradado entre los dos colores si se activa
        },
    },
    {
        node: {
            text: "Personalización",
            color: "#001B8D",
            active: true,
        },
        line: {
            progress: 35, // porcentaje de la barra con color
            beginColor: "#001B8D",
            // endColor: '#000000' // hace un degradado entre los dos colores si se activa
        },
    },
    {
        node: {
            text: "Ejemplos",
            color: "#CECECE",
            active: false,
        },
    },
    {
        node: {
            text: "Últimos ajustes",
            color: "#CECECE",
            active: false,
        },
    },
];

const DEFAULT_DATA_FORM = {
    button: ''
}

const RESPONSE_NAMES = {
    button: 'importacion/2/button',
}

const Importacion2 = ({defaultResponse = [], campaignId}) => {
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const navigate = useNavigate()


    const [route, setRoute] = useState("");

    const [submit, setSubmit] = useState(false);



    const estiloBoton = styles.button4;
    const botonSeleccionado = styles.seleccionado;
  

    useEffect(() => {
        if (defaultResponse) {
            const button = defaultResponse.find(item => item.question_name === RESPONSE_NAMES['button'])?.answer || ''
            setDataForm({
                button,
            })
            setRoute(button)
        }
    }, [defaultResponse])


    const handleButtonClick = (endpoint) => {
        setRoute(endpoint)
        setDataForm({ ...dataForm, button: endpoint })
        setSubmit(true)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!submit) {
            return 
        }
        console.log({dataForm})
        Object.keys(dataForm).forEach(inputName => {
            createResponse({
                question_name: RESPONSE_NAMES[inputName],
                type: 'string',
                answer: dataForm[inputName],
                campaign_id: campaignId
            })
        })
        navigate(route)
    } 

    return (
        <div className={styles.mainDiv}>
            <form onSubmit={handleSubmit}>

                <div className={styles.progressBar__container}>
                    <ProgressBar data={progressData} />
                </div>

                <article className={styles.mainArticle}>
                    <section>
                        <h1>¿Qué quieres lograr con tu campaña?</h1>
                        <h2>
              Definamos tus objetivos de prospección y los resultados que
              quieres obtener con tu campaña.
                        </h2>
                    </section>
                    <section className={styles.botonera}>
                        <button
                            type="button"
                            className={
                                route === `/campaign/${campaignId}/reunion/1`
                                    ? botonSeleccionado
                                    : estiloBoton
                            }
                            onClick={() => [handleButtonClick(`/campaign/${campaignId}/reunion/1`)]}
                        >
              Lograr reunirme con clientes potenciales
                        </button>
                        <button
                            type="button"
                            className={
                                route === `/campaign/${campaignId}/webinar/1` ? botonSeleccionado : estiloBoton
                            }
                            onClick={() => [handleButtonClick(`/campaign/${campaignId}/webinar/1`)]}
                        >
              Invitar a un webinar o evento corporativo
                        </button>
                        <button
                            type="button"
                            className={
                                route === `/campaign/${campaignId}/aumentarred/1` ? botonSeleccionado : estiloBoton
                            }
                            onClick={() => [handleButtonClick(`/campaign/${campaignId}/aumentarred/1`)]}
                        >
              Aumentar mi red de contactos
                        </button>
                    </section>
                    <section className={styles.botonera}>
                        <button
                            type="button"
                            className={
                                route === `/campaign/${campaignId}/newsletter/1` ? botonSeleccionado : estiloBoton
                            }
                            onClick={() => [handleButtonClick(`/campaign/${campaignId}/newsletter/1`)]}
                        >
              Invitar a inscribirse a un newsletter
                        </button>
                        <button
                            type="button"
                            className={
                                route === `/campaign/${campaignId}/producto/1` ? botonSeleccionado : estiloBoton
                            }
                            onClick={() => [handleButtonClick(`/campaign/${campaignId}/producto/1`)]}
                        >
              Promocionar un producto
                        </button>
                        <button
                            type="button"
                            className={
                                route === "/importacion/1" ? botonSeleccionado : estiloBoton
                            }
                            onClick={() => [handleButtonClick("/importacion/1")]}
                        >
              Otros
                        </button>
                    </section>
                    <section>
                        {/* <Link to={route}> */}
                        <button type="submit" className={styles.botonSiguiente}>
                            Elegir
                        </button>
                        {/* </Link> */}
                    </section>
                </article>
 
                <Link className={styles.volver} to={`/campaign/${campaignId}/importacion/1/`}>
                    <img src="/src/assets/volvernegro.png" />
                </Link>
                <Link className={styles.continuar} to={`/campaign/${campaignId}/importacion/3/`}></Link>
            </form>
        </div>
    );
};

export default Importacion2;
