import React from 'react'
import FA from 'react-fontawesome'
import { css } from 'emotion'
import { colours } from './globals'
import { Breadcrumbs, Breadcrumb as BreadcrumbElement } from 'react-breadcrumbs';
import 'font-awesome/css/font-awesome.min.css';

const crumb = css(`
  span:last-of-type {
    a {
      color: ${colours.text};
      text-decoration: none;
    }
  }
`)

export const Breadcrumb = p => {
  return (
    <Breadcrumbs className={crumb} separator={<FA style={{ margin: '0 7px 5px' }} name="chevron-right" />}>
      {p.links
        ? p.links.map(({ name, link }) => (
          <BreadcrumbElement key={link} data={{ title: name, pathname: link }} />))
          : null}
    </Breadcrumbs>
  )
}
