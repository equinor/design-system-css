import {Text, SideBar, Autocomplete} from '../../src'

import './app.css';

export const App = () => {

  return (
    <main className="app">
      <section className="app__topbar"></section>
      <section className="app__sidebar"><SideBar /></section>
      <section className="app__content">
        <Text variant='header' size="6xl" as="h1">Title</Text>
        <Autocomplete />
      </section>
    </main>
  );
};
