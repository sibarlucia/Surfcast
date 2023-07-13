import { useParams } from 'react-router-dom'
import AumentarRed from '../components/AumentarRed/AumentarRed'
import AumentarRed2 from '../components/AumentarRed/AumentarRed2'
import AumentarRed3 from '../components/AumentarRed/AumentarRed3'
import  {useGetResponsesByCampaign}  from '../hooks/useGetResponsesByCampaign.js'

const AumentarRedRender = () => {
    const { step, campaignId } = useParams()
    const responses = useGetResponsesByCampaign({ campaignId, filter: 'aumentaTuRed/' })
    console.log({responses})

    if (step == null || step === '1') {
        return (
            <AumentarRed defaultResponse={responses} campaignId={campaignId}></AumentarRed>
        )
    }
    if (step === '2') {
        return (
            <AumentarRed2 defaultResponse={responses} campaignId={campaignId}></AumentarRed2>
        )
    }
    if (step === '3') {
        return (
            <AumentarRed3 defaultResponse={responses} campaignId={campaignId}></AumentarRed3>
        )
    }
}
export default AumentarRedRender