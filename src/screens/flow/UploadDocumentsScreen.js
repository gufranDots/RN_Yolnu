import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { FilePickerButton } from '../../components/ui/FilePickerButton';
import { Screen } from '../../components/ui/Screen';
import { StatusBanner } from '../../components/ui/StatusBanner';
import { useDemo } from '../../context/DemoContext';
import { MainRoutes } from '../../navigation/routes';

export function UploadDocumentsScreen() {
  const navigation = useNavigation();
  const { applicationDraft, updateApplicationDraft, showInvalidFileError } = useDemo();

  return (
    <Screen title="Upload documents" showBack subtitle="Select the recognised training files that support your application.">
      {showInvalidFileError ? (
        <StatusBanner
          tone="error"
          title="Invalid file"
          message="This demo state shows the wrong type or size error from the flowchart."
        />
      ) : null}
      <Card>
        <FilePickerButton
          label="Select training file"
          fileName={applicationDraft.trainingFileName}
          onPress={() => updateApplicationDraft({ trainingFileName: 'recognised-training.pdf' })}
        />
        <Button title="Continue to review" onPress={() => navigation.navigate(MainRoutes.SubmitApplication)} />
      </Card>
    </Screen>
  );
}
