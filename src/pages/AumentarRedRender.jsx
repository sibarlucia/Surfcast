import { useParams } from 'react-router-dom'
import AumentarRed from '../components/AumentarRed/AumentarRed'
import AumentarRed2 from '../components/AumentarRed/AumentarRed2'
import AumentarRed3 from '../components/AumentarRed/AumentarRed3'
import { useGetResponsesByCampaing } from '../hooks/usegetREsponsesByCampaing'

const AumentarRedRender = () => {
    const { step, campaingId } = useParams()
    const responses = useGetResponsesByCampaing({ campaingId, filter: 'aumentaTuRed/' })
    console.log({responses})

    if (step == null || step === '1') {
        return (
            <AumentarRed defaultResponse={responses} campaingId={campaingId}></AumentarRed>
        )
    }
    if (step === '2') {
        return (
            <AumentarRed2 defaultResponse={responses} campaingId={campaingId}></AumentarRed2>
        )
    }
    if (step === '3') {
        return (
            <AumentarRed3 defaultResponse={responses} campaingId={campaingId}></AumentarRed3>
        )
    }
}
export default AumentarRedRender