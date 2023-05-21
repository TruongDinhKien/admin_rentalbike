import { FC } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

type SyntaxHighlightProps = {
  children: any
}

export const SyntaxHighlight: FC<SyntaxHighlightProps> = ({ children, ...others }) => {
  return (
    <SyntaxHighlighter language="javacript" showLineNumbers style={a11yDark} {...others}>
      {children}
    </SyntaxHighlighter>
  )
}
