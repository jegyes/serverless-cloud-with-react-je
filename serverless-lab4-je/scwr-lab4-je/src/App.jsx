
import './App.css'
import PeopleList from './PeopleList';

function App() {

      const people = [

        {
        name: 'Dezi',
        favoriteNumber: 9,
        favoriteColors: ['green', 'blue', 'purple'],
        },

        {
        name: 'Kate',
        favoriteNumber: 23,
        favoriteColors: ['red', 'orange', 'ecru'],
        },

        {
        name: 'Tad',
        favoriteNumber: 4,
        favoriteColors: null,
        },

        {
        name: 'Angelo',
        favoriteNumber: 55,
        favoriteColors: ['saffron', 'sage'],
        },
    
    ];
  
  return (
    <>
      <h1>Greetings, React!!</h1>
      <p>Meet the People</p>
      <PeopleList people={people}/>
      
    </>
  )

};

export default App
