interface Block {
  init?(): void

  template: Promise<string> | string
}

type BlockType<Type> = (Type & Block) | undefined

interface Constructable<Type> {
  new(...args: unknown[]) : Type
}

type Props = {
  rootQuery: string
}

export {
  Block,
  BlockType,
  Constructable,
  Props,
}
