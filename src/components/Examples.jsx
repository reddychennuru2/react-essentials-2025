import TabButton from "../components/TabButton.jsx";
import { useState, Fragment } from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";

export default function  Examples() {
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
        <Section id="examples" title="Examples">
          <menu>
            {/*using arrow functions to pass params for event handler function () => {handleSelect("xxxx")}  */}
          <TabButton isSelected = {selectedTopic === "components"} onClick={() => handleSelect("components")}> Components </TabButton>
          <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleSelect("jsx")}> JSX </TabButton>
          <TabButton isSelected={selectedTopic === "props"} onClick={() => handleSelect("props")}> Props </TabButton>
          <TabButton isSelected={selectedTopic === "state"} onClick={() => handleSelect("state")}> State </TabButton>
          </menu>
          {tabContent}
        </Section>
    );
}