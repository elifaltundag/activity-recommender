import React from "react";

import "../../styles/components/recommendation.scss";

interface RecommendationProps {
    recommendedActivity: string;
}

export default function Recommendation( { recommendedActivity }: RecommendationProps) {
    function editActivityText(activity: string): string {
        const firstSpaceIndex = activity.indexOf(" ")
        let verb = " " + activity[0].toLowerCase() + activity.slice(1, firstSpaceIndex)
        const rest = activity.slice(firstSpaceIndex)

        if (verb[verb.length - 1] === "e") {
            verb = verb.slice(0, verb.length - 1)
        }

        verb += "ing "
        
        return verb + rest
    }

    function formatActivityText(activity: string): string {
        return " " + activity[0].toLowerCase() + activity.slice(1)
    }


    return (
        <p className="recommendation">
            How about you
            <span className="recommended-activity">
                {formatActivityText(recommendedActivity)}
            </span>
            ?
        </p>
    )
}