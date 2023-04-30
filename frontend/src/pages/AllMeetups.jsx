import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetupsPage(){
  const [isLoading, setIsLoading] = useState(true);
  const [loadMeetups, setLoadMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    
    fetch(
      'http://localhost:8000/api/v1/'
    ).then( response => response.json()
    ).then( data => {
      setIsLoading(false);
      setLoadMeetups(data)
    } )
  }, [])
  
  if(isLoading){
    return <p>..loading</p>
  }


  return( 
    <>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadMeetups}/>
    </>
  )
  
}

export default AllMeetupsPage;