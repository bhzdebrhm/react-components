import classNames from 'classnames';
import {FullSpace} from '../fullSpace';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { loadStyle, themeEnvironment, usePreLoadedStyle } from '@bhzdebrhm/use-emotion';

import { ParentSize } from '@visx/responsive';

interface ScrollbarProps {
    className?: string;
    style?: React.CSSProperties;
}

const scrollDir = {
    direction: "ltr"
};

const loaded = loadStyle<any, any ,any>(themeEnvironment, scrollDir)

export const Scrollbar = React.forwardRef((props: React.PropsWithChildren<ScrollbarProps>, ref): React.ReactElement => {
    const { children, style, className } = props;
    const [dirClassName] = usePreLoadedStyle(loaded);

    return (
        <ParentSize className={classNames(dirClassName, className)} {...(style && { style })}>
            {({ height }) => {
                return (
                    //@ts-ignore
                    <Scrollbars ref={ref} style={{ height }} autoHide>
                        <FullSpace className={dirClassName}>
                            {children}
                        </FullSpace>
                    </Scrollbars>
                )
            }}
        </ParentSize>
    )
})