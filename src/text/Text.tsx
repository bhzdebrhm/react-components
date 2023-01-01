import classNames from 'classnames';
import React from 'react';
import { useEmotion } from '@bhzdebrhm/use-emotion';

interface Props {
    className?: string;
    style?: React.CSSProperties | Record<string, unknown>;
    fontSize?: any,
    fontWeight?: any,
    letterSpacing?: any,
    lineHeight?: any,
    // TODO: place color types
    color?: string,
    fill?: string,
    flex?: boolean,
    length?: number,
    tail?: string,
    hover?: boolean
}


// React.FC<Props & React.HTMLAttributes<HTMLDivElement>>
const Text = React.forwardRef((props: React.PropsWithChildren<Props & React.HTMLAttributes<HTMLDivElement>>, ref: React.LegacyRef<HTMLDivElement> | undefined): React.ReactElement => {
    const { children, style, fontSize = "body", hover, fill, fontWeight, letterSpacing, lineHeight, color, className, flex = false, ...restProps } = props;

    const withFlex = React.useMemo(() => {
        return flex ? {
            display: "flex",
            alignItems: "center",
        } : {}
    }, [flex])


    const [textStyle, setTextStyle] = useEmotion({
        fontSize,
        fontWeight,
        letterSpacing,
        lineHeight,
        color,
        all: {
            fill,
        },
        ...(hover && color ? {
            cursor: "pointer",
            hover: {
                //TODO: color problem
                color: `${color.split(".")[0]}.700`
            }
        } : {}),
        ...(hover && fill ? {
            cursor: "pointer",
            hover: {
                all: {
                    //TODO: color problem
                    fill: `${fill.split(".")[0]}.700`
                },

            }
        } : {}),
        ...withFlex
    });


    const [style_, setStyle_] = useEmotion(style || {});


    React.useEffect(() => {
        setStyle_((prevStyle: any) => {
            style && Object.entries(style).forEach(([key, value]) => {
                //@ts-ignore
                if (prevStyle && prevStyle?.[key]) {
                    //@ts-ignore
                    prevStyle[key] = value
                }
            })
        })
    }, [style, setStyle_])

    React.useEffect(() => {
        setTextStyle((oldStyle: any) => {
            oldStyle.color = color;
            if (hover) {
                oldStyle.cursor = "pointer";
                if (color) {
                    oldStyle.hover = {
                        color: `${color.split(".")[0]}.700`
                    }
                }
                if (fill) {
                    oldStyle.hover = {
                        all: {
                            //TODO: color problem
                            fill: `${fill.split(".")[0]}.700`
                        },
                    }
                }
            } else if (!hover) {
                //@ts-ignore
                oldStyle.hover = null;
                oldStyle.cursor = undefined;
            }
        })
    }, [color, setTextStyle, fill, hover])


    return (
        <div ref={ref} className={classNames(textStyle, className, style_)} {...restProps}>{children}</div>
    )
})

export default Text;