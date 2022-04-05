import { createContext } from 'react'

export const commentDataContext = createContext((data: any) => {})

export const CommentCtx = commentDataContext.Provider
