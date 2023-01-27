import React from "react"

/* Activities map */
import { activities } from "../model/data"

/* Styling */
import "../../styles/components/activity-type.scss" 

interface UsersChoiceProps {
    usersChoice: string,
    setUsersChoice: React.Dispatch<React.SetStateAction<string>>
    baseURL: string,
    setFullURL: React.Dispatch<React.SetStateAction<string>>,
}

export default function UsersChoice( { usersChoice, setUsersChoice, baseURL, setFullURL }: UsersChoiceProps) {
    const activityTypes = Object.values(activities)

    function handleActivityTypeChange(activityType: string, activityTypeIndex: number) {
        setUsersChoice(activityType)

        if (activityTypeIndex) {
            setFullURL(baseURL + "?type=" + activityType)
        } else {
            setFullURL(baseURL + "/")
        }
    }

    return (
        <fieldset>
            <legend>Select a type of activity</legend>

            {activityTypes.map((activityType: string, index: number) => (
                <span className="activity-type"
                    key={index}
                >
                    <input 
                        className="activity-type__radio-btn"
                        type="radio" 
                        name="usersChoice" 
                        value={index} 
                        id={activityType}
                        checked={usersChoice === activityType}
                        onChange={() => handleActivityTypeChange(activityType, index)}
                    />
                    <label className="activity-type__label"
                        htmlFor={activityType}
                    >
                        {activityType[0].toUpperCase() + activityType.slice(1)}
                    </label>    
                </span>
            ))}
        </fieldset>
    )
}