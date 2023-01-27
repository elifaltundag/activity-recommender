import React from "react";

/* Activity map */
import { activities } from "../model/data";

interface UsersChoiceProps {
    baseURL: string,
    usersChoice: string,
    setUsersChoice: React.Dispatch<React.SetStateAction<string>>
}

export default function UsersChoice( { baseURL, usersChoice, setUsersChoice }: UsersChoiceProps) {
    const activityTypes = Object.values(activities)

    return (
        <div>
            <p>Select a type of activity</p>

            {activityTypes.map((activityType: string, index: number) => (
                <label htmlFor={activityType} key={index}>
                    <input 
                        type="radio" 
                        name="usersChoice" 
                        value={index} 
                        id={activityType}
                        checked={usersChoice === activityType}
                        onChange={() => setUsersChoice(activityType)}
                    />
                    {activityType[0].toUpperCase() + activityType.slice(1)}
                </label>
            ))}
        </div>
    )
}