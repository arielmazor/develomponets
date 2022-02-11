# React redux router typscript template

## By [Ariel Mazor.](https://github.com/arielmazor)

# Installation

```zsh
git clone https://github.com/arielmazor/developments/blob/master/navigator-redux-project
cd navigator-redux-project 
yarn & yarn start
```

# Sturcture
├── App.jsx\
├── components\
│   └── homeContext\
│       ├── homeContext.component.tsx\
│       └── _homeContext.scss\
├── declaration.d.ts\
├── _index.scss\
├── index.tsx\
├── interfaces\
│   ├── index.ts\
│   └── store.interface.ts\
├── Pages\
│   ├── _home.scss\
│   ├── Home.tsx\
│   └── profile.tsx\
└── store\
    ├── actions\
    │   ├── actions.types.ts\
    │   └── index.ts\
    ├── index.ts\
    └── reducers\
        ├── index.ts\
        └── profiles\
            └── index.ts
            
# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
