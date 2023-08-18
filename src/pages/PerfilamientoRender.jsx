import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Perfilamiento from '../components/Perfilamientos/Perfilamiento'
import Perfilamiento2 from '../components/Perfilamientos/Perfilamiento2'
import { Perfilamiento3 } from '../components/Perfilamientos/Perfilamiento3'
import Perfilamiento4 from '../components/Perfilamientos/Perfilamiento4'
import Perfilamiento5 from '../components/Perfilamientos/Perfilamiento5'

import { getUserData } from '../services/auth/getUserData'

import '../styles/stylesglobales.css'

const DEFAULT_DATA_FORM = {
    "email": "",
    "full_name": "",
    "team": "",
    "is_active": true,
    "first_time": true,
    "role": "",
    "other_role": "",
    "company_type": "",
    "previus_experience": "",
    
}

const PerfilamientoRender = () => {
    const [dataForm, setDataForm] = useState(DEFAULT_DATA_FORM)
    const params = useParams()
    const step = params.step

    console.log({ dataForm })

    useEffect(() => {
        getUserData()
            .then(response => {
                const { data } = response
                const updateData = {}
                if (data.email) updateData.email = data.email
                if (data.team) updateData.team = data.team
                if (data.full_name && !data.full_name.includes('@')) updateData.full_name = data.full_name
                updateData.is_active = data.is_active
                updateData.first_time = data.first_time
                if (data.role) updateData.role = data.role
                if (data.company_type) updateData.company_type = data.company_type
                if (data.previus_experience) updateData.previus_experience = data.previus_experience
                setDataForm(old => {
                    return { ...old, ...updateData }
                })
            })
    }, [])

    const handleDataChange = (event) => {
        const { name, value } = event.target

        // debugger

        setDataForm({ ...dataForm, [name]: value })
    }

    if (step == null || step === '1') {
        return (
            <Perfilamiento
                name={dataForm.full_name}
                onChange={handleDataChange}
            />
        )
    }
    if (step === '2') {
        return (
            <Perfilamiento2
                name={dataForm.full_name}
                type={dataForm.company_type}
                onChange={handleDataChange}
            />
        )
    }
    if (step === '3') {
        return (
            <Perfilamiento3
                name={dataForm.full_name}
                onChange={handleDataChange}
                role={dataForm.role}
                other_role={dataForm.other_role}
            />
        )
    }
    if (step === '4') {
        return (
            <Perfilamiento4
                name={dataForm.full_name}
                onChange={handleDataChange}
                previus_experience={dataForm.previus_experience}
            />
        )
    }
    if (step === '5') {
        return (
            <Perfilamiento5
                finalData={dataForm}
            />
        )
    }

    return null

}

export default PerfilamientoRender