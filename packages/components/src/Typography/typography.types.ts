export type TypographySize =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
export type TypographyLineHeight = 'default' | 'squished'
export type TypographyElement = 'header' | 'ui-body'
export type TypographyVariant = 'header' | 'ui' | 'body'
export type TypographyFontWeight = 'bolder' | 'normal' | 'lighter'
export type TypographyLetterSpacing = 'loose' | 'normal' | 'tight'
 export type TypographyColor = 'neutral' | 'accent' | 'info' | 'success' | 'warning' | 'danger'
 export type TypographyProminence = 'default' | 'subtle' | 'contrast' /*TODO: follow final color names e.g. "default | subtle | contrast" if using designsystemet naming*/

export type TypographyProps = {
  /** header: uses the "equinor" typeface. Please use the "as" prop to assign the correct header level when variant is header. Always "baselined"
     * body: uses "inter" typeface. Is always "baselined"
     * ui: uses inter typeface. For use in ui components such as buttons, tabs, chips etc. Unlocks "baselined" prop which is false by default to center text vertically.
   * @default 'body'
   */
  variant?: TypographyVariant
  size?: TypographySize
  lineHeight?: TypographyLineHeight
  fontWeight?: TypographyFontWeight
  letterSpacing?: TypographyLetterSpacing
  color?: TypographyColor
  prominence?: TypographyProminence
  customColor?: string
  /** Trunkate to n number of lines. */
  lines?: number
}
