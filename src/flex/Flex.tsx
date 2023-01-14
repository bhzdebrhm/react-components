import classNames from 'classnames';
import React from 'react';
import { loadStyle, usePreLoadedStyle, themeEnvironment } from '@bhzdebrhm/use-emotion';

import { useEmotion } from '@bhzdebrhm/use-emotion';


interface FlexProps {
    direction?: string, 
    align?: string,
    justify?: string,
    wrap?: string,
    basis?: string,
    grow?: string,
    shrink?: string,
    gap?: string,
}


const flexFn = (props: FlexProps) => ({
        display: "flex",
        flexDirection: props?.direction,
        alignItems: props?.align,
        justifyContent: props?.justify,
        flexWrap: props?.wrap,
        flexBasis: props?.basis,
        flexGrow: props?.grow,
        flexShrink: props?.shrink,
        gap: props?.gap,
})


const loadedStyle = loadStyle<any, any,any>(themeEnvironment.theme, flexFn)


export const Flex = React.forwardRef((props: any, ref: any) => {
    const { direction, align, justify, wrap, basis, grow, shrink, gap, className, style, ...rest } =
        props
    const [flexStyle] = usePreLoadedStyle(loadedStyle, {direction, align, justify,wrap,basis, grow,shrink, gap});


    const [style_] = useEmotion(style)

    return <div ref={ref} className={classNames(className, flexStyle, style_)} {...rest} />
})
