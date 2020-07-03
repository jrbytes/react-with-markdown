import React from 'react'
import { Link } from 'react-router-dom'

import { titles } from '../../titles.json'

const ArticleLink = () => {
  return (
    <>
      <h1>Artigos</h1>
      <ul>
        {titles.map(t => (
          <li key={t.title}>
            <Link to={`/articles/${t.filename}`}>
              {t.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
} 

export default ArticleLink