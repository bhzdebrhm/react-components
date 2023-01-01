import classNames from 'classnames';
import React from 'react';
import { useEmotion } from '@bhzdebrhm/use-emotion';

export const FullSpace = React.forwardRef((props: React.PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement>>, ref: React.LegacyRef<HTMLDivElement> | undefined) => {
    const { children, className, ...restProps } = props;

    const [fullSpaceStyle] = useEmotion({
        width: "full",
        height: "full",
    })


    return <div className={classNames(className, fullSpaceStyle)} ref={ref} {...restProps}>{children}</div>
})