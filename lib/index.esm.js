/**
 * @name ShouldRender
 * @param {boolean} props.if if true or truthy, the children element is rendered
 * @param {ReactElement} props.children Children element/component to be rendered
 */
const ShouldRender = (props) => {
    return props.if ? (props.children) : null;
};

export { ShouldRender };
