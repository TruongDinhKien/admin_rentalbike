import { FC } from 'react'
import { useRecordContext, RecordContextProvider, TextField, useGetOne } from 'react-admin'

export interface ReferenceFieldProps {
  source?: string
  record?: { id: number; [prop: string]: any }
  reference: string
  field: string
  label?: string
  link?: boolean | string | any
  sortable?: boolean
  render?: (val: any) => any
  emptyText?: string
  source1?: string
  reference1?: string
}

export const ReferenceField: FC<ReferenceFieldProps> = ({
  source = 'id',
  reference,
  field,
  source1,
  reference1,
  render,
}) => {
  const record = useRecordContext()

  if (source1) {
    reference = record[source1] + '/' + reference
  }
  if (reference1) {
    reference = reference1 + '/' + reference
  }
  const { data, isLoading } = useGetOne(reference, {
    id: record[source],
  })

  if (!data) return null

  return (
    <RecordContextProvider value={data}>
      {render && render(data)}
      {!render && <TextField source={field} />}
    </RecordContextProvider>
  )
}
