import React, { useCallback } from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { Box, Button, Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {

  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <Box
        height="100%"
        backgroundColor="pink.100"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="lg">Home</Text>
      </Box>
    </SafeAreaView>
  );
};
