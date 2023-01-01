import classNames from 'classnames';
import React from 'react';
import { useEmotion } from '@bhzdebrhm/use-emotion';

interface CloseProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    className?: string,
}

export const Close = React.forwardRef((props: React.PropsWithChildren<CloseProps>, ref: React.LegacyRef<HTMLDivElement> | undefined) => {
    const { className, ...rest } = props;

    const [closeStyle] = useEmotion({
        color: "systemGray.one.1000",
        cursor: 'pointer',
        fontSize: "caption",
        paddingTop: "3px",
        display: "flex",
        alignItems: "center",
        hover: {
            color: "systemGray.red.1000",
        }
    })

    return <div ref={ref} className={classNames(closeStyle, className)} {...rest}>✖</div>
})