import { useParams } from "react-router-dom";
import Reunion from "../components/Reunion/Reunion";
import Reunion2 from "../components/Reunion/Reunion2";
import Reunion3 from "../components/Reunion/Reunion3";
import Reunion4 from "../components/Reunion/Reunion4";
import Reunion5 from "../components/Reunion/Reunion5";
import Reunion6 from "../components/Reunion/Reunion6";
import { useGetResponsesByCampaign } from '../hooks/useGetResponsesByCampaign'


const ReunionRender = () => {
    const { step, campaignId } = useParams();
    const responses = useGetResponsesByCampaign({ campaignId, filter: 'reunion/' })
    console.log({responses})


    if (step == null || step === "1") {
        return <Reunion defaultResponse={responses} campaignId={campaignId}></Reunion>;
    }
    if (step === "2") {
        return <Reunion2 defaultResponse={responses} campaignId={campaignId}></Reunion2>;
    }
    if (step === "3") {
        return <Reunion3 defaultResponse={responses} campaignId={campaignId}></Reunion3>;
    }
    if (step === "4") {
        return <Reunion4 defaultResponse={responses} campaignId={campaignId}></Reunion4>;
    }
    if (step === "5") {
        return <Reunion5 defaultResponse={responses} campaignId={campaignId}></Reunion5>;
    }
    if (step === "6") {
        return <Reunion6 defaultResponse={responses} campaignId={campaignId}></Reunion6>;
    }

    return null;
};

export default ReunionRender;
