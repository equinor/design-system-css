import './color-preview.css';
import { Checkbox, Icon } from '../../src/';
import { useState, useEffect, ChangeEvent } from 'react';
import { help_outline } from '@equinor/eds-icons';

export const ColorPreview = () => {
  const colors = ['neutral', 'accent', 'info', 'success', 'warning', 'danger']
  const [groupByScheme, setGroupByScheme] = useState(true)
  const [mean, setMean] = useState(0.6)
  const [stdev, setStdev] = useState(2)
  useEffect(() => {
    document.documentElement.style.setProperty('--user-mean', mean.toString())
    document.documentElement.style.setProperty('--user-stdev', stdev.toString())
  }, [mean, stdev])
  return (
  <div className='color-preview'>
    <section className="controls">
      <label>Group by scheme<Checkbox defaultChecked={groupByScheme} onChange={()=> setGroupByScheme(!groupByScheme)} /></label>
      <label className='col'>adjust mean: {mean}
        <input type="range" max="0.8" min="0.4" step="0.01" value={mean}
          onInput={(e: ChangeEvent<HTMLInputElement>)=> setMean(parseFloat(e.target.value))} />
      </label>
      <label className='col'>adjust stdev: {stdev}
        <input type="range" max="10" min="0.1" step="0.1" value={stdev}
          onInput={(e: ChangeEvent<HTMLInputElement>)=> setStdev(parseFloat(e.target.value))} />
      </label>
      <a
        href="https://codepen.io/Oddbj-rn-vernes/pen/ZYzQpmV" target='_blank'
        title="Use sliders to adjust mean (peak of the curve) and stdev (width of the bell). Click to open codepen of the curve">
          <Icon style={{fill: 'var(--eds-color-info-base-default)'}} icon={help_outline} />
      </a>
    </section>
    <section className="categories">
      <p>Background</p>
      <p>Surface</p>
      <p>Border</p>
      <p>Base</p>
      <p>Text</p>
    </section>
    {!groupByScheme ? colors.map((color) => (
      <>
        <section key={color} className={color} data-color-scheme="light">
          {Array.from({ length: 13 }, (_, i) => (<div key={color + i} data-bg={`var(--${color}-${i + 1})`}></div>))}
        </section>
        <section key={color + 'dark'} className={color} data-color-scheme="dark">
          {Array.from({ length: 13 }, (_, i) => (<div key={color + i + 'dark'}  data-bg={`var(--${color}-${i + 1})`}></div>))}
        </section>
      </>
    )) : <>
          {colors.map((color) => (
            <section key={color + 'grouped'} className={color} data-color-scheme="light">
              {Array.from({ length: 13 }, (_, i) => (<div key={color + i + 'g'}  data-bg={`var(--${color}-${i + 1})`}></div>))}
            </section>
          ))}
          {colors.map((color) => (
            <section key={color + 'grouped dark'} className={color} data-color-scheme="dark">
              {Array.from({ length: 13 }, (_, i) => (<div key={color + i + 'bg'} data-bg={`var(--${color}-${i + 1})`}></div>))}
            </section>
          ))}
        </>
    }
  </div>
  )
}
