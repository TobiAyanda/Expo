import { Image, StyleSheet, SafeAreaView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1D3D47' }}>
      <ThemedView style={styles.container}>
        <Image
          source={require('../../assets/images/Slack_IMG.png')}
          style={styles.profileImage}
          accessibilityLabel="Profile picture of Oluwatobiloba"
        />
        <ThemedText type="title" style={styles.name}>
          Oluwatobiloba
        </ThemedText>
        <ThemedText style={styles.role}>Scrum Leader</ThemedText>
        <ThemedText style={styles.bioTitle}>Bio:</ThemedText>
        <ThemedText style={styles.bio}>
          I love spending my free time playing games on my laptop. 
          I like to play fast-paced first-person shooters and strategy games. 
          I always have a great time playing and improving my gaming skills. 
          I also enjoy playing soccer for fun. My chosen role for SCLA is Scrum Leader because I like to lead people and help them stay on track. 
          My dream career is to become my own boss and start a company someday!
        </ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 24,
    flex: 1,
    backgroundColor: '#1D3D47',
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  role: {
    fontSize: 20,
    color: '#A1CEDC',
    marginBottom: 12,
  },
  bioTitle: {
    fontSize: 22,
    color: 'white',
    marginTop: 12,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 8,
  },
});


