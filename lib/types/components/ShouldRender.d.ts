import React, { ReactElement } from 'react';
declare type ShouldRenderProps = {
    if: boolean;
    children: ReactElement;
};
/**
 * @name ShouldRender
 * @param {boolean} props.if if true or truthy, the children element is rendered
 * @param {ReactElement} props.children Children element/component to be rendered
 */
export declare const ShouldRender: React.FC<ShouldRenderProps>;
export {};
