import React from 'react'

function Home() {
    const [title, setTitle] = React.useState("Stateless Object");
    let title2 = "Local Object";

    //event handler function 
    const handleClick = () => {
        console.log("Button clicked");
        setTitle("Stateful Object");
        title2 = "Changed Local Object"; // This won't trigger a re-render
        console.log(title2)
    };

    return (
        <>
            <h1>HOME: Welcome to React</h1>
            {title2}
            <FnGreeting title={title} />
            <ClGreeting title="Class React" />
            <ArrowGreeting title="World" />
            <button onClick={() => handleClick()}>Change Title</button>
        </>
    )
}

//Functional component
function FnGreeting(x) {
    return <h2>Hello {x.title}</h2>;
}
//Class component
class ClGreeting extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h2>Hello {this.props.title}</h2>;
    }
}
//Arrow function component
const ArrowGreeting = (x) =>
    <h2>Hello {x.title}</h2>;

export default Home