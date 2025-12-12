import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";


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
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul className="core-concepts-list">
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2] }/>
            <CoreNoProp {...CORE_CONCEPTS[1]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton> Components </TabButton>
          <TabButton> JSX </TabButton>
          <TabButton> Props </TabButton>
          <TabButton> State </TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
