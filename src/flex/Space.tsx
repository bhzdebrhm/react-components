import classNames from 'classnames';
import React from 'react';
import { loadStyle, themeEnvironment, usePreLoadedStyle } from '@bhzdebrhm/use-emotion';

interface SpaceProps {
    className?: string
}


const spaceStyle = {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch",
}


const loadedStyle = loadStyle<any, any, any>(themeEnvironment, spaceStyle)

export const Space: React.FC<SpaceProps> = (props): React.ReactElement => {
    const { className } = props;
    const [spaceStyle] = usePreLoadedStyle(loadedStyle)

    return <div className={classNames(spaceStyle, className)} />
}