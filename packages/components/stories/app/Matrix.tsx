import './matrix.css';

export const Matrix = () => {
  const colors = ['neutral', 'accent', 'info', 'success', 'warning', 'danger']
  return (
  <div className='matrix'>
    <section className="categories">
      <p>Background</p>
      <p>Surface</p>
      <p>Border</p>
      <p>Base</p>
      <p>Text</p>
    </section>
    {colors.map((color) => (
      <>
        <section key={color.toString()} className={color} data-color-scheme="light">
          {Array.from({ length: 13 }, (_, i) => (<div data-bg={`var(--${color}-${i + 1})`}></div>))}
        </section>
        <section key={color.toString() + 'dark'} className={color} data-color-scheme="dark">
          {Array.from({ length: 13 }, (_, i) => (<div data-bg={`var(--${color}-${i + 1})`}></div>))}
        </section>
      </>
    ))}
  </div>
  )
}
