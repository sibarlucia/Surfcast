import { useParams } from 'react-router-dom'
import Newsletter from '../components/Newsletter/Newsletter'
import Newsletter2 from '../components/Newsletter/Newsletter2'
import Newsletter3 from '../components/Newsletter/Newsletter3'
import Newsletter4 from '../components/Newsletter/Newsletter4'
import Newsletter5 from '../components/Newsletter/Newsletter5'
import { useGetResponsesByCampaing } from '../hooks/usegetREsponsesByCampaing'

const NewsletterRender = () => {

    const { step, campaingId } = useParams()
    const responses = useGetResponsesByCampaing({ campaingId, filter: 'newsletter/' })


    if (step == null || step === '1') {
        return (
            <Newsletter defaultResponse={responses} campaingId={campaingId}></Newsletter>
        )
    }
    if (step === '2') {
        return (
            <Newsletter2></Newsletter2>
        )
    }
    if (step === '3') {
        return (
            <Newsletter3></Newsletter3>
        )
    }
    if (step === '4') {
        return (
            <Newsletter4></Newsletter4>
        )
    }
    if (step === '5') {
        return (
            <Newsletter5></Newsletter5>
        )
    }


    return null
}

export default NewsletterRender