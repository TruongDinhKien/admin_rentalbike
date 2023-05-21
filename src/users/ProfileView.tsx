import React from 'react';
import { Show, SimpleShowLayout, TextField, ShowProps } from 'react-admin';

interface Profile {
  id: number;
  name: string;
  email: string;
  // Add other fields here
}

const ProfileView: React.FC<ShowProps<Profile>> = (props) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="email" />
        {/* Add other fields you want to display */}
      </SimpleShowLayout>
    </Show>
  );
};

export default ProfileView;
