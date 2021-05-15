import { Block } from '../services/router/types'

async function render(query: string, block: Block): Promise<Element | null> {
  const root = document.querySelector(query)
  if (root) {
    root.innerHTML = await block.template
    if (block.init) {
      block.init()
    }
  }
  return root
}

export {
  render,
}
