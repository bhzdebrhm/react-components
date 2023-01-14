import classNames from 'classnames';
import {FullSpace} from '../fullSpace';
import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useEmotion } from '@bhzdebrhm/use-emotion';

import { ParentSize } from '@visx/responsive';

interface ScrollbarProps {
    className?: string;
    style?: React.CSSProperties;
}


export const Scrollbar = React.forwardRef((props: React.PropsWithChildren<ScrollbarProps>, ref): React.ReactElement => {
    const { children, style, className } = props;


    const [scrollbarStyle] = useEmotion({
        direction: "ltr"
    });

    const [childStyle] = useEmotion({
        direction: "rtl"
    });


    return (
        <ParentSize className={classNames(scrollbarStyle, className)} {...(style && { style })}>
            {({ height }) => {
                return (
                    //@ts-ignore
                    <Scrollbars ref={ref} style={{ height }} autoHide>
                        <FullSpace className={childStyle}>
                            {children}
                        </FullSpace>
                    </Scrollbars>
                )
            }}
        </ParentSize>
    )
})