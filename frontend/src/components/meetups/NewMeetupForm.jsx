import { useRef } from 'react';
import Card from '../../ui/Card';

function NewMeetupForm(props){
  const titleInputRef = useRef();
  const imageInputRef= useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function handleSubmit(event){
    event.preventDefault();

    const meetupData = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    };
    
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={titleInputRef} />
        </div>

        <div>
          <label htmlFor="image">Image</label>
          <input type="url" id="image" ref={imageInputRef} />
        </div>

        <div>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={addressInputRef}/>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea  id="description" rows="5" ref={descriptionInputRef}></textarea>
        </div>

        <div>
          <button>Add Meet</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm