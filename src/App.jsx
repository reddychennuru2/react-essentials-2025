import { CORE_CONCEPTS } from "./data";

function Header() {
  return (<header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>);
}

/*Props passed with props keyword */
function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

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
  return (
    <div>
      <Header />
      <Propcomponent title="Democomp" width={300} height="200"  />
      <main>
        <h2>Time to get started!</h2>
        <ul className="core-concepts-list">
        <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
        <CoreConcept {...CORE_CONCEPTS[1]}/>
        <CoreConcept {...CORE_CONCEPTS[2] }/>
        <CoreNoProp {...CORE_CONCEPTS[1]}/>
        </ul>
      </main>
    </div>
  );
}

export default App;
