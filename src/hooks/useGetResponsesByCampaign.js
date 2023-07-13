import { useEffect, useState } from "react"
import { readResponsesBycampaign } from "../services/responses/readResponsesByCampaign"

export const useGetResponsesByCampaign = ({ campaignId, filter }) => {
    const [responses, setResponses] = useState(null)

    useEffect(() => {
        if (campaignId) {
            readResponsesBycampaign({ campaign_id: campaignId })
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
            console.error('[useGetResponsesBycampaign] campaignId faltante')
        }
    },[campaignId, filter])

    return responses

}