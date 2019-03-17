import React from 'react'
import { Title } from '../components/title'

export const Page = p => (
  <Title title={p.title} site={p.site}>
    <article>
      {p.children}
    </article>
  </Title>
)
