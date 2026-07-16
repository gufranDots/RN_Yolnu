import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { ProfileForm } from '../../components/profile/ProfileForm';
import { Button } from '../../components/ui/Button';
import { Screen } from '../../components/ui/Screen';
import { StatusBanner } from '../../components/ui/StatusBanner';
import { useDemo } from '../../context/DemoContext';
import { MainRoutes } from '../../navigation/routes';

export function ProfileScreen() {
  const navigation = useNavigation();
  const { profileComplete, logout } = useDemo();

  return (
    <Screen
      title="Profile"
      tabScreen
      subtitle="Complete the required details here before you apply for a new card or renewal."
    >
      <StatusBanner
        tone={profileComplete ? 'success' : 'error'}
        title={profileComplete ? 'Profile complete' : 'Missing required information'}
        message={
          profileComplete
            ? 'You can now submit a new application or renewal.'
            : 'Complete the highlighted profile details to unlock the application flow.'
        }
      />
      <ProfileForm onChangePassword={() => navigation.navigate(MainRoutes.ChangePassword)} />
      <Button title="Change Password" variant="outline" onPress={() => navigation.navigate(MainRoutes.ChangePassword)} />
      <Button title="Logout" variant="outline" onPress={logout} />
    </Screen>
  );
}
