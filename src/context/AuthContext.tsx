import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export type AuthState = 'guest' | 'member' | 'unauthenticated';

type AuthContextValue = {
  authState: AuthState;
  hasSeenOnboarding: boolean;
  isAuthReady: boolean;
  completeOnboarding: () => Promise<void>;
  continueAsGuest: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  showLogin: () => Promise<void>;
};

const ONBOARDING_KEY = 'hasSeenOnboarding';
const AUTH_STATE_KEY = '@yolnu/auth-state';
const SESSION_TOKEN_KEY = '@yolnu/session-token';
const DEMO_TOKEN = 'demo-member-session';

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [authState, setAuthState] = useState<AuthState>('unauthenticated');
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    let active = true;

    async function hydrate() {
      try {
        const [onboardingValue, storedState, token] = await Promise.all([
          AsyncStorage.getItem(ONBOARDING_KEY),
          AsyncStorage.getItem(AUTH_STATE_KEY),
          AsyncStorage.getItem(SESSION_TOKEN_KEY),
        ]);

        if (!active) return;

        setHasSeenOnboarding(onboardingValue === 'true');
        if (storedState === 'member' && token) {
          setAuthState('member');
        } else if (storedState === 'guest') {
          setAuthState('guest');
        }
      } catch (error) {
        console.warn('Unable to restore the saved session.', error);
      } finally {
        if (active) setIsAuthReady(true);
      }
    }

    hydrate();
    return () => {
      active = false;
    };
  }, []);

  const completeOnboarding = useCallback(async () => {
    setHasSeenOnboarding(true);
    try {
      await AsyncStorage.setItem(ONBOARDING_KEY, 'true');
    } catch (error) {
      console.warn('Unable to save onboarding status.', error);
    }
  }, []);

  const continueAsGuest = useCallback(async () => {
    setAuthState('guest');
    try {
      await AsyncStorage.multiSet([
        [AUTH_STATE_KEY, 'guest'],
        [SESSION_TOKEN_KEY, ''],
      ]);
    } catch (error) {
      console.warn('Unable to save guest access.', error);
    }
  }, []);

  const startMemberSession = useCallback(async () => {
    setAuthState('member');
    try {
      await AsyncStorage.multiSet([
        [AUTH_STATE_KEY, 'member'],
        [SESSION_TOKEN_KEY, DEMO_TOKEN],
      ]);
    } catch (error) {
      console.warn('Unable to save the member session.', error);
    }
  }, []);

  const login = useCallback(
    async (_email: string, _password: string) => {
      await startMemberSession();
    },
    [startMemberSession]
  );

  const signup = useCallback(
    async (_name: string, _email: string, _password: string) => {
      await startMemberSession();
    },
    [startMemberSession]
  );

  const showLogin = useCallback(async () => {
    setAuthState('unauthenticated');
    try {
      await AsyncStorage.multiRemove([AUTH_STATE_KEY, SESSION_TOKEN_KEY]);
    } catch (error) {
      console.warn('Unable to clear guest access.', error);
    }
  }, []);

  const logout = useCallback(async () => {
    await showLogin();
  }, [showLogin]);

  const value = useMemo(
    () => ({
      authState,
      hasSeenOnboarding,
      isAuthReady,
      completeOnboarding,
      continueAsGuest,
      login,
      signup,
      logout,
      showLogin,
    }),
    [
      authState,
      completeOnboarding,
      continueAsGuest,
      hasSeenOnboarding,
      isAuthReady,
      login,
      logout,
      showLogin,
      signup,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return value;
}
