import classNames from 'classnames';
import { isNull } from 'lodash';
import React from 'react';
import { useEmotion } from '@bhzdebrhm/use-emotion';
import { isNumber } from '@bhzdebrhm/utils';
import { mapResponsive } from '@bhzdebrhm/utils';

import {Grid} from './Grid';

interface GridRowProps {
    columns?: any,
    spacingX?: any,
    spacingY?: any,
    spacing?: any,
    minChildWidth?: any,
    className?: any,
    gap?: string,
    rowGap?: string,
    style?: React.CSSProperties | Record<string, unknown>
}


export const GridRow: React.FC<React.PropsWithChildren<GridRowProps>> = (props) => {
    const { columns, spacingX, spacingY, spacing, minChildWidth, className, style, ...rest } = props

    const templateColumns = minChildWidth
        ? widthToColumns(minChildWidth)
        : countToColumns(columns)


    const [style_] = useEmotion(style || {})


    return (
        <Grid
            gap={spacing}
            columnGap={spacingX}
            rowGap={spacingY}
            templateColumns={templateColumns}
            className={classNames(className, style_)}
            {...rest}
        />
    )
}

function toPx(n: string | number) {
    return isNumber(n) ? `${n}px` : n
}

function widthToColumns(width: any) {
    return mapResponsive(width, (value) =>
        isNull(value) ? null : `repeat(auto-fit, minmax(${toPx(value)}, 1fr))`,
    )
}

function countToColumns(count: any) {
    return mapResponsive(count, (value) =>
        isNull(value) ? null : `repeat(${value}, minmax(0, 1fr))`,
    )
}
