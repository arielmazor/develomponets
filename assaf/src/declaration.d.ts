// We need to tell TypeScript that when we write "import styles from './styles.scss' we mean to load a module (to look for a './styles.scss.d.ts'). 
declare module '*.scss';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;