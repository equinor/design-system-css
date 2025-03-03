import {Accordion, Button, Chip, Dialog, Icon, Text, SideBar, Snackbar, Autocomplete, Card, Radio, Checkbox} from '../../src'
import {useState, useRef, useEffect} from 'react'
import {alarm, info_circle, sun, circle_filled} from '@equinor/eds-icons'
import {Matrix} from './Matrix'

import './app.css';

const Chips = ()=> (
  <div className="u-flex">
    <Chip><Icon size={'xs'} icon={info_circle} />Default chip</Chip>
    <Chip active><Icon size={'xs'} icon={info_circle} />Chip active</Chip>
    <Chip disabled><Icon size={'xs'} icon={info_circle} />Chip disabled</Chip>
    <Chip variant='info'><Icon size={'xs'} icon={info_circle} />Info</Chip>
    <Chip variant='warning'><Icon size={'xs'} icon={info_circle} />Warning</Chip>
    <Chip variant='error'><Icon size={'xs'} icon={info_circle} />Error</Chip>
    <Chip variant='success'><Icon size={'xs'} icon={info_circle} />Success</Chip>
  </div>
)

export const App = () => {
  const [MenuOpen, setMenuOpen] = useState(false)
  const main = useRef<HTMLDivElement>(null)
  const [isDark, setIsDark] = useState<boolean>(false)
  const [isRadix, setIsRadix] = useState<boolean>(false)
  const [isGaussian, setIsGaussian] = useState<boolean>(true)

  const toggleTheme = (event: any) => {
    const el = main.current as HTMLDivElement
    /* @ts-ignore */
    if (!document.startViewTransition) {
      setIsDark(!isDark)
      isDark ? el.dataset.colorScheme = 'light' : el.dataset.colorScheme = 'dark'
      return
    }
    const x = event?.clientX ?? window.innerWidth / 2;
    const y = event?.clientY ?? window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )

  /* @ts-ignore */
    const transition = document.startViewTransition(() => {
      setIsDark(!isDark)
      isDark ? el.dataset.colorScheme = 'light' : el.dataset.colorScheme = 'dark'
    })

    transition.ready.then(() => {
      document.documentElement.animate(
        [
          { clipPath: `circle(0 at ${x}px ${y}px)` },
          { clipPath: `circle(${endRadius}px at ${x}px ${y}px)` },
        ],
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)'
        },
      )
    })
  }

  useEffect(() => {
    const el = main.current as HTMLDivElement
    isRadix ? el.dataset.lightness = 'radix' : el.dataset.lightness = 'designsystemet'
    isGaussian ? el.dataset.chromaCurve = 'gaussian' : el.dataset.chromaCurve = 'sine'
  }, [isRadix, isGaussian])

  return (
    <main data-color-scheme="light" data-lightness="designsystemet" data-chroma-curve="gaussian" ref={main} className="app">
      <section className="app__topbar">
        <div className="app__topbar-actions">
          <Button variant="tertiary" onClick={(e)=> setIsRadix(!isRadix)}>{isRadix ? 'Light curve: Radix' : 'Light curve: Designsystemet'}</Button>
          <Button variant="tertiary" onClick={()=> setIsGaussian(!isGaussian)}>{isGaussian ? 'Chroma curve: gaussian' : 'Chroma curve: sine'}</Button>
          <Button variant="tertiary" onClick={(e)=> toggleTheme(e)}>{isDark ? 'dark 🌙' : 'light 🌞'}</Button>
        </div>
      </section>
      <section className="app__sidebar"><SideBar /></section>
      <section className="app__content">
        <div className='content__title'>
          <Text variant='header' size="6xl" as="h1">Title</Text>
          <Text size='2xl' prominence='secondary'>I'm a subtitle with prominence="secondary"</Text>
        </div>
        <Matrix />
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
              <Chips/>
            </div>
          </Card>
          <Card variant="success">
            <div className="eds-card__content u-rich-text">
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil ea ut! Magni officiis est inventore, molestias autem minus numquam ea alias tempora rerum nisi quo deserunt beatae odio expedita!</Text>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil ea ut! Magni officiis est inventore, molestias autem minus numquam ea alias tempora rerum nisi quo deserunt beatae odio expedita!</Text>
            <Accordion>
                <Text>Should accordion use transparent borders like this to better work on different background colors?</Text>
            </Accordion>
            <Chips/>
            </div>
          </Card>
          <Card  variant="info">
            <div className="eds-card__content u-rich-text">
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil ea ut! Magni officiis est inventore, molestias autem minus numquam ea alias tempora rerum nisi quo deserunt beatae odio expedita!</Text>
              <Chips/>
            </div>
          </Card>
          <Card variant='warning'>
            <div className="eds-card__content u-rich-text">
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil ea ut! Magni officiis est inventore, molestias autem minus numquam ea alias tempora rerum nisi quo deserunt beatae odio expedita!</Text>
              <Chips/>
            </div>
          </Card>
          <Card variant='error'>
            <div className="eds-card__content u-rich-text">
              <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nihil ea ut! Magni officiis est inventore, molestias autem minus numquam ea alias tempora rerum nisi quo deserunt beatae odio expedita!</Text>
              <Chips/>
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
