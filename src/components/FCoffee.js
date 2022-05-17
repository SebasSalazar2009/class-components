import react, {useState} from 'react'


function FCoffee ({firstName}) {
    const [count, setCount] = useState (0);
    const handleClick = () => {
        setCount(count + 1);

    }
    return (
        <>
        <h1>Coffe List(F)</h1>
        <p>Hello {firstName}</p>
        <p>you clicked the button {count} times.</p>
        <button onClick={handleClick}>Click Me</button>
        </>
    )
}



export default FCoffee;