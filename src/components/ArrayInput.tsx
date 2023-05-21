import { FC, Fragment, cloneElement, useState, useEffect } from 'react'
import { ArrayInputProps, GroupInputProps } from './types'
import { useInput } from 'react-admin'
import { IconButton, Grid, GridSize } from '@mui/material'
import _ from 'lodash'
import AddIcon from '@mui/icons-material/Add'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'

export const GroupInput: FC<GroupInputProps> = ({ children, onChange, value, ...props }) => {
  const grid = Number(Math.floor(12 / children.length)) as GridSize
  return (
    <Grid container spacing={2}>
      {!_.isEmpty(children) &&
        children.map((child: any, idx: number) => {
          const name = _.get(child, 'props.name')
          const val = _.get(value, name)
          return (
            <Grid item key={idx} md={grid} xs={grid}>
              {cloneElement(child, {
                ...props,
                value: val,
                record: value,
                onChange: (evt: any) => {
                  if (onChange) {
                    onChange(evt, idx)
                  }
                },
              })}
            </Grid>
          )
        })}
    </Grid>
  )
}

export const ArrayInput: FC<ArrayInputProps> = ({ source, children, isClearActions = false, ...props }) => {
  const [items, setItems] = useState<(Record<string, any> | undefined)[]>([])

  const {
    field,
    fieldState: { isTouched, invalid, error },
    formState: { isSubmitted },
    isRequired,
  } = useInput({ ...props, source })

  const add = () => {
    const { value } = field
    if (_.isEmpty(value)) {
      field.onChange([{}])
    } else {
      field.onChange([...value, {}])
    }
  }

  const remove = (idx: number) => {
    items[idx] = undefined
    field.onChange([...items])
  }

  const onChange = (evt: any, idx: number) => {
    const { value, name } = evt.target
    let current: Record<string, any> = items[idx] || {}
    current = { ...current, [name]: value }
    items[idx] = current
    field.onChange(items)
  }

  useEffect(() => {
    let { value } = field
    if (_.isEmpty(value)) {
      value = []
    }
    setItems([...value])
  }, [field.value])

  return (
    <Fragment>
      {!_.isEmpty(items) &&
        items.map((item: any, idx: number) => {
          return (
            item && (
              <Grid container key={idx}>
                <Grid item md={10}>
                  {cloneElement(children, {
                    onChange: (evt: any) => {
                      onChange(evt, idx)
                    },
                    value: items[idx],
                  })}
                </Grid>

                {!isClearActions && (
                  <Grid item>
                    <IconButton onClick={() => remove(idx)}>
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                  </Grid>
                )}
              </Grid>
            )
          )
        })}
      {!isClearActions && (
        <IconButton onClick={add}>
          <input hidden accept="image/*" type="file" />
          <AddIcon />
        </IconButton>
      )}
    </Fragment>
  )
}
