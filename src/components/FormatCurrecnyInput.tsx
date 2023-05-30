import { FC, SyntheticEvent, useEffect, useState } from 'react'
import { NumericFormat } from 'react-number-format'
import { useTranslate, useInput } from 'react-admin'
import { TextField } from '@mui/material'

export type FormatCurrencyInputProps = {
  // inputRef?: RefObject<ReactNode>
  value?: string | number | Record<string, any> | any
  onChange?: (event: SyntheticEvent) => void
  suffix?: string
  prefix?: string
  min?: number
  max?: number
  thousandSeparator?: string
  label?: string
  source: string
  fullWidth?: boolean
  InputProps?: any
  sx?: any
  required?: boolean
  defaultValue?: string | number | Record<string, any> | any
  placeholder?: string
  helperText?: string
  size?: 'medium' | 'small'
  allowNegative?: boolean
  disabled?: boolean
}

export const FormatCurrencyInput: FC<FormatCurrencyInputProps> = ({
  onChange,
  suffix = '',
  prefix = '',
  min = 0,
  max,
  thousandSeparator,
  source,
  fullWidth,
  InputProps,
  required = false,
  label = '',
  placeholder,
  helperText,
  sx = { mb: 2 },
  defaultValue,
  size = 'small',
  allowNegative = false,
  disabled = false,
  ...props
}) => {
  const translate = useTranslate()
  const [value, setValue] = useState<string | number>()

  const {
    field,
    fieldState: { isTouched, error },
  } = useInput({
    source,
    ...props,
  })

  const onChangeValue = (values: any) => {
    const { floatValue } = values
    field.onChange(floatValue ?? null)
  }

  useEffect(() => {
    const val = field.value && field.value !== '' ? field.value : defaultValue
    setValue(val ? Number(val) : '')
  }, [field.value])

  return (
    <NumericFormat
      value={value}
      isAllowed={(values: any) => {
        const { floatValue } = values
        if (floatValue < min) {
          return false
        }
        if (max && floatValue > max) {
          return false
        }

        return true
      }}
      onValueChange={onChangeValue}
      thousandSeparator={thousandSeparator}
      label={label ? translate(label) : ''}
      prefix={prefix}
      suffix={suffix}
      allowNegative={allowNegative}
      helperText={isTouched && error ? error.message : ''}
      customInput={TextField}
      fullWidth={fullWidth}
      InputProps={InputProps}
      required={required}
      placeholder={placeholder}
      size={size}
      sx={sx}
      disabled={disabled}
    />
  )
}
