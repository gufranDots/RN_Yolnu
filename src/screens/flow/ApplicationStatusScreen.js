import React from 'react';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { rejectionReason } from '../../data/mock';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Screen } from '../../components/ui/Screen';
import { StatusBanner } from '../../components/ui/StatusBanner';
import { useDemo } from '../../context/DemoContext';
import { MainRoutes, TabRoutes } from '../../navigation/routes';

function resetToTab(navigation, tabName) {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: MainRoutes.MainTabs,
          state: {
            routes: [{ name: tabName }],
          },
        },
      ],
    })
  );
}

export function ApplicationStatusScreen() {
  const navigation = useNavigation();
  const { applicationStatus } = useDemo();

  const banner =
    applicationStatus === 'approved'
      ? {
          tone: 'success',
          title: 'Card issued',
          message: 'Your application has been approved and the digital card is now ready to view.',
        }
      : applicationStatus === 'rejected'
        ? {
            tone: 'error',
            title: 'Rejected',
            message: rejectionReason,
          }
        : {
            tone: 'warning',
            title: 'Admin review',
            message: 'Your application is pending review by the Dilak Council admin team.',
          };

  return (
    <Screen title="Application status" showBack subtitle="This screen reflects the final branch of the demo flow.">
      <Card>
        <StatusBanner tone={banner.tone} title={banner.title} message={banner.message} />
        {applicationStatus === 'approved' ? (
          <Button title="View card" onPress={() => resetToTab(navigation, TabRoutes.ViewCard)} />
        ) : applicationStatus === 'rejected' ? (
          <Button title="Apply again" onPress={() => resetToTab(navigation, TabRoutes.ApplyRenew)} />
        ) : (
          <Button title="Back to portal" onPress={() => resetToTab(navigation, TabRoutes.Messages)} />
        )}
      </Card>
    </Screen>
  );
}
