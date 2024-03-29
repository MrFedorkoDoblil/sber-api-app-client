/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UploadImport } from './routes/upload'
import { Route as TableImport } from './routes/table'
import { Route as SpinImport } from './routes/spin'
import { Route as ProgresImport } from './routes/progres'
import { Route as FormImport } from './routes/form'
import { Route as DatePickerImport } from './routes/datePicker'
import { Route as ComplexUplImport } from './routes/complexUpl'
import { Route as ButtonImport } from './routes/button'
import { Route as IndexImport } from './routes/index'
import { Route as TestIndexImport } from './routes/test/index'

// Create/Update Routes

const UploadRoute = UploadImport.update({
  path: '/upload',
  getParentRoute: () => rootRoute,
} as any)

const TableRoute = TableImport.update({
  path: '/table',
  getParentRoute: () => rootRoute,
} as any)

const SpinRoute = SpinImport.update({
  path: '/spin',
  getParentRoute: () => rootRoute,
} as any)

const ProgresRoute = ProgresImport.update({
  path: '/progres',
  getParentRoute: () => rootRoute,
} as any)

const FormRoute = FormImport.update({
  path: '/form',
  getParentRoute: () => rootRoute,
} as any)

const DatePickerRoute = DatePickerImport.update({
  path: '/datePicker',
  getParentRoute: () => rootRoute,
} as any)

const ComplexUplRoute = ComplexUplImport.update({
  path: '/complexUpl',
  getParentRoute: () => rootRoute,
} as any)

const ButtonRoute = ButtonImport.update({
  path: '/button',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TestIndexRoute = TestIndexImport.update({
  path: '/test/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/button': {
      preLoaderRoute: typeof ButtonImport
      parentRoute: typeof rootRoute
    }
    '/complexUpl': {
      preLoaderRoute: typeof ComplexUplImport
      parentRoute: typeof rootRoute
    }
    '/datePicker': {
      preLoaderRoute: typeof DatePickerImport
      parentRoute: typeof rootRoute
    }
    '/form': {
      preLoaderRoute: typeof FormImport
      parentRoute: typeof rootRoute
    }
    '/progres': {
      preLoaderRoute: typeof ProgresImport
      parentRoute: typeof rootRoute
    }
    '/spin': {
      preLoaderRoute: typeof SpinImport
      parentRoute: typeof rootRoute
    }
    '/table': {
      preLoaderRoute: typeof TableImport
      parentRoute: typeof rootRoute
    }
    '/upload': {
      preLoaderRoute: typeof UploadImport
      parentRoute: typeof rootRoute
    }
    '/test/': {
      preLoaderRoute: typeof TestIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  ButtonRoute,
  ComplexUplRoute,
  DatePickerRoute,
  FormRoute,
  ProgresRoute,
  SpinRoute,
  TableRoute,
  UploadRoute,
  TestIndexRoute,
])

/* prettier-ignore-end */
