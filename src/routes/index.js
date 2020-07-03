import React from 'react'

import { Switch, Route } from 'react-router-dom'

import ArticleLinks from '../components/ArticleLinks'
import RenderArticle from '../pages/RenderArticle'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={ArticleLinks} />
    <Route path="/articles/:id" component={RenderArticle} />
  </Switch>
)

export default Routes