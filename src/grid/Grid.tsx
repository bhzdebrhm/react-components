import classNames from 'classnames';
import React from 'react';
import { useEmotion } from '@bhzdebrhm/use-emotion';

export const Grid = React.forwardRef((
    props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & any, 
    ref: React.LegacyRef<HTMLDivElement> | undefined): React.ReactElement => {
    const {
        templateAreas,
        gap,
        rowGap,
        columnGap,
        column,
        row,
        autoFlow,
        autoRows,
        templateRows,
        autoColumns,
        templateColumns,
        className,
        ...rest
    } = props

    const styles = React.useMemo(() => (
        {
            display: "grid",
            gridTemplateAreas: templateAreas,
            gridGap: gap,
            gridRowGap: rowGap,
            gridColumnGap: columnGap,
            gridAutoColumns: autoColumns,
            gridColumn: column,
            gridRow: row,
            gridAutoFlow: autoFlow,
            gridAutoRows: autoRows,
            gridTemplateRows: templateRows,
            gridTemplateColumns: templateColumns,
        }
    ), [templateAreas,
        gap,  
        rowGap, 
        columnGap,
         autoColumns,
          column,
           row,
           autoFlow,
            autoRows, 
            templateRows , 
            templateColumns])


    const [computedStyles] = useEmotion(styles)

    return <div ref={ref} className={classNames(computedStyles, className)} {...rest} />
})

