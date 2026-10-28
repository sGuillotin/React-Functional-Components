const React = require('react'); // bring in React
const { useState } = React; // we now have the power to change the state
const { createRoot } = require('react-dom/client'); // select what we need from React - DOM Client

// props is what will hold our data
const HelloUser = (props) => {

    // let username = props.username;
    const [ username, setUsername ] = useState(props.username); // i want usestate to keep track of this props.username
    //     reference, fxn to update it (??)

    return (
        <div>
            <p>Hellah, {username}.</p>
            <label>Change name: </label>
            <input
                type="text"
                value={username}
                onChange = {(e)=> setUsername(e.target.value)}
                // onChange={ (e)=>{
                //     username = e.target.value;
                //     console.log(username);
                // }
                // }
            />
        </div>
    );
};


const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render(
        <HelloUser username="seb"/>
    )
};

window.onload = init;