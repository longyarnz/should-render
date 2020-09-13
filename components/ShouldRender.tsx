import React, { ReactElement } from 'react'

type ShouldRenderProps = {
  if: boolean
  children: ReactElement
}

/**
 * @name ShouldRender
 * @param {boolean} props.if if true or truthy, the children element is rendered
 * @param {ReactElement} props.children Children element/component to be rendered
 */
export const ShouldRender: React.FC<ShouldRenderProps> = (props) => {
  return props.if ? (
    props.children
  ) : null;
}
