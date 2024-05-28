import { StyleSheet,View ,Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function TabTwoScreen() {
  const params = useLocalSearchParams();
  const { title,description } = params;
  return (
    <View style={styles.root}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.description}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root:{
    paddingHorizontal:20,
    paddingVertical:40,
    gap:20
  },
 title:{
  color:"white",
  fontSize:30
 },
 description:{
  color:"white"
 }
});
