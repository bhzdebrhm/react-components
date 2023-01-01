import classNames from 'classnames';
import React from 'react';
import { useEmotion } from '@bhzdebrhm/use-emotion';

interface SpaceProps {
    className?: string
}

export const Space: React.FC<SpaceProps> = (props): React.ReactElement => {
    const { className } = props;
    const [spaceStyle] = useEmotion({
        flex: 1,
        justifySelf: "stretch",
        alignSelf: "stretch",
    })


    return <div className={classNames(spaceStyle, className)} />
}