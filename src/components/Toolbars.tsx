import { TopToolbar, ListButton, CreateButton } from 'react-admin'

export const ActionButton = () => {
  return (
    <TopToolbar>
      <ListButton />
      <CreateButton />
    </TopToolbar>
  )
}

export const BackToListBtn = () => {
  return (
    <TopToolbar>
      <ListButton />
    </TopToolbar>
  )
}
