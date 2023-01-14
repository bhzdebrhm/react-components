import classNames from 'classnames';
import React from 'react';
import { loadStyle, themeEnvironment, usePreLoadedStyle } from '@bhzdebrhm/use-emotion';
import { filterUndefined } from '@bhzdebrhm/utils';
import { mapResponsive } from '@bhzdebrhm/utils';

function spanFn(span?: any) {
    return mapResponsive(span, (value: any) =>
        value === "auto" ? "auto" : `span ${value}/span ${value}`,
    )
};


interface GridItemProps {
    area: string,
    colSpan: string,
    colStart: string,
    colEnd: string,
    rowEnd: string,
    rowSpan: string,
    rowStart: string,
}

const itemFn = (props: GridItemProps) => filterUndefined({
    gridArea: props.area,
    gridColumn: spanFn(props.colSpan),
    gridRow: spanFn(props.rowSpan),
    gridColumnStart: props.colStart,
    gridColumnEnd: props.colEnd,
    gridRowStart: props.rowStart,
    gridRowEnd: props.rowEnd,
})

const loaded = loadStyle<any, any ,any>(themeEnvironment, itemFn) 

export const GridItem = React.forwardRef((props: any, ref) => {
        const {
            area,
            colSpan,
            colStart,
            colEnd,
            rowEnd,
            rowSpan,
            rowStart,
            className,
            ...rest
        } = props
    
        const [itemStyle] = usePreLoadedStyle(loaded, 
            {area,
            colSpan,
            colStart,
            colEnd,
            rowEnd,
            rowSpan,
            rowStart
        })


        return <div ref={ref} className={classNames(itemStyle, className)} {...rest} />
})