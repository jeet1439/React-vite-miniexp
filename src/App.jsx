import { useState } from "react";
import Header from "./components/Header.jsx";
import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/coreConcept.jsx";
import TabButton from "./components/tabButton.jsx";
import { EXAMPLES } from "./data";
function App() {
  const [ selectedTopic, setSelectedTopic] = useState();
  function handelSelect(selectedbutton){
    setSelectedTopic(selectedbutton);
   }
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept_item) => <CoreConcept key={concept_item.title} {...concept_item }/>)}
            {/* <CoreConcept
            title={ CORE_CONCEPTS[0].title}
            description={ CORE_CONCEPTS[0].description}
            image={ CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1] }/>
            <CoreConcept {...CORE_CONCEPTS[2] }/>
            <CoreConcept  {...CORE_CONCEPTS[3] }/> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
         <menu>
         <TabButton isSelected={selectedTopic === 'components'} onSelect={ () => handelSelect('components')}>Component</TabButton>
         <TabButton isSelected={selectedTopic === 'jsx'} onSelect={ () => handelSelect('jsx')}>JSX</TabButton>
         <TabButton isSelected={selectedTopic === 'props'} onSelect={ () => handelSelect('props')}>Props</TabButton>
         <TabButton isSelected={selectedTopic === 'state'} onSelect={ () =>handelSelect('state')}>State</TabButton>
         </menu>
         {!selectedTopic ? <p>Please select a topic </p> : <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
             {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
         </div> }
        </section>
      </main>
    </div>
  );
}

export default App;
