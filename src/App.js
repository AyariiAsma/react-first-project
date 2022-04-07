// import Todo from './components/Todo';
// function App() {
//   return (
//     <div>
//       <h1>My Todos</h1>
//       <Todo text='Learn react' />
//       <Todo text='Master react' />
//       <Todo text='Explore the full React course' />
//     </div>
//   );
// }

// export default App;

import { Route, Routes } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetups";
import NewMeetupPages from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
function App() {
  return (
      <Layout>
      <Routes>
          <Route path="/" element={<AllMeetupPage />}></Route>
          <Route path="/new-meetup" element={<NewMeetupPages />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
      </Routes>
      </Layout>
  );
}

export default App;
