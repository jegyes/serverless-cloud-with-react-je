
import './App.css';
// // import PeopleList from './PeopleList';
// import Person from './Person';

const PeopleList = ({people}) => {
    return (
        <>
            {people.map(person => (
                <p>{JSON.stringify(person)}</p>
            ))}        
        </>
    )
}
export default PeopleList