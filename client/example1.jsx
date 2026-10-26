const React = require('react'); // bring in React
const { createRoot } = require('react-dom/client'); // select what we need from React - DOM Client


const Credits = () => {
    return <p>Made in IGME 430</p>
};

const HelloWorld = () => {
    return(
    // div = top-level container - need one of these when creating a component!
    <div className="greeting">
        <h1>Hello Worlds!</h1>
        <p>Some stuff like 2+2 = {2+2}</p>

        <Credits />
    </div>
    );
};


const init = () => {
    const root = createRoot(document.getElementById('app'));
    root.render( <HelloWorld/> );  //draw X component here
};

window.onload = init;