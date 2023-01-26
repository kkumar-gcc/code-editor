import React, { useState } from 'react';
import './App.css';
import Markdown from './components/Markdown';
import Navbar from './components/Navbar';
import CodeEditor from './components/CodeEditor';

// Did you know you can use tildes instead of backticks for code in markdown? ✨
const markdown = ``

function App() {
  const [code, setCode] = useState(markdown);
  const onChange = (action: string | undefined, data: string) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
      }
    }
  };
  return (
    <>
      <div className='dark overflow-hidden h-screen'>
        <div>
          <Navbar />
        </div>
        <div className='h-full'>
          <div className='h-1/2 overflow-y-scroll'>
            <CodeEditor
              code={code}
              onChange={onChange}
            />
          </div>
          <div className='dark:bg-zinc-900 flex flex-row h-1/2 overflow-y-scroll border-t border-zinc-800 w-full'>
            <div className='w-1/2 border-r border-zinc-800'></div>
            <div className='prose dark:prose-invert max-w-none lg:max-w-full p-4 dark:text-gray-500'>
              <Markdown>{code}</Markdown>
            </div>
          </div>
        </div>

      </div>
    </>

  );
}

export default App;
