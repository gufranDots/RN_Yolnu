import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ApplicationRequirements } from '../../components/application/ApplicationRequirements';
import { CardLevelSelector } from '../../components/application/CardLevelSelector';
import { LatestApplicationCard } from '../../components/application/LatestApplicationCard';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { FilePickerButton } from '../../components/ui/FilePickerButton';
import { Input } from '../../components/ui/Input';
import { Screen } from '../../components/ui/Screen';
import { StatusBanner } from '../../components/ui/StatusBanner';
import { useDemo } from '../../context/DemoContext';
import { MainRoutes } from '../../navigation/routes';
import { colors, typography } from '../../theme/tokens';

export function ApplyRenewScreen() {
  const navigation = useNavigation();
  const { profileComplete, applicationStatus, applicationDraft, updateApplicationDraft } = useDemo();

  return (
    <Screen
      title="Apply / Renew"
      tabScreen
      subtitle="Submit a new application or renewal once your profile information is complete."
    >
      {!profileComplete ? (
        <StatusBanner
          tone="error"
          title="Missing info"
          message="Profile completion is required before the application flow can continue."
        />
      ) : null}
      <Card>
        <Text style={styles.title}>Application form</Text>
        <Input
          label="Application type"
          value={applicationDraft.type}
          onChangeText={(type) => updateApplicationDraft({ type })}
        />
        <Text style={styles.label}>Card level</Text>
        <CardLevelSelector
          value={applicationDraft.cardLevelId}
          onChange={(cardLevelId) => updateApplicationDraft({ cardLevelId })}
        />
        <Input
          label="Yolnu referees"
          value={applicationDraft.referees}
          onChangeText={(referees) => updateApplicationDraft({ referees })}
          multiline
        />
        <FilePickerButton
          label="Training documentation"
          fileName={applicationDraft.trainingFileName}
          onPress={() => updateApplicationDraft({ trainingFileName: 'updated-training-file.pdf' })}
        />
        <Button
          title="Continue to upload"
          disabled={!profileComplete}
          onPress={() => navigation.navigate(MainRoutes.UploadDocuments)}
        />
      </Card>
      <LatestApplicationCard status={applicationStatus} />
      <ApplicationRequirements />
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    ...typography.h3,
  },
  label: {
    color: colors.text,
    ...typography.caption,
  },
});
