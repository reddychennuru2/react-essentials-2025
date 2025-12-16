import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";


/*Props passed without props keyword */
function CoreNoProp({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function Propcomponent(props) {
  return (
    <div style={{ border: "2px solid black", width: props.width, height: props.height }}>
      <h2>{props.title}</h2>
      <p>
        This component demonstrates the use of props to customize its content
        and styling.
      </p>
    </div>
  );
}

function App() {
  console.log("App Executing");

  return (
    <>
      <Header />
      <Propcomponent title="Democomp" width={300} height="200"  />
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
