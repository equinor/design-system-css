import { HTMLAttributes } from 'react'
import { Heading } from '../Typography'
/* import { Icon } from '..'
import { account_circle, gear, help_outline, log_out, expand } from '../icon' */

import './table.css'
type Props = {caption?: string} & HTMLAttributes<HTMLTableElement>
export const Table = ({className, caption = "Table caption", ...rest }: Props) => (
  <table className={['eds-table', 'colors-from-tokens', className].join(' ')} {...rest}>
      <caption><Heading as="h3" color="primary">{caption}</Heading></caption>
      <thead>
      <tr>
        <th>
          <div>Item no.</div>
        </th>
        <th>
          <div>Description</div>
        </th>
        <th>
          <div>Origin</div>
        </th>
        <th>
          <div >
            Price
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>123-456</td>
        <td>Pears</td>
        <td>Europe</td>
        <td>1.5</td>
      </tr>
      <tr className="active">
        <td>234-567</td>
        <td>Apples</td>
        <td>Africa</td>
        <td>1.2</td>
      </tr>
      <tr>
        <td>45-6789</td>
        <td>Oranges</td>
        <td>South America</td>
        <td>1.8</td>
      </tr>
      <tr>
        <td>67-890</td>
        <td>Kiwi</td>
        <td>Australia</td>
        <td>2.1</td>
      </tr>
{/*       <tr>
        <td>89-012</td>
        <td>Mango</td>
        <td>South Africa</td>
        <td>2.5</td>
      </tr>
      <tr>
        <td>89-123</td>
        <td>Pineapple</td>
        <td>Paraguay</td>
        <td>1.9</td>
      </tr>
      <tr>
        <td>89-456</td>
        <td>Pomegranate</td>
        <td>Persia</td>
        <td>4.5</td>
      </tr> */}
    </tbody>
    <tfoot>
      <tr>
        <th colSpan={4} >
          <div>Footer</div>
        </th>
      </tr>
    </tfoot>
  </table>
)


