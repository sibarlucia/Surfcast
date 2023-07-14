import { useParams } from 'react-router-dom'
import Newsletter from '../components/Newsletter/Newsletter'
import Newsletter2 from '../components/Newsletter/Newsletter2'
import Newsletter3 from '../components/Newsletter/Newsletter3'
import Newsletter4 from '../components/Newsletter/Newsletter4'
import Newsletter5 from '../components/Newsletter/Newsletter5'
import { useGetResponsesByCampaign } from '../hooks/useGetResponsesByCampaign'

const NewsletterRender = () => {
    const { step, campaignId } = useParams()
    const responses = useGetResponsesByCampaign({ campaignId, filter: 'newsletter/' })


    if (step == null || step === '1') {
        return (
            <Newsletter defaultResponse={responses} campaignId={campaignId}></Newsletter>
        )
    }
    if (step === '2') {
        return (
            <Newsletter2 defaultResponse={responses} campaignId={campaignId} ></Newsletter2>
        )
    }
    if (step === '3') {
        return (
            <Newsletter3 defaultResponse={responses} campaignId={campaignId}></Newsletter3>
        )
    }
    if (step === '4') {
        return (
            <Newsletter4 defaultResponse={responses} campaignId={campaignId}></Newsletter4>
        )
    }
    if (step === '5') {
        return (
            <Newsletter5 defaultResponse={responses} campaignId={campaignId}></Newsletter5>
        )
    }


    return null
}

export default NewsletterRender