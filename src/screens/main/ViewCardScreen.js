import React from 'react';

import { CardDetailsGrid } from '../../components/card/CardDetailsGrid';
import { YolnguCardPreview } from '../../components/card/YolnguCardPreview';
import { Card } from '../../components/ui/Card';
import { Screen } from '../../components/ui/Screen';
import { StatusBanner } from '../../components/ui/StatusBanner';
import { useDemo } from '../../context/DemoContext';

export function ViewCardScreen() {
  const { applicationStatus } = useDemo();
  const approved = applicationStatus === 'approved';

  return (
    <Screen
      title="View Card"
      tabScreen
      subtitle="Your card only appears here after an application has been approved and card details exist."
    >
      {approved ? (
        <>
          <YolnguCardPreview />
          <CardDetailsGrid />
        </>
      ) : (
        <Card>
          <StatusBanner
            tone="warning"
            title="Card not issued yet"
            message="Move the demo state to approved after admin review to show the digital card here."
          />
        </Card>
      )}
    </Screen>
  );
}
