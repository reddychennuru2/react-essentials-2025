import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data";

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

  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleSelect(SelectedTabButton) {
    setSelectedTopic(SelectedTabButton);
    console.log(selectedTopic);
  }


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
            <CoreNoProp {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/*using arrow functions to pass params for event handler function () => {handleSelect("xxxx")}  */}
          <TabButton onSelect={() => handleSelect("components")}> Components </TabButton>
          <TabButton onSelect={() => handleSelect("jsx")}> JSX </TabButton>
          <TabButton onSelect={() => handleSelect("props")}> Props </TabButton>
          <TabButton onSelect={() => handleSelect("state")}> State </TabButton>
          </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
