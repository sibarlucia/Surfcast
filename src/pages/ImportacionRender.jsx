import {React,  useState, useEffect}  from "react";
import { Link, useParams,} from "react-router-dom";
import Importacion from "../components/Importacion/Importacion";
import Importacion2 from "../components/Importacion/Importacion2";
import Importacion3 from "../components/Importacion/Importacion3";
import Importacion4 from "../components/Importacion/Importacion4";
import Importacion5 from "../components/Importacion/Importacion5";
import Loginlinkedin from "../components/Importacion/LoginLinkedin";
import Logingmail from "../components/Importacion/Logingmail";
import { readResponsesByCampaing } from '../services/responses/readResponsesByCampaing'
// RRBC = readResponsesByCampaing

const ImportacionRender = () => {
    const { step, campaingId } = useParams()
    const [RRBC, setRRBC] = useState(null)

    useEffect(() => {
        readResponsesByCampaing({ campaign_id: campaingId })
            .then(response => {
                const { data } = response
                const formatedData = data.filter(item => {
                    // return item.question_name.includes('importacion/')
                    return item.question_name.includes('test_importacion/') // para test
                })
                setRRBC(formatedData)
            })
    },[campaingId])

    if (step === "loginlinkedin") {
        return <Loginlinkedin></Loginlinkedin>;
    }
    if (step === "logingmail") {
        return <Logingmail></Logingmail>;
    }

    if (step == null || step === "1") {
        return <Importacion defaultResponse={RRBC} campaingId={campaingId}></Importacion>;
    }
    if (step === "2") {
        return <Importacion2 defaultResponse={RRBC}></Importacion2>;
    }
    if (step === "3") {
        return <Importacion3 defaultResponse={RRBC}></Importacion3>;
    }
    if (step === "4") {
        return <Importacion4 defaultResponse={RRBC}></Importacion4>;
    }
    if (step === "5") {
        return <Importacion5 defaultResponse={RRBC}></Importacion5>;
    }

    return null;
};

export default ImportacionRender;
