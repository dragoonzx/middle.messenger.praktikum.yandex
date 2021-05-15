class Input {
  type: string | undefined

  name: string | undefined

  constructor(type?: string, name?: string) {
    this.type = type
    this.name = name ?? type
  }

  toString(): string {
    if (!this.type) {
      return `input.form__field-input(
                name='${this.name}'
              )
      `
    }
    return `input.form__field-input(
              type='${this.type}'
              name='${this.name}'
            )
    `
  }
}

export { Input }
