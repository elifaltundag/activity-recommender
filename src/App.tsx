import React, { useEffect, useState } from 'react';


/* COMPONENTS */ 
import Header from './app/components/Header';
import UsersChoice from './app/components/UsersChoice';
import Recommendation from './app/components/Recommendation';

function App() {
    const [usersChoice, setUsersChoice] = useState<string>("")
    const [numberOfRequests, setNumberOfRequests] = useState<number>(0)
    const [recommendedActivity, setRecommendedActivity] = useState<string>("")
    
    const BASE_URL = "https://www.boredapi.com/api/activity"
    const [fullURL, setFullURL] = useState<string>("")
    
    
    useEffect(() => {
        if (numberOfRequests) {
            fetch(fullURL)
                .then(resp => resp.json())
                .then(data => setRecommendedActivity(data.activity))
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

            <button disabled={usersChoice === ""}
                onClick={() => setNumberOfRequests(prevNumberOfRequests => prevNumberOfRequests + 1)}>
                Get activity
            </button>

            {recommendedActivity && 
                <Recommendation recommendedActivity={recommendedActivity} />
            }
        </div>
    );
}

export default App;