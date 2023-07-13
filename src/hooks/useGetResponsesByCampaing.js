import { useEffect, useState } from "react"
import { readResponsesByCampaing } from "../services/responses/readResponsesByCampaing"

export const useGetResponsesByCampaing = ({ campaingId, filter }) => {
    const [responses, setResponses] = useState(null)

    useEffect(() => {
        if (campaingId) {
            readResponsesByCampaing({ campaign_id: campaingId })
                .then(response => {
                    const { data } = response
                    const formatedData = data.filter(item => {
                        if (filter) {
                            return item.question_name.includes(filter)
                        }
                        return true
                    })
                    setResponses(formatedData)
                })
        } else {
            console.error('[useGetResponsesByCampaing] campaingId faltante')
        }
    },[campaingId, filter])

    return responses

}