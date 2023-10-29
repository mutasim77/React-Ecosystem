interface IData {
    id: number
    title: string
    links: {
        id: number
        name: string
        link: string
    }[]
}

export const data: IData[] = [
    {
        id: 1,
        title: 'State Management',
        links: [
            {
                id: 1,
                name: 'Redux',
                link: 'https://redux.js.org/introduction/getting-started'
            }
        ]
    }
]