class Input {
  type: string | undefined

  constructor(type?: string) {
    this.type = type
  }

  toString(): string {
    if (!this.type) {
      return `input.form__field-input(
                name='login'
              )
      `
    }
    return `input.form__field-input(
              type='${this.type}'
            )
    `
  }
}

export { Input }
