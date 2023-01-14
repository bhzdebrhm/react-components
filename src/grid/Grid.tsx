import classNames from 'classnames';
import React from 'react';
import { loadStyle, themeEnvironment, usePreLoadedStyle } from '@bhzdebrhm/use-emotion';

interface GridProps {
    templateAreas: string,
    gap: string,
    rowGap: string,
    columnGap: string,
    column: string,
    row: string,
    autoFlow: string,
    autoRows: string,
    templateRows: string,
    autoColumns: string,
    templateColumns: string,
}

const gridFn = (props: GridProps) => ({
    display: "grid",
    ...props
})

const loadedStyle = loadStyle<any, any, any>(themeEnvironment, gridFn)

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
    const [gridStyle] = usePreLoadedStyle(loadedStyle, {
        templateAreas,
        gap,  
        rowGap, 
        columnGap,
        autoColumns,
        column,
        row,
        autoFlow,
        autoRows, 
        templateRows , 
        templateColumns
    });
  

    return <div ref={ref} className={classNames(gridStyle, className)} {...rest} />
})

