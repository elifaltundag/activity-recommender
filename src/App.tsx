import React, { useEffect, useState } from 'react';


/* COMPONENTS */ 
import Header from './app/components/Header';
import UsersChoice from './app/components/UsersChoice';
import ActivityGeneratorBtn from './app/components/ActivityGenerator';
import Recommendation from './app/components/Recommendation';


/* STYLES */
import "./styles/globals/app.scss";
import "./styles/components/header.scss";

function App() {
    const [usersChoice, setUsersChoice] = useState<string>("")
    const [numberOfRequests, setNumberOfRequests] = useState<number>(0)
    const [recommendedActivity, setRecommendedActivity] = useState<string>("")
    
    const BASE_URL = "https://www.boredapi.com/api/activity"
    const [fullURL, setFullURL] = useState<string>("")
    
    function rotateGradient() {
        const currentGradientProperty = getComputedStyle(document.documentElement).getPropertyValue("--deg")

        const currentGradientAngle = parseInt(currentGradientProperty.slice(0, currentGradientProperty.indexOf("d")))

        const newGradientAngle = currentGradientAngle + 30;

        document.documentElement.style.setProperty("--deg", (newGradientAngle.toString() + "deg"))
    }

    useEffect(() => {
        if (numberOfRequests) {
            fetch(fullURL)
                .then(resp => resp.json())
                .then(data => {
                    setRecommendedActivity(data.activity)
                    rotateGradient()
                })
        }
        
        // Make a GET request only when the "Get activity" button is clicked, not when fullURL changes
        // eslint-disable-next-line
    }, [numberOfRequests])
    

    return (
        <div className="App">
            <Header />
            
            <UsersChoice 
                usersChoice={usersChoice}
                setUsersChoice={setUsersChoice} 
                baseURL={BASE_URL}
                setFullURL={setFullURL}
            />

            <ActivityGeneratorBtn 
                usersChoice={usersChoice}
                setNumberOfRequests={setNumberOfRequests}
            />

            {recommendedActivity && 
                <Recommendation recommendedActivity={recommendedActivity} />
            }
        </div>
    );
}

export default App;