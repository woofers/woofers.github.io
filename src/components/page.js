import React from 'react'
import { Title } from '../components/title'
import Button from '../components/button'

export const Page = p => (
  <Title title={p.title} site={p.site}>
    <Button href="" style={{ display: 'none' }} />
    <article>
      {p.children}
    </article>
  </Title>
)
