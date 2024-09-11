import './accordion.css'
type AccordionProps = React.DetailsHTMLAttributes<HTMLDetailsElement>
export const Accordion = ({children, ...rest}: AccordionProps) => (
  <details className={`eds-accordion`} {...rest}>
    <summary>
      <span className="eds-accordion__heading">Accordion title</span>
      <span className="eds-accordion__actions"><span>Save</span> <span>delete</span></span>
    </summary>
    <div className={`eds-accordion__content`}>
      {children}
      </div>

  </details>
)
