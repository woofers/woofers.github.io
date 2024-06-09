import { defineDocumentType, makeSource, type ComputedFields } from '@contentlayer/source-files'
import { rehypePlugins, remarkPlugins } from './remark'

const computedFields: ComputedFields<string> = {
  slug: {
    type: 'string',
    resolve: (doc) => {
      if (doc.type === 'Project') {
        return `${doc._raw.flattenedPath}/play`
      }
      const path = `/${doc._raw.flattenedPath}`
      return path
    },
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => {
      const path = doc._raw.flattenedPath.split('/').slice(1).join('/')
      return path
    },
  },
}

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    layout: {
      type: 'string'
    },
    icon: {
      type: 'string'
    },
    icon_mode: {
      type: 'string'
    },
    icon_type: {
      type: 'string'
    },
    landscape: {
      type: 'string'
    },
    game: {
      type: 'string'
    },
    lang: {
      type: 'string'
    },
    github: {
      type: 'string'
    },
    placeholder: {
      type: 'string'
    },
    ludum_dare: {
      type: 'string'
    }
  },
  computedFields,
}))


export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    date: {
      type: 'date',
      required: true,
    },
    layout: {
      type: 'string'
    }
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Project, Post],
  mdx: {
    remarkPlugins,
    rehypePlugins
  }
})
