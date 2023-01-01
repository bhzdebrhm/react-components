import classNames from 'classnames';
import { BarLoader } from '../spinners';
import React from 'react';
import { useEmotion } from '@bhzdebrhm/use-emotion';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
    borderRadius?: "md" | null,
    boxShadow?: "one" | "two" | "three" | null,
    overflow?: "hidden" | null,
    border?: "normal" | null,
    borderColor?: "systemBorder" | "systemRed.1000" | null
    className?: string,
    background?: string,
    error?: boolean,
    loading?: boolean,
    success?: true,
    idle?: boolean,
    backdropFilter?: "saturate(180%) blur(20px)",
    style?: React.CSSProperties,
    loadingColor?: string,
    styles?: any,
}   


export const Box = React.forwardRef((props: React.PropsWithChildren<BoxProps>, ref: React.LegacyRef<HTMLDivElement> | undefined): React.ReactElement => {
    const { children, styles, loadingColor = "rgb(50, 173, 230)", style, idle, borderRadius = "md", error, boxShadow = "one", border = null, borderColor = null, overflow = null, background = "systemBackground.secondary.1000", className, loading = false, backdropFilter, ...restProps } = props;



    const [boxStyle, setBoxStyle] = useEmotion({
        position: "relative",
        background,
        boxShadow,
        borderRadius,
        ...(backdropFilter && {
            "@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))": {
                backdropFilter: "saturate(180%) blur(20px)",
                background: `${background.split(".")[0]}.700`,
            }
        }),
        overflow,
        borderColor: `${borderColor} !important`,
        border,
    });

    const [loadingStyle] = useEmotion({
        position: "absolute",
        width: "full",
        height: "full",
        top: 0
    })


    React.useEffect(() => {
        const newBkg = error ? 'systemRed' : idle ? 'systemBrown' : background;
        const whiteColor = (error || idle) ? true : false;
        setBoxStyle((prevStyle: any) => {
            prevStyle.background = newBkg;
            if (whiteColor) {
                prevStyle.all.color = "white"
            }
            if (backdropFilter) {
                prevStyle['@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))'] = {
                    backdropFilter: "saturate(180%) blur(20px)",
                    background: `${newBkg.split(".")[0]}.700`,
                }
            }
        })
    }, [error, background, setBoxStyle, backdropFilter, idle])


    return (
        <div ref={ref} className={classNames(boxStyle, className)} style={style} {...restProps}>
            <BarLoader className={loadingStyle} loading={loading} color={loadingColor} height={3} />
            {children}
        </div>
    )
}
)