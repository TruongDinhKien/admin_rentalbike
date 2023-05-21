import { useState, FC, ReactElement } from 'react'
import { Box, CardActions, Collapse, Divider, IconButton, Tooltip } from '@mui/material'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { SyntaxHighlight } from './SyntaxHighlight'
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined'
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined'

type HighlighterProps = {
  children?: ReactElement
  codeHighlight?: any
  main?: boolean
}

export const Highlighter: FC<HighlighterProps> = ({ children }) => {
  const [highlight, setHighlight] = useState(false)

  return (
    <Box sx={{ position: 'relative' }}>
      <CardActions sx={{ justifyContent: 'flex-end', p: 1, mb: highlight ? 1 : 0 }}>
        <Box sx={{ display: 'flex', position: 'inherit', right: 0, top: 6 }}>
          <CopyToClipboard
            text={reactElementToJSXString(children, {
              showFunctions: true,
              maxInlineAttributesLineLength: 100,
            })}
          >
            <Tooltip title="Copy the source" placement="top-end">
              <IconButton color="secondary" size="small" sx={{ fontSize: '0.875rem' }}>
                <ContentCopyOutlinedIcon />
              </IconButton>
            </Tooltip>
          </CopyToClipboard>
          <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 1 }} />
          <Tooltip title="Show the source" placement="top-end">
            <IconButton
              sx={{ fontSize: '0.875rem' }}
              size="small"
              color={highlight ? 'primary' : 'secondary'}
              onClick={() => setHighlight(!highlight)}
            >
              <FolderCopyOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </CardActions>
      <Collapse in={highlight}>
        {highlight && (
          <SyntaxHighlight>
            {reactElementToJSXString(children, {
              showFunctions: true,
              showDefaultProps: false,
              maxInlineAttributesLineLength: 100,
            })}
          </SyntaxHighlight>
        )}
      </Collapse>
    </Box>
  )
}
