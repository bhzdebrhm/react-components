import classNames from 'classnames';
import React from 'react';

import { useEmotion } from '@bhzdebrhm/use-emotion';

export const Flex = React.forwardRef((props: any, ref: any) => {
    const { direction, align, justify, wrap, basis, grow, shrink, gap, className, style, ...rest } =
        props

    const styles = React.useMemo(() => ({
        display: "flex",
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
        gap,
    }), [direction, align, justify,wrap,basis, grow,shrink, gap])

    const [flexStyles] = useEmotion(styles);


    const [style_] = useEmotion(style)

    return <div ref={ref} className={classNames(className, flexStyles, style_)} {...rest} />
})
