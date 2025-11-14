const Person = ({person}) => {

    const {name, favoriteNumber, favoriteColors} = person;

    return (
        <>
            <h2>Hello, {name}! Here is your data:</h2>
            <p>{name}'s favorite number is {favoriteNumber}</p>
            <p>Add 10 to {name}'s favorite number, and the result is a more 
                than perfect {favoriteNumber + 10}.</p>
            <p>{name}'s favorite colors are:</p>
            {favoriteColors ?
                <ul>
                    {favoriteColors.map(color => (
                        <li key={color}>{color}</li>
                    ))}
                </ul>
                :
                ''
            }        
        </>
    )
}
export default Person