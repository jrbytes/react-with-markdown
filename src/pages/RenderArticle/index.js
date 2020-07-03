import Markdown from 'markdown-to-jsx'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RenderArticle = () => {
  const [textMD, setTextMD] = useState('')

  let { id } = useParams()

  useEffect(() => {
    const loadMarkdown = async () => {
      const file = await import(`../../articles/${id}.md`)
      fetch(file.default)
        .then(res => res.text())
        .then(res => setTextMD(res))
    }
    
    loadMarkdown()
  }, [id])

  return (<Markdown children={textMD} />)
}

export default RenderArticle
