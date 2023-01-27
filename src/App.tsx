import React, { useState } from 'react';


/* COMPONENTS */ 
import UsersChoice from './app/components/UsersChoice';

function App() {
    const BASE_URL = "https://www.boredapi.com/api/activity"
    const [usersChoice, setUsersChoice] = useState<string>("")
    


    return (
        <div className="App">
            <header>
                <h1>Let's find you something to do</h1>
            </header>
            
            <UsersChoice 
                baseURL={BASE_URL}
                usersChoice={usersChoice}
                setUsersChoice={setUsersChoice} 
            />

            <button disabled={true}>
                Get Activity
            </button>

            <p className="recommended-activity">
                "RECOMMENDED ACTIVITY"
            </p>
        </div>
    );
}

export default App;