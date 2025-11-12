
import App from "./App"

const PeopleList = ({people}) => {

    return (
        <>
            <p>This is the PeopleList Component</p>
            {people.map(person => (
                <p>{JSON.stringify(person)}</p>
            ))}       
        </>
    )
}

export default PeopleList