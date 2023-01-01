import React from 'react';

interface ComponentWrapperProps {
    condition?: boolean;
    wrap: (children: React.ReactElement | React.ReactNode) => React.ReactElement;
    wrapFalsy?: (children: React.ReactElement | React.ReactNode) => React.ReactElement;
    children: React.ReactElement
}

export const ComponentWrapper = React.forwardRef((props: React.PropsWithChildren<ComponentWrapperProps>, ref: React.LegacyRef<HTMLDivElement> | undefined): React.ReactElement => {
    const { condition, wrap, wrapFalsy, children, ...restProps } = props;
    return (
        <div ref={ref} {...restProps}>
            {condition ? wrap(children) : wrapFalsy ? wrapFalsy(children) : children}
        </div>
    )
})