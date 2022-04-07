import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";
// const DUMMY_DATA = [
//   {
//     id: 1,
//     title: "accusamus beatae ad facilis cum similique qui sunt",
//     image: "https://via.placeholder.com/600/92c952",
//     address: "https://via.placeholder.com/150/92c952",
//     description:
//       "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
//   },
//   {
//     id: 2,
//     title: "reprehenderit est deserunt velit ipsam",
//     image: "https://via.placeholder.com/600/771796",
//     address: "https://via.placeholder.com/150/771796",
//     description:
//       "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
//   },
//   {
//     id: 3,
//     title: "officia porro iure quia iusto qui ipsa ut modi",
//     image: "https://via.placeholder.com/600/24f355",
//     address: "https://via.placeholder.com/150/24f355",
//     description:
//       "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
//   },
//   {
//     id: 4,
//     title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//     image: "https://via.placeholder.com/600/d32776",
//     address: "https://via.placeholder.com/150/d32776",
//     description:
//       "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
//   },
// ];
function AllMeetupPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-getting-started-db557-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
        return response.json();
    }).then(data => {
        const meetups = [];
        for(const key in data){
            const meetup = {
                id: key,
                ...data[key]
            };
            meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
    });
    }, []);
    
    if(isLoading){
        return <section>
            <p>Loading...</p>
        </section>
    }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups}/>
      {/* <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}> {meetup.title}</li>;
        })}
      </ul> */}
    </section>
  );
}

export default AllMeetupPage;
