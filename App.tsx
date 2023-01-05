import 'react-native-gesture-handler';
import { NativeBaseProvider } from 'native-base';
import { theme } from './styles/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigation } from './navigation/RootNavigation';

export default function App() {
  return (
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>
          <RootNavigation />
        </NativeBaseProvider>
      </SafeAreaProvider>
  );
}
