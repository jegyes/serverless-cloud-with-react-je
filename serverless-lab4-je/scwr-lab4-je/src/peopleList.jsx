
import Person from './person';

const PeopleList = ({people}) => {

    return (
        <>
            {people.map(person => (
                <Person key={person.name} person={person}/>
            ))}       
        </>
    )
}

export default PeopleList