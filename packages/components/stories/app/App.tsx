import {Accordion, Text, SideBar, Autocomplete, Card, Radio, Checkbox} from '../../src'

import './app.css';

export const App = () => {

  return (
    <main className="app">
      <section className="app__topbar"></section>
      <section className="app__sidebar"><SideBar /></section>
      <section className="app__content">
        <Text variant='header' size="6xl" as="h1">Title</Text>
        <div className="u-card-grid">
          <Card>
            <div className="eds-card__content u-rich-text">
              <Autocomplete />
              <form>
                <div className="u-flex">
                  <fieldset className='u-fieldset'>
                    <legend>Radios</legend>
                    <label className='eds-label'><Radio name="a" /><Text>Radio button</Text></label>
                    <label className='eds-label'><Radio name="a" /><Text>Radio button</Text></label>
                    <label className='eds-label'><Radio name="a" /><Text>Radio button</Text></label>
                  </fieldset>
                  <fieldset title="checkboxes" className='u-fieldset'>
                    <legend>Checkboxes</legend>
                    <label className='eds-label'><Checkbox /><Text>Checkbox</Text></label>
                    <label className='eds-label'><Checkbox /><Text>Checkbox</Text></label>
                    <label className='eds-label'><Checkbox /><Text>Checkbox</Text></label>
                  </fieldset>
                </div>
              </form>
              <Accordion>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil ea ut! Magni officiis est inventore, molestias autem minus numquam ea alias tempora rerum nisi quo deserunt beatae odio expedita!</Text>
              </Accordion>
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
