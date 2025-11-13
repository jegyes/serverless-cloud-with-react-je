
import './App.css';
// // import PeopleList from './PeopleList';
import Person from './Person';

const PeopleList = ({people}) => {
    return (
        <>
            {people.map(person => (
                <Person person={person}/>
            ))}        
        </>
    )
}
export default PeopleList