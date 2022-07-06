import AsyncStorage from '@react-native-async-storage/async-storage';
import { MeetingScreen } from '../components/Meeting';

export default function Meeting() {
  let token = AsyncStorage.getItem("token");
  if (token) {
    console.log("Token is: ", token);
    return (
    <MeetingScreen />
    )
  }
}
