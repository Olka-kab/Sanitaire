export default {
    name: 'cover',
    title: 'Cover',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'product',
            title: 'Product',
            type: 'string',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string'
        }
    ]
}