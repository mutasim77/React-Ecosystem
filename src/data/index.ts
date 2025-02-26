interface IData {
  id: number;
  title: string;
  links: {
    id: number;
    name: string;
    link: string;
  }[];
}

export const data: IData[] = [
  {
    id: 1,
    title: "General Resources",
    links: [
      {
        id: 1,
        name: "React Official Website",
        link: "https://react.dev/",
      },
      {
        id: 2,
        name: "React GitHub",
        link: "https://github.com/facebook/react",
      },
      {
        id: 3,
        name: "Discord Channel",
        link: "http://www.reactiflux.com/",
      },
      {
        id: 4,
        name: "React Community",
        link: "https://react.dev/community",
      },
      {
        id: 5,
        name: "React Conferences",
        link: "https://react.dev/community/conferences",
      },
      {
        id: 6,
        name: "React CodeSandbox Playground",
        link: "https://codesandbox.io/s/new",
      },
    ],
  },
  {
    id: 2,
    title: "Tutorials",
    links: [
      {
        id: 1,
        name: "Official Tutorial",
        link: "https://react.dev/learn",
      },
      {
        id: 2,
        name: "Using React in Visual Studio Code",
        link: "https://code.visualstudio.com/docs/nodejs/reactjs-tutorial",
      },
      {
        id: 3,
        name: "React Interview Questions & Answers",
        link: "https://github.com/sudheerj/reactjs-interview-questions",
      },
      {
        id: 4,
        name: "Design patterns and Component patterns",
        link: "https://www.patterns.dev/",
      },
      {
        id: 5,
        name: "Powerful architecture for building React app",
        link: "https://www.patterns.dev/",
      },
      {
        id: 6,
        name: "React + TS Cheatsheet",
        link: "https://github.com/typescript-cheatsheets/react-typescript-cheatsheet",
      },
    ],
  },
  {
    id: 3,
    title: "Development Tools",
    links: [
      {
        id: 1,
        name: "Vite",
        link: "https://vitejs.dev/",
      },
      {
        id: 2,
        name: "Reactotron",
        link: "https://github.com/skellock/reactotron",
      },
      {
        id: 3,
        name: "Eslint Plugin React",
        link: "https://github.com/yannickcr/eslint-plugin-react",
      },
      {
        id: 4,
        name: "Why Did You Render?",
        link: "https://github.com/welldone-software/why-did-you-render",
      },
      {
        id: 5,
        name: "Chrome DevTools extension",
        link: "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi",
      },
      {
        id: 6,
        name: "React Sight",
        link: "https://www.reactsight.com/",
      },
      {
        id: 7,
        name: "Redux DevTools",
        link: "https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd",
      },
      {
        id: 8,
        name: "Bit",
        link: "https://bit.dev/",
      },
    ],
  },
  {
    id: 4,
    title: "Frameworks",
    links: [
      {
        id: 1,
        name: "Next",
        link: "https://github.com/vercel/next.js",
      },
      {
        id: 2,
        name: "Remix",
        link: "https://remix.run/",
      },
      {
        id: 3,
        name: "Gatsby",
        link: "https://github.com/gatsbyjs/gatsby",
      },
      {
        id: 4,
        name: "React Admin",
        link: "https://marmelab.com/react-admin/",
      },
      {
        id: 5,
        name: "Expo",
        link: "https://expo.dev/",
      },
    ],
  },
  {
    id: 5,
    title: "UI Component Libraries",
    links: [
      {
        id: 1,
        name: "Material UI",
        link: "https://mui.com/",
      },
      {
        id: 2,
        name: "Ant Design",
        link: "https://ant.design/",
      },
      {
        id: 3,
        name: "Shadcn UI",
        link: "https://ui.shadcn.com/",
      },
      {
        id: 4,
        name: "React Bootstrap",
        link: "https://react-bootstrap.github.io/",
      },
      {
        id: 5,
        name: "Fluentui",
        link: "https://react.fluentui.dev/?path=/docs/concepts-introduction--page",
      },
      {
        id: 6,
        name: "Framework7",
        link: "https://framework7.io/react/",
      },
      {
        id: 7,
        name: "Ariakit",
        link: "https://ariakit.org/",
      },
      {
        id: 8,
        name: "Core UI",
        link: "https://coreui.io/react/",
      },
      {
        id: 9,
        name: "PrimeReact",
        link: "https://primereact.org/",
      },
      {
        id: 10,
        name: "Grommet",
        link: "https://v2.grommet.io/",
      },
      {
        id: 11,
        name: "Chakra UI",
        link: "https://chakra-ui.com/",
      },
      {
        id: 12,
        name: "Semantic UI",
        link: "https://react.semantic-ui.com/",
      },
      {
        id: 13,
        name: "Blueprint UI",
        link: "https://blueprintjs.com/",
      },
      {
        id: 14,
        name: "Evergreen",
        link: "https://evergreen.segment.com/",
      },
    ],
  },
  {
    id: 6,
    title: "State Management",
    links: [
      {
        id: 1,
        name: "Redux",
        link: "https://redux.js.org/introduction/getting-started",
      },
      {
        id: 2,
        name: "Zustand",
        link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
      },
      {
        id: 3,
        name: "Recoil",
        link: "https://recoiljs.org/",
      },
      {
        id: 4,
        name: "Jotai",
        link: "https://jotai.org/",
      },
      {
        id: 5,
        name: "Rematch",
        link: "https://rematchjs.org/",
      },
      {
        id: 6,
        name: "Hookstate",
        link: "https://hookstate.js.org/",
      },
      {
        id: 7,
        name: "MobX",
        link: "https://mobx.js.org/react-integration.html",
      },
      {
        id: 8,
        name: "XState",
        link: "https://stately.ai/docs/xstate",
      },
    ],
  },
  {
    id: 7,
    title: "Styling",
    links: [
      {
        id: 1,
        name: "Styled Components",
        link: "https://styled-components.com/",
      },
      {
        id: 2,
        name: "Emotion",
        link: "https://emotion.sh/docs/introduction",
      },
      {
        id: 3,
        name: "Linaria",
        link: "https://linaria.dev/",
      },
      {
        id: 4,
        name: "Vanilla Extract",
        link: "https://vanilla-extract.style/",
      },
      {
        id: 5,
        name: "JSS",
        link: "https://cssinjs.org/?v=v10.10.0",
      },
      {
        id: 6,
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
      },
    ],
  },
  {
    id: 8,
    title: "Testing",
    links: [
      {
        id: 1,
        name: "Jest",
        link: "https://jestjs.io/",
      },
      {
        id: 2,
        name: "Enzyme",
        link: "https://enzymejs.github.io/enzyme/",
      },
      {
        id: 3,
        name: "React Testing Library",
        link: "https://testing-library.com/docs/react-testing-library/intro/",
      },
      {
        id: 4,
        name: "Hooks Testing Library",
        link: "https://react-hooks-testing-library.com/",
      },
      {
        id: 5,
        name: "Cypress",
        link: "https://www.cypress.io/",
      },
      {
        id: 6,
        name: "Vitest",
        link: "https://vitest.dev/",
      },
      {
        id: 7,
        name: "Playwright",
        link: "https://playwright.dev/docs/intro",
      },
    ],
  },
  {
    id: 9,
    title: "Routing",
    links: [
      {
        id: 1,
        name: "React Router",
        link: "https://reactrouter.com/en/main",
      },
      {
        id: 2,
        name: "Wouter",
        link: "https://github.com/molefrog/wouter",
      },
      {
        id: 3,
        name: "Tanstack Router",
        link: "https://tanstack.com/router/v1",
      },
    ],
  },
  {
    id: 10,
    title: "Components Sandboxes",
    links: [
      {
        id: 1,
        name: "Storybook",
        link: "https://storybook.js.org/",
      },
      {
        id: 2,
        name: "React Styleguidist",
        link: "https://react-styleguidist.js.org/",
      },
      {
        id: 3,
        name: "React Cosmos",
        link: "https://reactcosmos.org/",
      },
    ],
  },
  {
    id: 11,
    title: "Forms",
    links: [
      {
        id: 1,
        name: "React Hook Form",
        link: "https://react-hook-form.com/",
      },
      {
        id: 2,
        name: "Formik",
        link: "https://formik.org/",
      },
      {
        id: 3,
        name: "React Jsonschema Form",
        link: "https://rjsf-team.github.io/react-jsonschema-form/",
      },
      {
        id: 4,
        name: "React Final Form",
        link: "https://final-form.org/react",
      },
      {
        id: 5,
        name: "Formily",
        link: "https://formilyjs.org/",
      },
    ],
  },
  {
    id: 12,
    title: "Charts",
    links: [
      {
        id: 1,
        name: "Recharts",
        link: "https://recharts.org/en-US",
      },
      {
        id: 2,
        name: "Visx",
        link: "https://airbnb.io/visx",
      },
      {
        id: 3,
        name: "Victory",
        link: "https://formidable.com/open-source/victory/",
      },
      {
        id: 4,
        name: "React-Vis",
        link: "https://uber.github.io/react-vis/",
      },
      {
        id: 5,
        name: "Nivo",
        link: "https://nivo.rocks/",
      },
      {
        id: 6,
        name: "React Chartjs",
        link: "https://react-chartjs-2.js.org/",
      },
    ],
  },
  {
    id: 13,
    title: "Renderers",
    links: [
      {
        id: 1,
        name: "React Three Fiber",
        link: "https://docs.pmnd.rs/react-three-fiber/getting-started/introduction",
      },
      {
        id: 2,
        name: "Ink",
        link: "https://github.com/vadimdemedes/ink",
      },
      {
        id: 3,
        name: "Remotion",
        link: "https://www.remotion.dev/",
      },
      {
        id: 4,
        name: "React PDF",
        link: "https://react-pdf.org/",
      },
      {
        id: 5,
        name: "React Figma",
        link: "https://react-figma.dev/",
      },
      {
        id: 6,
        name: "React Hardware",
        link: "https://iamdustan.com/react-hardware/",
      },
      {
        id: 7,
        name: "Nil",
        link: "https://github.com/pmndrs/react-nil",
      },
    ],
  },
  {
    id: 14,
    title: "Maps",
    links: [
      {
        id: 1,
        name: "Map GL",
        link: "https://visgl.github.io/react-map-gl/",
      },
      {
        id: 2,
        name: "Leaflet",
        link: "https://react-leaflet.js.org/",
      },
      {
        id: 3,
        name: "Google Map",
        link: "https://github.com/google-map-react/google-map-react",
      },
      {
        id: 4,
        name: "Deck GL",
        link: "https://deck.gl/",
      },
      {
        id: 5,
        name: "Pigeon Maps",
        link: "https://pigeon-maps.js.org/",
      },
      {
        id: 6,
        name: "Simple Maps",
        link: "https://www.react-simple-maps.io/",
      },
    ],
  },
  {
    id: 15,
    title: "Tables and Grids",
    links: [
      {
        id: 1,
        name: "React Grid Layout",
        link: "https://react-grid-layout.github.io/react-grid-layout/examples/0-showcase.html",
      },
      {
        id: 2,
        name: "Tanstack Table",
        link: "https://tanstack.com/table/v8",
      },
      {
        id: 3,
        name: "React Data Grid",
        link: "https://adazzle.github.io/react-data-grid/#/common-features",
      },
    ],
  },
  {
    id: 16,
    title: "Internationalization",
    links: [
      {
        id: 1,
        name: "FormatJS",
        link: "https://formatjs.io/",
      },
      {
        id: 2,
        name: "i18next",
        link: "https://react.i18next.com/",
      },
      {
        id: 3,
        name: "Typesafe i18n",
        link: "https://github.com/ivanhofer/typesafe-i18n",
      },
    ],
  },
  {
    id: 17,
    title: "Graphics and Animations",
    links: [
      {
        id: 1,
        name: "Framer Motion",
        link: "https://www.framer.com/motion/",
      },
      {
        id: 2,
        name: "React Spring",
        link: "https://www.react-spring.dev/",
      },
      {
        id: 3,
        name: "React Transition Group",
        link: "https://reactcommunity.org/react-transition-group/",
      },
      {
        id: 4,
        name: "Auto Animate",
        link: "https://auto-animate.formkit.com/",
      },
      {
        id: 5,
        name: "tsParticles",
        link: "https://github.com/tsparticles/react",
      },
      {
        id: 6,
        name: "Parallax Tilt",
        link: "https://github.com/mkosir/react-parallax-tilt",
      },
      {
        id: 7,
        name: "Gooey Effect",
        link: "https://gooey-react.netlify.app/",
      },
    ],
  },
  {
    id: 18,
    title: "Data Fethching",
    links: [
      {
        id: 1,
        name: "RTK Query",
        link: "https://redux-toolkit.js.org/rtk-query/overview",
      },
      {
        id: 2,
        name: "SWR",
        link: "https://swr.vercel.app/",
      },
      {
        id: 3,
        name: "TanStack Query",
        link: "https://tanstack.com/query/latest",
      },
      {
        id: 4,
        name: "Axios",
        link: "https://axios-http.com/",
      },
      {
        id: 5,
        name: "Apollo Client",
        link: "https://www.apollographql.com/docs/react",
      },
    ],
  },
  {
    id: 19,
    title: "Awesome Libraries",
    links: [
      {
        id: 1,
        name: "Floating UI",
        link: "https://floating-ui.com/",
      },
      {
        id: 2,
        name: "Loadable Components",
        link: "https://loadable-components.com/",
      },
      {
        id: 3,
        name: "Reapop",
        link: "https://louisbarranqueiro.github.io/reapop/",
      },
      {
        id: 4,
        name: "React-Toastify",
        link: "https://fkhadra.github.io/react-toastify/introduction/",
      },
      {
        id: 5,
        name: "Sonner",
        link: "https://sonner.emilkowal.ski/",
      },
      {
        id: 6,
        name: "React Uploady",
        link: "https://react-uploady.org/",
      },
      {
        id: 7,
        name: "Downshift",
        link: "https://www.downshift-js.com/",
      },
      {
        id: 8,
        name: "React Select",
        link: "https://react-select.com/home",
      },
      {
        id: 9,
        name: "DND",
        link: "https://react-dnd.github.io/react-dnd/about",
      },
      {
        id: 10,
        name: "dndKit",
        link: "https://dndkit.com/",
      },
      {
        id: 11,
        name: "React Dropzone",
        link: "https://react-dropzone.js.org/",
      },
      {
        id: 12,
        name: "RND",
        link: "https://github.com/bokuweb/react-rnd",
      },
      {
        id: 13,
        name: "Big Calendar",
        link: "https://github.com/jquense/react-big-calendar",
      },
      {
        id: 14,
        name: "React Datepicker",
        link: "https://reactdatepicker.com/",
      },
      {
        id: 15,
        name: "Loading Skeleton",
        link: "https://github.com/dvtng/react-loading-skeleton",
      },
      {
        id: 16,
        name: "QR Code",
        link: "https://zpao.github.io/qrcode.react/",
      },
      {
        id: 17,
        name: "React Archer",
        link: "https://github.com/pierpo/react-archer",
      },
      {
        id: 18,
        name: "Device Detect",
        link: "https://github.com/duskload/react-device-detect",
      },
      {
        id: 19,
        name: "React Colorful",
        link: "https://github.com/omgovich/react-colorful",
      },
      {
        id: 20,
        name: "React Icons",
        link: "https://react-icons.github.io/react-icons/",
      },
      {
        id: 21,
        name: "React Icons",
        link: "https://react-icons.github.io/react-icons/",
      },
      {
        id: 22,
        name: "Complex Tree",
        link: "https://rct.lukasbach.com/",
      },
      {
        id: 23,
        name: "Insta Stories",
        link: "https://mohitk05.github.io/react-insta-stories/",
      },
      {
        id: 24,
        name: "Swiper",
        link: "https://swiperjs.com/",
      },
      {
        id: 25,
        name: "Keen Slider",
        link: "https://keen-slider.io/",
      },
      {
        id: 26,
        name: "Cookie Banner",
        link: "https://github.com/porscheofficial/cookie-consent-banner",
      },
      {
        id: 27,
        name: "Tagify",
        link: "https://yaireo.github.io/tagify/",
      },
      {
        id: 28,
        name: "Tagify",
        link: "https://yaireo.github.io/tagify/",
      },
      {
        id: 29,
        name: "Supabase for Auth",
        link: "https://supabase.com/",
      },
    ],
  },
  {
    id: 20,
    title: "Documentation",
    links: [
      {
        id: 1,
        name: "Docusaurus",
        link: "https://docusaurus.io/",
      },
      {
        id: 2,
        name: "Nextra",
        link: "https://nextra.site/",
      },
    ],
  },
];
