import { useParams } from 'react-router-dom'
import Producto from '../components/Productos/Producto'
import Producto2 from '../components/Productos/Producto2'
import Producto3 from '../components/Productos/Producto3'
import Producto4 from '../components/Productos/Producto4'
import Producto5 from '../components/Productos/Producto5'
import { useGetResponsesByCampaign } from '../hooks/useGetResponsesByCampaign'


const ProductoRender = () => {
    const { step, campaignId } = useParams()
    const responses = useGetResponsesByCampaign({ campaignId, filter: 'producto/' })

  
    if (step == null || step === '1') {
        return (
            <Producto defaultResponse={responses} campaignId={campaignId}></Producto>
        )
    }
    if (step === '2') {
        return (
            <Producto2 defaultResponse={responses} campaignId={campaignId}></Producto2>
        )
    }
    if (step === '3') {
        return (
            <Producto3 defaultResponse={responses} campaignId={campaignId}></Producto3>
        )
    }
    if (step === '4') {
        return (
            <Producto4 defaultResponse={responses} campaignId={campaignId}></Producto4>
        )
    }
    if (step === '5') {
        return (
            <Producto5 defaultResponse={responses} campaignId={campaignId}></Producto5>
        )
    }

  
    return null
}

export default ProductoRender