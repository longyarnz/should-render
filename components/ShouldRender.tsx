import React, { ReactElement } from 'react'

type ShouldRenderProps = {
  if: any
  children: any
}

/**
 * @name ShouldRender
 * @param {any} if resolves to true or truthy value and determines whether the children element is rendered or not
 * @param {ReactElement} children Children element/component to be rendered
 */
export const ShouldRender: React.FC<ShouldRenderProps> = (props) => {
  return props.if ? props.children : null
}
