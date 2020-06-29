import Markdown from 'markdown-to-jsx'
import React, { useEffect, useState } from 'react'
import md from './posts/arquivo.md'

function App() {
  const [textMD, setTextMD] = useState('')

  useEffect(() => {
    fetch(md)
      .then(res => res.text())
      .then(res => setTextMD(res))
  }, [])

  return (
    <div>
      <Markdown
        children={textMD}
      />
    </div>
  );
}

export default App;
