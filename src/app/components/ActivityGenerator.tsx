import React from "react";

import "../../styles/components/activity-generator.scss";

interface ActivityGeneratorBtnProps {
    usersChoice: string,
    setNumberOfRequests: React.Dispatch<React.SetStateAction<number>>,
}

export default function ActivityGeneratorBtn({ usersChoice,
    setNumberOfRequests }: ActivityGeneratorBtnProps) {
    
    return (
        <button className="activity-generator"
            disabled={usersChoice === ""}
            onClick={() => {setNumberOfRequests(prevNumberOfRequests => prevNumberOfRequests + 1)}}
            onMouseDown={(e) => e.preventDefault()}
        >
            Find me something to do
        </button>
    )
}