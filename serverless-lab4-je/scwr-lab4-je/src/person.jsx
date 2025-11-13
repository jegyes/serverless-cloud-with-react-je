
import './App.css';
// // import PeopleList from './PeopleList';
// import Person from './Person';

const Person = ({person}) => {

    const {name, favoriteNumber, favoriteColors} = person;
    return (
        <>
            <h2>Hello, {name}</h2>
            <p>{name}'s favorite number is {favoriteNumber}</p>
            <p>{name}'s favorite number plus 10 is {favoriteNumber + 10}</p>
            <p>{name}'s favorite colors are:</p>
            {/* favoriteColors ?
            <ul>
                {favoriteColors.map(color => (
                <li>{color}</li>                
                ))}
            </ul>  */}
        </>
    )
}
export default Person