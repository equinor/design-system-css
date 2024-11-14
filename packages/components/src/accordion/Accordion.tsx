import './accordion.css'
import { Text } from '../'
import {Icon} from '../'
import { chevron_right } from '@equinor/eds-icons'

type AccordionProps = React.DetailsHTMLAttributes<HTMLDetailsElement>
export const Accordion = ({children, ...rest}: AccordionProps) => (
  <details className={`eds-accordion`} {...rest}>
    <summary>
      <Icon size='xl' icon={chevron_right} />
      <span className="eds-accordion__heading"><Text variant='ui'>Hello</Text></span>
      <span className="eds-accordion__actions"><Text variant='ui'>Save</Text><Text variant='ui'>Delete</Text></span>
    </summary>
    <div className={`eds-accordion__content`}>
      {children}
      </div>

  </details>
)
