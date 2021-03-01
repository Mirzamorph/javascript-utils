/**
 * Компактная функция для работы с DOM
 */

function createRoot(root) {
    if (!root) {
        root = document
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
