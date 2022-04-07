import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css';
import {useRef} from "react";
function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

function submitHandler(event){
    event.preventDefault();
    // console.log(event);
    //get value of input 
    const enterdTitle = titleInputRef.current.value;
    const enterdImage = imageInputRef.current.value;
    const enterdAddress = addressInputRef.current.value;
    const enterdDescription = descriptionInputRef.current.value;

    const meetupData = {
        title: enterdTitle,
        image: enterdImage,
        address: enterdAddress,
        description: enterdDescription,
    };
    // console.log(meetupData);
    props.onAddMeetup(meetupData);
}

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Meetup Title</label>
                <input type="text" required id='title' ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="image">Meetup Image</label>
                <input type="url" required id='image' ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="address">Meetup Address</label>
                <input type="text" required id='address' ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Meetup Description</label>
                <textarea required id='description' rows='5' ref={descriptionInputRef}/>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
    }
    export default NewMeetupForm;