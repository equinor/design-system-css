import {Heading, BodyText, Autocomplete} from '../../src'

import './app.css';

export const App = () => {

  return (
    <main className="app">
      <section className="app__topbar"></section>
      <section className="app__sidebar"></section>
      <section className="app__content">
        <Heading size="6xl" as="h1">Title</Heading>
        <Autocomplete />
      </section>
    </main>
  );
};
