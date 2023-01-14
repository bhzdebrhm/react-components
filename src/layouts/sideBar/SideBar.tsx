import { loadStyle, themeEnvironment, usePreLoadedStyle } from '@bhzdebrhm/use-emotion';
import classNames from 'classnames';
import React from 'react';
import { Grid, GridItem } from '../../grid';
import {merge} from 'lodash';
import {Outlet, useOutletContext} from 'react-router-dom';
interface SideBarProps {
    className?: string,
    style?: React.CSSProperties,
}


export interface SidebarOutlet {
    setSidebar: React.Dispatch<React.SetStateAction<React.ReactNode>>,
    setShowSidebar: React.Dispatch<React.SetStateAction<Boolean>>,
    setCols: React.Dispatch<React.SetStateAction<[string, string]>>
}


const sidedLayoutStyle = {
    height: "full",
};


const loadedSidedLayoutStyle = loadStyle<any, any ,any>(themeEnvironment, sidedLayoutStyle)

export const SideBar: React.FC<SideBarProps> = (props): React.ReactElement => {
    const {  className, style } = props;
    const outletContext = useOutletContext();
    const [sidebar, setSidebar] = React.useState<React.ReactNode | null>(null);
    const [showSidebar, setShowSidebar] = React.useState<Boolean>(true);
    const [cols, setCols] = React.useState<[string, string]>(["20rem", "auto"]);
    const [sidedLayoutClassName] = usePreLoadedStyle(loadedSidedLayoutStyle);


    const mergedOutletContext = React.useMemo(() => {
        return merge({setSidebar, setShowSidebar, setCols}, outletContext)
    }, [outletContext, setSidebar, setShowSidebar, setCols])


    return (
        <Grid
            templateRows='repeat(12, 1fr)'
            templateColumns={cols.join(' ')}
            className={classNames(className, sidedLayoutClassName)}
            style={style}
        >
            {
                showSidebar &&
                <GridItem rowSpan={12} colSpan={1}>
                   {sidebar}
                </GridItem>
            }
             <GridItem rowSpan={12} colSpan={showSidebar ? 1 : 2}>
                    <Outlet context={mergedOutletContext}/>
             </GridItem>
        </Grid>
    )
}