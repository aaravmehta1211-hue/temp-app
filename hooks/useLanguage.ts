import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export type Language = 'hindi' | 'english' | 'bengali' | 'marathi' | 'punjabi' | 'tamil' | 'telugu' | 'gujarati' | 'kannada' | 'malayalam';

export const languages = [
  { code: 'hindi', name: 'हिंदी', nativeName: 'हिंदी' },
  { code: 'english', name: 'English', nativeName: 'English' },
  { code: 'bengali', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'marathi', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'punjabi', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
  { code: 'tamil', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'telugu', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'gujarati', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'kannada', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'malayalam', name: 'Malayalam', nativeName: 'മലയാളം' },
] as const;

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('hindi');

  useEffect(() => {
    loadLanguage();
  }, []);

  const loadLanguage = async () => {
    try {
      const savedLanguage = await AsyncStorage.getItem('language');
      if (savedLanguage) {
        setLanguage(savedLanguage as Language);
      }
    } catch (error) {
      console.error('Error loading language:', error);
    }
  };

  const setSelectedLanguage = async (newLanguage: Language) => {
    setLanguage(newLanguage);
    try {
      await AsyncStorage.setItem('language', newLanguage);
      // Force reload the current route to update all translations
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          window.location.reload();
        } else {
          router.replace(router.pathname || '/');
        }
      }, 100);
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  return { language, setLanguage: setSelectedLanguage };
}