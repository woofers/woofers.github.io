import React from 'react'
import { Title } from '../components/title'
import { Button } from '../components/button'
import 'font-awesome/css/font-awesome.min.css';
import FA from 'react-fontawesome'

export const Page = p => (
  <Title title={p.post.meta.title} site={p.site}>
    <article>
      {p.children}
    </article>
  </Title>
)
