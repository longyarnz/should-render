/**
 * @name ShouldRender
 * @param {any} if resolves to true or truthy value and determines whether the children element is rendered or not
 * @param {ReactElement} children Children element/component to be rendered
 */
const ShouldRender = (props) => {
    return props.if ? props.children : null;
};

export { ShouldRender };
