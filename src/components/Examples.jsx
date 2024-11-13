import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./tabButton";
import Section from "./section";

export default function Examples () {
const [ selectedTopic, setSelectedTopic] = useState();
  function handelSelect(selectedbutton){
    setSelectedTopic(selectedbutton);
   }
 return (

    <Section title= "Examples" id="examples">
          {/* <h2>Examples</h2> */}
         <menu>
         <TabButton isSelected={selectedTopic == 'components'} onClick={ () => handelSelect('components')}>Component</TabButton>
         <TabButton isSelected={selectedTopic == 'jsx'} onClick={ () => handelSelect('jsx')}>JSX</TabButton>
         <TabButton isSelected={selectedTopic == 'props'} onClick={ () => handelSelect('props')}>Props</TabButton>
         <TabButton isSelected={selectedTopic == 'state'} onClick={ () => handelSelect('state')}>State</TabButton>
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
        </Section>
 )
}