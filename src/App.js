import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [text, setText] = useState(`
  # Welcome to my React Markdown Previewer!
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  Heres some code, \`<div></div>\`, between 2 backticks.
  \`\`\`
  // this is multi-line code:
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... **_both!_**
  There's also [links](https://www.freecodecamp.com), and
  > Block Quotes!
  ![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)
  - And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
          - That look like this.
  `);

  marked.setOptions({
    breaks:true
  })
  
  return ( 
    <div className="App">
      <textarea id="editor"
       onChange={(event) => {
        setText(event.target.value)
      }}
      value={text}
      ></textarea>
      <div id="preview" 
      dangerouslySetInnerHTML={{
        __html: marked(text),
      }}
      ></div>
    </div>
  );
}

export default App;
