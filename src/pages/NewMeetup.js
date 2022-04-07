import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useNavigate } from 'react-router-dom';
function NewMeetupPages() {
    const navigate = useNavigate();
    function addMeetupHandler(meetupData){
        // default fetch (GET request)
        fetch('https://react-getting-started-db557-default-rtdb.firebaseio.com/meetups.json',
        {
         method: 'POST',
         body: JSON.stringify(meetupData),
         headers:{
             'Content-Type':'application/json'
         }   
        }).then(() => {
            navigate('/');
        });
        
    }

    return <section>
    <h1>Add new Meetup </h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
    }
    export default NewMeetupPages;