import React from 'react'
import { Title } from '../components/title'
import Button from '../components/button'

export const Page = p => (
  <Title title={p.post.meta.title} site={p.site}>
    <article>
      {p.children}
    </article>
  </Title>
)
