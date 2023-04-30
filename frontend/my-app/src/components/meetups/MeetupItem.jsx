import Card from '../../ui/Card';

function MeetupItem(props){
  return (
    <li>
      <Card>
        <div><img src={props.image} alt="" style={{maxWidth: `200px`}}/></div>
        <div>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div>
          <button>To favorites</button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem