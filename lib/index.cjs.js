'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * @name ShouldRender
 * @param {any} if resolves to true or truthy value and determines whether the children element is rendered or not
 * @param {ReactElement} children Children element/component to be rendered
 */
const ShouldRender = (props) => {
    return props.if ? props.children : null;
};

exports.ShouldRender = ShouldRender;
