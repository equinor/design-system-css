import {Accordion, Button, Dialog, Icon, Text, SideBar, Snackbar, Autocomplete, Card, Radio, Checkbox} from '../../src'
import {useState} from 'react'
import {alarm} from '@equinor/eds-icons'

import './app.css';

export const App = () => {
  const [MenuOpen, setMenuOpen] = useState(false)

  return (
    <main className="app">
      <section className="app__topbar"></section>
      <section className="app__sidebar"><SideBar /></section>
      <section className="app__content">
        <div className='content__title'>
          <Text variant='header' size="6xl" as="h1">Title</Text>
          <Text size='2xl' prominence='secondary'>I'm a subtitle with prominence="secondary"</Text>
        </div>
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
              <div className="u-flex">
                <Button onClick={()=>setMenuOpen(true)}>Open Dialog</Button>
                {/* @ts-ignore */}
                <Button variant='secondary' popovertarget="s1">Open snackbar</Button>
                <Snackbar id="s1" >
                  <Icon icon={alarm}></Icon>
                  <Text>Look at me I'm a snackbar!</Text>
                  <Button style={{marginLeft: 'auto'}}>Button</Button>
                </Snackbar>

              </div>
            </div>
          </Card>
          <Card variant="success">
            <div className="eds-card__content u-rich-text">
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil ea ut! Magni officiis est inventore, molestias autem minus numquam ea alias tempora rerum nisi quo deserunt beatae odio expedita!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil ea ut! Magni officiis est inventore, molestias autem minus numquam ea alias tempora rerum nisi quo deserunt beatae odio expedita!</Text>
            <Accordion>
                <Text>Should accordion use transparent borders like this to better work on different background colors?</Text>
              </Accordion>
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
      <Dialog open={MenuOpen} onClose={()=>setMenuOpen(false)}>
        <Text variant="body">Are you sure you want to <br /> delete this item?</Text>
        <div className="eds-dialog__actions">
          <Button onClick={()=>setMenuOpen(false)}>Delete</Button>
          <Button variant="secondary" onClick={()=>setMenuOpen(false)}>Cancel</Button>
        </div>
      </Dialog>
    </main>
  );
};
