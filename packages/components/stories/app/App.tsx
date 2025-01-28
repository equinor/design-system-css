import {Text, SideBar, Autocomplete, Card} from '../../src'

import './app.css';

export const App = () => {

  return (
    <main className="app">
      <section className="app__topbar"></section>
      <section className="app__sidebar"><SideBar /></section>
      <section className="app__content">
        <Text variant='header' size="6xl" as="h1">Title</Text>
        <div className="card-grid">
          <Card>
            <div className="eds-card__content u-rich-text">
            <Autocomplete />
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil ea ut! Magni officiis est inventore, molestias autem minus numquam ea alias tempora rerum nisi quo deserunt beatae odio expedita!</Text>
            </div>
          </Card>
          <Card variant="success">
            <div className="eds-card__content u-rich-text">
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil ea ut! Magni officiis est inventore, molestias autem minus numquam ea alias tempora rerum nisi quo deserunt beatae odio expedita!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil ea ut! Magni officiis est inventore, molestias autem minus numquam ea alias tempora rerum nisi quo deserunt beatae odio expedita!</Text>
            </div>
          </Card>
          <Card  variant="info">
            <div className="eds-card__content u-rich-text">
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil ea ut! Magni officiis est inventore, molestias autem minus numquam ea alias tempora rerum nisi quo deserunt beatae odio expedita!</Text>
            </div>
          </Card>
          <Card variant='warning'>
            <div className="eds-card__content u-rich-text">
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil ea ut! Magni officiis est inventore, molestias autem minus numquam ea alias tempora rerum nisi quo deserunt beatae odio expedita!</Text>
            </div>
          </Card>
          <Card variant='error'>
            <div className="eds-card__content u-rich-text">
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil ea ut! Magni officiis est inventore, molestias autem minus numquam ea alias tempora rerum nisi quo deserunt beatae odio expedita!</Text>
            </div>
          </Card>
        </div>

      </section>
    </main>
  );
};
