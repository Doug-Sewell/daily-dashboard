import React, {FC, ReactElement} from 'react'
import {render, RenderOptions} from '@testing-library/react'

const ProvidersWrapper: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <>
        {children}
    </>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: ProvidersWrapper, ...options})

export * from '@testing-library/react'
export {customRender as render}
export * from 'vitest'