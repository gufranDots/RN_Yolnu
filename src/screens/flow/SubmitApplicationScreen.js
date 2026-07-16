import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';

import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { InfoTile } from '../../components/ui/InfoTile';
import { Screen } from '../../components/ui/Screen';
import { useDemo } from '../../context/DemoContext';
import { MainRoutes } from '../../navigation/routes';
import { colors, spacing, typography } from '../../theme/tokens';

export function SubmitApplicationScreen() {
  const navigation = useNavigation();
  const { applicationDraft, submitApplication } = useDemo();

  return (
    <Screen title="Submit application" showBack subtitle="Review the selected card level, files, and references before sending.">
      <Card>
        <Text style={styles.title}>Submission summary</Text>
        <View style={styles.grid}>
          <InfoTile label="Type" value={applicationDraft.type} />
          <InfoTile label="Card level" value={applicationDraft.cardLevelId} />
          <InfoTile label="Training file" value={applicationDraft.trainingFileName} />
          <InfoTile label="Referees" value={applicationDraft.referees} />
        </View>
        <Button
          title="Submit for admin review"
          subtitle="Moves the application into pending status"
          onPress={() => {
            submitApplication();
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: MainRoutes.ApplicationStatus }],
              })
            );
          }}
        />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    ...typography.h3,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
});
