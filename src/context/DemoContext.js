import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { cardLevels, mockUser } from '../data/mock';
import { ONBOARDING_VERSION } from '../data/onboarding';

const DemoContext = createContext(null);
const ONBOARDING_STORAGE_KEY = '@yolnu/onboarding-version';

const initialApplication = {
  type: 'New application',
  cardLevelId: cardLevels[1].id,
  trainingFileName: 'training-certificate.pdf',
  referees: 'Yolnu Referee One, Yolnu Referee Two',
};

export function DemoProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);
  const [profileComplete, setProfileComplete] = useState(true);
  const [applicationStatus, setApplicationStatus] = useState('approved');
  const [showInvalidFileError, setShowInvalidFileError] = useState(false);
  const [profile, setProfile] = useState(mockUser);
  const [applicationDraft, setApplicationDraft] = useState(initialApplication);

  useEffect(() => {
    let isMounted = true;

    async function hydrateOnboarding() {
      try {
        const storedVersion = await AsyncStorage.getItem(ONBOARDING_STORAGE_KEY);
        if (isMounted) {
          setHasCompletedOnboarding(storedVersion === ONBOARDING_VERSION);
        }
      } catch (error) {
        console.warn('Unable to read onboarding status.', error);
      } finally {
        if (isMounted) {
          setIsAppReady(true);
        }
      }
    }

    hydrateOnboarding();

    return () => {
      isMounted = false;
    };
  }, []);

  const completeOnboarding = useCallback(async () => {
    setHasCompletedOnboarding(true);
    try {
      await AsyncStorage.setItem(ONBOARDING_STORAGE_KEY, ONBOARDING_VERSION);
    } catch (error) {
      console.warn('Unable to save onboarding status.', error);
    }
  }, []);

  const value = useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
      login: () => setIsLoggedIn(true),
      logout: () => setIsLoggedIn(false),
      hasCompletedOnboarding,
      completeOnboarding,
      isAppReady,
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
    [
      applicationDraft,
      applicationStatus,
      completeOnboarding,
      hasCompletedOnboarding,
      isAppReady,
      isLoggedIn,
      profile,
      profileComplete,
      showInvalidFileError,
    ]
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
