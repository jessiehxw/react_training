const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function App() {
    return (
        <div>
            <h1>hello</h1>
            <h1>world</h1>
            <button>button</button>
            <Person name="Jack" />
            <Person name="Jack2" />
        </div>
    );
}

function Person({ name }) {
    return <div>{name}</div>;
}

root.render(<App />);

// jsx syntax - javascript xml syntax
