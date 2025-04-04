import { HTMLAttributes, AnchorHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import {
  TypographySize,
  TypographyLineHeight,
  TypographyElement,
  TypographyFontWeight,
  TypographyLetterSpacing,
} from '../typography.types'

export type StyleHeadingProps = {
  $type: TypographyElement
  $size: TypographySize
  $lineHeight: TypographyLineHeight
  $fontWeight: TypographyFontWeight
  $letterSpacing: TypographyLetterSpacing
  $monoSpacedNumbers?: boolean
  $offset?: number
  $onGrid?: boolean
  $color?: string
  $lines?: number
} & (HTMLAttributes<HTMLElement> | AnchorHTMLAttributes<HTMLAnchorElement>)

export const Typography = styled.p<StyleHeadingProps>`
  margin: 0;
  ${({
    $type,
    $size,
    $lineHeight,
    $fontWeight,
    $letterSpacing,
    $monoSpacedNumbers,
    $offset = 0,
    $onGrid = true,
    $color,
    $lines,
  }) => css`
    ${$lines &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${$lines};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
    ${$monoSpacedNumbers &&
    css`
      font-variant-numeric: tabular-nums;
    `}
    --_text-preset-color: ${$color};
    font-size: ${`var(--override-font-size, var(--eds-typography-${$type}-${$size}-font-size))`};
    font-family: ${`var(--eds-typography-${$type}-font-family)`};
    line-height: ${`var(--eds-typography-${$type}-${$size}-lineheight-${$lineHeight})`};
    font-weight: ${`var(--eds-typography-${$type}-${$size}-font-weight-${$fontWeight})`};
    letter-spacing: ${`var(--eds-typography-${$type}-${$size}-tracking-${$letterSpacing})`};
    /*TODO: determine if --override-text-color/link-color is needed or if inherit covers all the bases. override overrides all, while inherit only applies when color prop is not set*/
    color: var(--override-text-color, var(--_text-preset-color));
    --_offset: calc(${$offset} * 1em);
    --_grid-base: 4px;
    &[href],
    & [href] {
      /*TODO: fix*/
      color: var(--override-link-color, light-dark(#034187, #90d6fc));
    }
    /* vertically center inline icons.
     * Need to capture 1ex - 1cap from typography and pass it down to svg,
     * as icons have their own font-size set based on their height*/
    --captured-size-1: calc(1ex - 1cap);
    --_vertical-align-icon: var(--captured-size-1);
    & > svg {
      margin-bottom: -0.5em;
      margin-top: calc(-0.5em + var(--_vertical-align-icon));
      display: inline-block;
      vertical-align: middle;
    }
    /*chrome/edge/safari*/
    /*Finding: we can not use negative margins in pseudo elements with text-box but we can use padding.
      However padding can only be positive and in some cases (like 3xl) cap height is larger than the nearest
      round to 4px (17.82px gets rounded to 16px in the fallback version with negative margins which we can not do here.
      We can only round up but then to the nearest 4 would be 20 or the nearest 2px would be 18px which is not consistent
      with figma/intended value of 16*/
      /*padding-top: calc(round(up, 1cap, 4px) - 1cap);*/
      /*ALTERNATIVE SOLUTION: "text-box: trim-both ex alphabetic;" and calculate difference up to cap rounded to 4px and set it as padding-top*/
    @supports (text-box: trim-both cap alphabetic) {
      --_cap-diff: calc(1cap - 1ex);
      --_cap-rest: calc(round(1cap, 4px) - 1cap);
      --_padding: calc(var(--_cap-diff) + var(--_cap-rest));
      ${$onGrid ?
        css`
          padding-top: var(--_padding);
        ` :
        css`
        padding-block: calc(var(--_padding) / 2);
      `}
      text-box: trim-both ex alphabetic;
      /*This could be used if font-size was pre-calculated in tokens to make cap heights rounded to 4px values*/
      /* text-box: trim-both cap alphabetic; */
    }
    /*fallback for firefox until they add text-box*/
    @supports not (text-box: trim-both cap alphabetic) {
      /*This calculates the rest-values to make the total height a multiple of 4px.
      When onGrid is true, the rest is only added to the top of the text-box.*/
      --_rest-top: ${$onGrid
        ? 'calc(round(nearest, 1cap, var(--_grid-base)) - 1cap)'
        : 'calc((round(nearest, 1cap, var(--_grid-base)) - 1cap) / 2)'};
      --_rest-bottom: ${$onGrid
        ? '0cap'
        : 'calc((round(nearest, 1cap, var(--_grid-base)) - 1cap) / 2)'};
      /*This emulates text-box-trim: both; text-box-edge: cap alphabetic*/
      --_trim-top: calc(((((1lh - 1cap) / 2) - var(--_offset)) * -1));
      --_trim-bottom: calc(((((1lh - 1cap) / 2) + var(--_offset)) * -1));

      &::before {
        //Because of the negative margins, margin-bottom adjusts the top and vice versa
        margin-bottom: calc(var(--_trim-top) + var(--_rest-top, 0cap));
      }
      &::after {
        margin-top: calc(var(--_trim-bottom) + var(--_rest-bottom, 0cap));
      }
      &::before,
      &::after {
        display: table;
        content: '';
      }
    }
  `}
`
