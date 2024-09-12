import './accordion.css'
import { UIText } from '../'

type AccordionProps = React.DetailsHTMLAttributes<HTMLDetailsElement>
export const Accordion = ({children, ...rest}: AccordionProps) => (
  <details className={`eds-accordion`} {...rest}>
    <summary>
      <span className="eds-accordion__heading"><UIText>Hello</UIText></span>
      <span className="eds-accordion__actions"><UIText>Save</UIText><UIText>Delete</UIText></span>
    </summary>
    <div className={`eds-accordion__content`}>
      {children}
      </div>

  </details>
)
