import Markdown from 'markdown-to-jsx'
import React, { useEffect, useState } from 'react'

import md from '../../articles/2020-06-02-hello-world.md'

const Posts = () => {
  const [textMD, setTextMD] = useState('')

  useEffect(() => {
    fetch(md)
      .then(res => res.text())
      .then(res => setTextMD(res))
  }, [])

  return (
    <Markdown children={textMD} />
  )
}

export default Posts
