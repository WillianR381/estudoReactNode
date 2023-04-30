import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){
  //hook que possibilita voltar para a página anterior entre outro exemplos
  const navigate = useNavigate();

  function handleAddMeetup(meetupData){
    fetch('http://localhost:8000/api/v1/', 
    {
      method: 'POST',
      body: JSON.stringify(meetupData)
    }).then(() => {
      console.log('foi');
      navigate("/", { replace: true });
    }).finally(()=> {
      navigate("/", { replace: true });
    })
  }

  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  )
}

export default NewMeetupPage;