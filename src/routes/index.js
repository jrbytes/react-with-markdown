import React from 'react'

import { Switch, Route } from 'react-router-dom'

import ArticleLinks from '../components/ArticleLinks'
import Post from '../pages/Post'

const Routes = () => (
  <Switch>
    <Route path="/" exact component={ArticleLinks} />
    <Route path="/articles/:id" component={Post} />
  </Switch>
)

export default Routes