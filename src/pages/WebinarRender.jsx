import { useParams } from 'react-router-dom'
import Webinar from '../components/Webinar/Webinar'
import Webinar2 from '../components/Webinar/Webinar2'
import Webinar3 from '../components/Webinar/Webinar3'
import Webinar4 from '../components/Webinar/Webinar4'
import Webinar5 from '../components/Webinar/Webinar5'
import Webinar6 from '../components/Webinar/Webinar6'
import { useGetResponsesByCampaign } from '../hooks/useGetResponsesByCampaign'


const WebinarRender = () => {
    const { step, campaignId } = useParams()
    const responses = useGetResponsesByCampaign({ campaignId, filter: 'webinar/' })


    if (step == null || step === '1') {
        return (
            <Webinar defaultResponse={responses} campaignId={campaignId}></Webinar>
        )
    }
    if (step === '2') {
        return (
            <Webinar2 defaultResponse={responses} campaignId={campaignId}></Webinar2>
        )
    }
    if (step === '3') {
        return (
            <Webinar3 defaultResponse={responses} campaignId={campaignId}></Webinar3>
        )
    }
    if (step === '4') {
        return (
            <Webinar4 defaultResponse={responses} campaignId={campaignId}></Webinar4>
        )
    }
    if (step === '5') {
        return (
            <Webinar5></Webinar5>
        )
    }
    if (step === '6') {
        return (
            <Webinar6></Webinar6>
        )
    }
  
    
    return null
}


export default WebinarRender