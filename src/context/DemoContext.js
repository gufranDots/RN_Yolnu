import React, { createContext, useContext, useMemo, useState } from 'react';

import { cardLevels, mockUser } from '../data/mock';

const DemoContext = createContext(null);

const initialApplication = {
  type: 'New application',
  cardLevelId: cardLevels[1].id,
  trainingFileName: 'training-certificate.pdf',
  referees: 'Yolnu Referee One, Yolnu Referee Two',
};

export function DemoProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileComplete, setProfileComplete] = useState(true);
  const [applicationStatus, setApplicationStatus] = useState('approved');
  const [showInvalidFileError, setShowInvalidFileError] = useState(false);
  const [profile, setProfile] = useState(mockUser);
  const [applicationDraft, setApplicationDraft] = useState(initialApplication);

  const value = useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
      login: () => setIsLoggedIn(true),
      logout: () => setIsLoggedIn(false),
      profileComplete,
      setProfileComplete,
      applicationStatus,
      setApplicationStatus,
      showInvalidFileError,
      setShowInvalidFileError,
      profile,
      updateProfile: (updates) => setProfile((current) => ({ ...current, ...updates })),
      applicationDraft,
      updateApplicationDraft: (updates) =>
        setApplicationDraft((current) => ({ ...current, ...updates })),
      resetDemo: () => {
        setIsLoggedIn(false);
        setProfileComplete(true);
        setApplicationStatus('approved');
        setShowInvalidFileError(false);
        setProfile(mockUser);
        setApplicationDraft(initialApplication);
      },
      submitApplication: () => setApplicationStatus('pending'),
    }),
    [applicationDraft, applicationStatus, isLoggedIn, profile, profileComplete, showInvalidFileError]
  );

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const value = useContext(DemoContext);
  if (!value) {
    throw new Error('useDemo must be used inside DemoProvider');
  }
  return value;
}
