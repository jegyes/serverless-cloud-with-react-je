
import './App.css'
import PeopleList from './peopleList'


function App() {

      const people = [

        {
        name: 'Desi',
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
    
    ]

  
  return (
    <>
      <h1>Greetings, React!!</h1>
      <p>Let's test the things.</p>
      <PeopleList people={people}/>
    </>
  )


}

export default App
