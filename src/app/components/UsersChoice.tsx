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

        if (activityTypeIndex === 10) {
            setFullURL(baseURL + "/")
        } else {
            setFullURL(baseURL + "?type=" + activityType)
        }

    }

    return (
        <div>
            <p className="select-activity-type">Select a type of activity</p>

            <div className="activity-types-container">
                {activityTypes.map((activityType: string, index: number) => {

                    return (
                    <span className="activity-type"
                        key={index}
                    >
                        <input 
                            className="activity-type__radio-btn"
                            type="radio" 
                            name="usersChoice" 
                            value={index + 1} 
                            id={activityType}
                            checked={usersChoice === activityType}
                            onChange={() => handleActivityTypeChange(activityType, index + 1)}
                        />
                        <label className="activity-type__label"
                            htmlFor={activityType}
                        >
                            {activityType[0].toUpperCase() + activityType.slice(1)}
                        </label>    
                    </span>
                )})}
            </div>
        </div>
    )
}