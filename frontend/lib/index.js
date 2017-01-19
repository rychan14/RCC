export const j = (type, props, ...children) => ({type, props, children})
export const extractEventName = (name) => name.slice(2).toLowerCase()
export const isEventProp = (prop) => /^on/.test(prop)
export const setProp = (target, prop, value) => {
  if (isEventProp(prop)) return
  else if (typeof value === 'boolean') setBooleanProp(target, prop, value)
  else target.setAttribute(prop, value)
}
export const removeBooleanProp = (target, prop) => {
  target.removeAttribute(prop)
  target[prop] = false
}
export const removeProp = (target, prop, value) => {
  if (isEventProp(prop)) return
  else if (typeof value === 'boolean') removeBooleanProp(target, prop, value)
  else target.removeAttribute(prop, value)
}
export const setBooleanProp = (target, prop, value) => {
  if (value) {
    target.setAttribute(prop, value)
    target[prop] = true
  } else {
    target[prop] = false
  }
}
export const setProps = (target, props) => {
  Object.keys(props).forEach((prop) => setProp(target, prop, props[prop]))
}
export const updateProp = (target, prop, newVal, oldVal) => {
  if (!newVal) removeProp(target, prop, oldVal)
  else if (!oldVal || newVal !== oldVal) setProp(target, prop, newVal)
}
export const updateProps = (target, newProps, oldProps = {}) => {
  const props = Object.assign({}, newProps, oldProps)
  Object.keys(props).forEach((prop) => {
    updateProp(target, name, newProps[prop], oldProps[prop])
  })
}
export const addEventListeners = (target, props) => {
  Object.keys(props).forEach((prop) => {
    if (isEventProp(prop)) target.addEventListener(extractEventName(prop), props[prop])
  })
}
export const createElement = (node) => {
  if (typeof node === 'string') return document.createTextNode(node)
  const ele = document.createElement(node.type)
  setProps(ele, node.props)
  addEventListeners(ele, node.props)
  node.children
    .map(createElement)
    .forEach(ele.appendChild.bind(ele))
  return ele
}
export const changed = (node1, node2) => typeof node1 !== typeof node2 || typeof node1 === 'string' && node1 !== node2 || node1.type !== node2.type
export const updateElement = (parentE, newNode, oldNode, index = 0) => {
  if (!oldNode) parentE.appendChild(createElement(newNode))
  else if (!newNode) parentE.removeChild(parentE.childNodes[index])
  else if (changed(newNode, oldNode)) parentE.replaceChild(createElement(newNode), parentE.childNodes[index])
  else if (newNode.type) {
    const newLength = newNode.children.length
    const oldLength = oldNode.children.length
    updateProps(parentE.childNodes[index], newNode.props, oldNode.props)
    for (let i = 0; i < newLength || i < oldLength; i++) {
      updateElement(
        parentE.childNodes[index],
        newNode.children[i],
        oldNode.children[i],
        i
      )
    }
  }
}
