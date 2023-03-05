export const dataState: DataStateType = {
    pages: [
        {
            heading: 'while',
            about: 'sintaxis'
        },
        {
            heading: 'for',
            about: 'sintaxis1'
        },
        {
            heading: 'switch',
            about: 'sintaxis1'
        }
    ]
}

export type DataStateType = {
    pages: PagesType[]
}

export type PagesType = {
    heading: string
    about: string
}