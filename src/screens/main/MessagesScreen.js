import React from 'react';

import { MessageCard } from '../../components/messages/MessageCard';
import { Screen } from '../../components/ui/Screen';
import { messages } from '../../data/mock';

export function MessagesScreen() {
  return (
    <Screen
      title="Messages"
      tabScreen
      subtitle="Read updates and feedback sent to you by administrators about your applications."
    >
      {messages.map((message) => (
        <MessageCard key={message.id} message={message} />
      ))}
    </Screen>
  );
}
