import { createClient } from "next-sanity";

import createImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: '3ge9auif',
    dataset: 'production',
    apiVersion: '2022-06-17',
    useCdn: true,
    token: 'skko1FzObPmvxEEYFkcaEoITZpcucdEU4qdh7G2z1EijfJ88XARALexmf0l4yQU7ns9gzpxclBcDkKjZmgKl8zw6RdidKz6ykRBuskShJd3EBx0rdzx5CLxW5prniXOEZXnb1vc4xocrCEcSxQsLNzmXYkETHvBP11CHrCXor6LkqGX5b2aM'
})

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);