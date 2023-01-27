import React, { useEffect, useState } from 'react';


/* COMPONENTS */ 
import UsersChoice from './app/components/UsersChoice';

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
                .then(data => {
                    console.log(data)
                    setRecommendedActivity(data.activity)
                })
        }
    }, [/* fullURL, */ numberOfRequests])
    

    return (
        <div className="App">
            <header>
                <h1>Activity Recommender</h1>
                <p>Let's find you something to do</p>
            </header>
            
            <UsersChoice 
                usersChoice={usersChoice}
                setUsersChoice={setUsersChoice} 
                baseURL={BASE_URL}
                setFullURL={setFullURL}
            />

            <button onClick={() => setNumberOfRequests(prevNumberOfRequests => prevNumberOfRequests + 1)}>
                Get activity
            </button>

            <p className="recommended-activity">
                {recommendedActivity}
            </p>
        </div>
    );
}

export default App;