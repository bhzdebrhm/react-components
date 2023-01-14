import classNames from 'classnames';
import React from 'react';
import { loadStyle, themeEnvironment, usePreLoadedStyle } from '@bhzdebrhm/use-emotion';

const fullSpaceStyle = {
    width: "full",
    height: "full",
}

const loadedStyle = loadStyle<any, any ,any>(themeEnvironment, fullSpaceStyle)

export const FullSpace = React.forwardRef((props: React.PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement>>, ref: React.LegacyRef<HTMLDivElement> | undefined) => {
    const { children, className, ...restProps } = props;
    const [fullSpaceStyle] = usePreLoadedStyle(loadedStyle);


    return <div className={classNames(className, fullSpaceStyle)} ref={ref} {...restProps}>{children}</div>
})