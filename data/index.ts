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
        title: 'General Resources',
        links: [
            {
                id: 1,
                name: 'React Official Website',
                link: 'https://react.dev/'
            },
            {
                id: 2,
                name: 'React GitHub',
                link: 'https://github.com/facebook/react'
            },
            {
                id: 3,
                name: 'Discord Channel',
                link: 'http://www.reactiflux.com/'
            },
            {
                id: 4,
                name: 'React Community',
                link: 'https://react.dev/community'
            },
            {
                id: 5,
                name: 'React Conferences',
                link: 'https://react.dev/community/conferences'
            },
            {
                id: 6,
                name: 'React CodeSandbox Playground',
                link: 'https://codesandbox.io/s/new'
            }
        ]
    },
    {
        id: 2,
        title: 'Tutorials',
        links: [
            {
                id: 1,
                name: 'Official Tutorial',
                link: 'https://react.dev/learn'
            },
            {
                id: 2,
                name: 'Using React in Visual Studio Code',
                link: 'https://code.visualstudio.com/docs/nodejs/reactjs-tutorial'
            },
            {
                id: 3,
                name: 'React Interview Questions & Answers',
                link: 'https://github.com/sudheerj/reactjs-interview-questions'
            },
            {
                id: 4,
                name: 'Design patterns and Component patterns',
                link: 'https://www.patterns.dev/'
            },
            {
                id: 5,
                name: 'Powerful architecture for building React app',
                link: 'https://www.patterns.dev/'
            },
            {
                id: 6,
                name: 'React + TS Cheatsheet',
                link: 'https://github.com/typescript-cheatsheets/react-typescript-cheatsheet'
            },
        ]
    },
    {
        id: 3,
        title: 'Development Tools',
        links: [
            {
                id: 1,
                name: 'Vite',
                link: 'https://vitejs.dev/'
            },
            {
                id: 2,
                name: 'Reactotron',
                link: 'https://github.com/skellock/reactotron'
            },
            {
                id: 3,
                name: 'Eslint Plugin React',
                link: 'https://github.com/yannickcr/eslint-plugin-react'
            },
            {
                id: 4,
                name: 'Why Did You Render?',
                link: 'https://github.com/welldone-software/why-did-you-render'
            },
            {
                id: 5,
                name: 'Chrome DevTools extension',
                link: 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi'
            },
            {
                id: 6,
                name: 'React Sight',
                link: 'https://www.reactsight.com/'
            },
            {
                id: 7,
                name: 'Bit',
                link: 'https://bit.dev/'
            },

        ]
    },
    {
        id: 4,
        title: 'Frameworks',
        links: [
            {
                id: 1,
                name: 'Next',
                link: 'https://github.com/vercel/next.js'
            },
            {
                id: 2,
                name: 'Remix',
                link: 'https://remix.run/'
            },
            {
                id: 3,
                name: 'Gatsby',
                link: 'https://github.com/gatsbyjs/gatsby'
            },
            {
                id: 4,
                name: 'React Admin',
                link: 'https://marmelab.com/react-admin/'
            },
            {
                id: 5,
                name: 'Expo',
                link: 'https://expo.dev/'
            },
        ]
    },
    {
        id: 5,
        title: 'Component Libraries',
        links: [
            {
                id: 1,
                name: 'Material UI',
                link: 'https://mui.com/'
            },
            {
                id: 2,
                name: 'Ant Design',
                link: 'https://ant.design/'
            },
            {
                id: 3,
                name: 'Shadcn UI',
                link: 'https://ui.shadcn.com/'
            },
            {
                id: 4,
                name: 'React Bootstrap',
                link: 'https://react-bootstrap.github.io/'
            },
            {
                id: 5,
                name: 'Fluentui',
                link: 'https://react.fluentui.dev/?path=/docs/concepts-introduction--page'
            },
            {
                id: 6,
                name: 'Framework7',
                link: 'https://framework7.io/react/'
            },
            {
                id: 7,
                name: 'Ariakit',
                link: 'https://ariakit.org/'
            },
            {
                id: 8,
                name: 'Core UI',
                link: 'https://coreui.io/react/'
            },
            {
                id: 9,
                name: 'PrimeReact',
                link: 'https://primereact.org/'
            },
            {
                id: 10,
                name: 'Grommet',
                link: 'https://v2.grommet.io/'
            },
            {
                id: 11,
                name: 'Chakra UI',
                link: 'https://chakra-ui.com/'
            },
            {
                id: 12,
                name: 'Semantic UI',
                link: 'https://react.semantic-ui.com/'
            },
            {
                id: 13,
                name: 'Blueprint UI',
                link: 'https://blueprintjs.com/'
            },
            {
                id: 14,
                name: 'Evergreen',
                link: 'https://evergreen.segment.com/'
            },
        ]
    },
    {
        id: 6,
        title: 'State Management',
        links: [
            {
                id: 1,
                name: 'Redux',
                link: 'https://redux.js.org/introduction/getting-started'
            },
            {
                id: 2,
                name: 'Zustand',
                link: 'https://docs.pmnd.rs/zustand/getting-started/introduction'
            },
            {
                id: 3,
                name: 'Recoil',
                link: 'https://recoiljs.org/'
            },
            {
                id: 4,
                name: 'Jotai',
                link: 'https://jotai.org/'
            },
            {
                id: 5,
                name: 'Rematch',
                link: 'https://rematchjs.org/'
            },
            {
                id: 6,
                name: 'Hookstate',
                link: 'https://hookstate.js.org/'
            },
            {
                id: 7,
                name: 'Rematch',
                link: 'https://rematchjs.org/'
            },
            {
                id: 8,
                name: 'MobX',
                link: 'https://mobx.js.org/react-integration.html'
            },
            {
                id: 9,
                name: 'XState',
                link: 'https://stately.ai/docs/xstate'
            },
            {
                id: 10,
                name: 'XState',
                link: 'https://stately.ai/docs/xstate'
            },
        ]
    },
    {
        id: 7,
        title: 'Styling',
        links: [
            {
                id: 1,
                name: 'Styled Components',
                link: 'https://styled-components.com/'
            },
            {
                id: 2,
                name: 'Emotion',
                link: 'https://emotion.sh/docs/introduction'
            },
            {
                id: 3,
                name: 'Linaria',
                link: 'https://linaria.dev/'
            },
            {
                id: 4,
                name: 'Vanilla Extract',
                link: 'https://vanilla-extract.style/'
            },
            {
                id: 5,
                name: 'JSS',
                link: 'https://cssinjs.org/?v=v10.10.0'
            }
        ]
    },
    {
        id: 8,
        title: 'Testing',
        links: [
            {
                id: 1,
                name: 'Jest',
                link: 'https://jestjs.io/'
            },
            {
                id: 2,
                name: 'Enzyme',
                link: 'https://enzymejs.github.io/enzyme/'
            },
            {
                id: 3,
                name: 'React Testing Library',
                link: 'https://testing-library.com/docs/react-testing-library/intro/'
            },
            {
                id: 4,
                name: 'Hooks Testing Library',
                link: 'https://react-hooks-testing-library.com/'
            },
            {
                id: 5,
                name: 'Cypress',
                link: 'https://www.cypress.io/'
            },
            {
                id: 6,
                name: 'Vitest',
                link: 'https://vitest.dev/'
            }
        ]
    },
    {
        id: 2,
        title: 'General Resources',
        links: [
            {
                id: 1,
                name: 'Redux',
                link: 'https://redux.js.org/introduction/getting-started'
            },
            {
                id: 2,
                name: 'Zustand',
                link: 'https://docs.pmnd.rs/zustand/getting-started/introduction'
            }
        ]
    },

]