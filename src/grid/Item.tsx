import classNames from 'classnames';
import React from 'react';
import { useEmotion } from '@bhzdebrhm/use-emotion';
import { filterUndefined } from '@bhzdebrhm/utils';
import { mapResponsive } from '@bhzdebrhm/utils';

function spanFn(span?: any) {
    return mapResponsive(span, (value: any) =>
        value === "auto" ? "auto" : `span ${value}/span ${value}`,
    )
}

export const GridItem = React.forwardRef((props: any, ref) => {
    {
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
    
        const styles = React.useMemo(()=> {
            return filterUndefined({
                gridArea: area,
                gridColumn: spanFn(colSpan),
                gridRow: spanFn(rowSpan),
                gridColumnStart: colStart,
                gridColumnEnd: colEnd,
                gridRowStart: rowStart,
                gridRowEnd: rowEnd,
            })
        }, [area, colSpan, rowSpan, colStart, colEnd,rowStart, rowEnd ])
    
    
        const [computedStyles] = useEmotion(styles);
    

        return <div ref={ref} className={classNames(computedStyles, className)} {...rest} />
    }
})