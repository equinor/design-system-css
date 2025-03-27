import { forwardRef, ElementType } from 'react'
import { Typography } from '../_components/Typography'
import { TypographyProps, TypographyElement, TypographyColor, TypographyProminence } from '../typography.types'
import { OverridableComponent } from '@equinor/eds-utils'

export type TextProps = TypographyProps & {
  /** When true, text is pushed to the bottom of its text-box (making it "on grid" as the total heigth is rounded to a multiple of 4px), when false it is centered within the text-box. Only works when variant is "ui"
   * @default false
   */
  baselined?: boolean
  monoSpacedNumbers?: boolean
  as?: ElementType
}
const INTER_VERTICAL_OFFSET = 0.002
const EQUINOR_VERTICAL_OFFSET = 0.06
//prominence/color
const getColor = (color: TypographyColor, prominence: TypographyProminence) => {
  const colorBase = `--eds-color-${color}`
  let textColor
  switch (prominence) {
    case 'default':
      textColor = `var(${colorBase}-text-default)`
      break;
    case 'subtle':
      textColor = `var(${colorBase}-text-subtle)`
      break;
    case 'contrast':
      textColor = `var(${colorBase}-contrast-default)`
      break;
    default:
      textColor = `var(${colorBase}-text-default)`
      break;
  }
  return textColor

}

export const Text: OverridableComponent<TextProps, HTMLElement> =
  forwardRef(function Text(
    {
      size = 'lg',
      lineHeight = 'default',
      fontWeight = 'normal',
      letterSpacing = 'normal',
      variant = 'body',
      monoSpacedNumbers,
      lines,
      color = 'neutral',
      prominence = 'primary',
      customColor,
      as,
      baselined = false,
      children,
      ...rest
    },
    ref,
  ) {
    const variantType: TypographyElement = variant === 'header' ? variant : 'ui-body'
    const offset = variant === 'header' ? EQUINOR_VERTICAL_OFFSET : INTER_VERTICAL_OFFSET
    const gridOn = variant === 'ui' ? baselined : true
    const textColor = customColor ? customColor : getColor(color, prominence)

    return (
      <Typography
        ref={ref}
        as={as}
        $color={textColor}
        $type={variantType}
        $offset={offset}
        $size={size}
        $lineHeight={lineHeight}
        $lines={lines}
        $fontWeight={fontWeight}
        $letterSpacing={letterSpacing}
        $monoSpacedNumbers={monoSpacedNumbers}
        $onGrid={gridOn}
        {...rest}
      >
        {children}
      </Typography>
    )
  })
