import './accordion.css'

export const Accordion = () => (
<details className={`eds-accordion`}>
  <summary>
    <span className="eds-accordion__heading">Accordion title</span>
    <span className="eds-accordion__actions"><span>Save</span> <span>delete</span></span>
  </summary>
  <div className={`eds-accordion__content`}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis maxime adipisci eveniet earum dolorem, hic natus quidem, necessitatibus temporibus atque nihil unde amet quisquam. Facere provident commodi adipisci earum autem!
    </div>

</details>

)
