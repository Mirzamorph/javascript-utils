/**
 * A small function to work with DOM
 */

function createRoot(rootSelector) {

    let root = document
    if (rootSelector) {
        const rootEl = document.querySelector(rootSelector)
        if (rootEl) {
            root = rootEl
        } else {
            console.warn(`Root selector "${rootSelector}" wasn't found, using Document instead`)
        }
    }

    return {
        node(selector) {
            return root.querySelector(selector)
        },
        nodes(selector) {
            return Array.from(root.querySelectorAll(selector))
        }
    }
}

// Usage:
// const { node, nodes } = createRoot('header')
// node('nav') <- getting nav from header
