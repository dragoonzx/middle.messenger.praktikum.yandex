/* eslint-disable no-underscore-dangle */
import { render } from '../../utils/render'
import {
  Block,
  BlockType,
  Constructable,
  Props,
} from './types'

class Route<Type> {
  private _pathname: string

  private _blockClass: Constructable<Type>

  private _block: BlockType<Type>

  private _props: Props

  constructor(pathname: string, view: Constructable<Type>, props: Props) {
    this._pathname = pathname
    this._blockClass = view
    this._block = undefined
    this._props = props
  }

  navigate(pathname: string): void {
    if (this.matchPath(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  matchPath(pathname: string): boolean {
    return pathname.split('?')[0] === this._pathname
  }

  async render(): Promise<void> {
    this._block = new this._blockClass() as Type & Block
    await render(this._props.rootQuery, this._block)
  }
}

class Router<Type> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static __instance: any

  routes: Route<Type>[]

  history: History

  _currentRoute: Route<Type> | undefined

  _rootQuery: string

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance
    }

    this.routes = []
    this.history = window.history
    this._currentRoute = undefined
    this._rootQuery = rootQuery

    Router.__instance = this
  }

  use(pathname: string, blockClass: Constructable<Type>): Router<Type> {
    const route = new Route(
      pathname,
      blockClass,
      { 'rootQuery': this._rootQuery },
    ) as Route<Type>
    this.routes.push(route)

    return this
  }

  start(): void {
    window.addEventListener('popstate', () => {
      this._onRoute(window.location.pathname)
    })

    this._onRoute(window.location.pathname)
  }

  private _onRoute(pathname: string): void {
    const route = this.getRoute(pathname)

    if (!route) {
      // window.location.href = '/404.html'
      return
    }

    this._currentRoute = route
    route.render()
  }

  go(pathname: string): void {
    this.history.pushState({}, '', pathname)
    this._onRoute(pathname)
  }

  back(): void {
    this.history.back()
  }

  forward(): void {
    this.history.forward()
  }

  getRoute(pathname: string): Route<Type> | undefined {
    return this.routes.find((route) => route.matchPath(pathname))
  }
}

export {
  Router,
}
