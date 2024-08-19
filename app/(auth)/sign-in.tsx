import { useSignIn } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, ScrollView, Text, View, TextInput, Button, StyleSheet } from "react-native";

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(root)/(tabs)/home");
      } else {
        console.log(JSON.stringify(signInAttempt, null, 2));
        Alert.alert("Error", "Log in failed. Please try again.");
      }
    } catch (err: any) {
      console.log(JSON.stringify(err, null, 2));
      Alert.alert("Error", err.errors[0].longMessage);
    }
  }, [isLoaded, form]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome 👋</Text>
        </View>

        <Text style={styles.label}>Email</Text>
        <TextInput placeholder="Enter email" textContentType="emailAddress" value={form.email} onChangeText={value => setForm({ ...form, email: value })} style={styles.input} />

        <Text style={styles.label}>Password</Text>
        <TextInput placeholder="Enter password" secureTextEntry={true} textContentType="password" value={form.password} onChangeText={value => setForm({ ...form, password: value })} style={styles.input} />

        <Button title="Sign In" onPress={onSignInPress} />

        <Link href="/sign-up" style={styles.link}>
          Don't have an account? <Text style={styles.signUpText}>Sign Up</Text>
        </Link>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20
  },
  header: {
    marginBottom: 20
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  label: {
    marginTop: 20,
    fontSize: 16
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 5,
    borderRadius: 5
  },
  link: {
    textAlign: "center",
    marginTop: 20,
    color: "#888"
  },
  signUpText: {
    color: "#007BFF"
  }
});

export default SignIn;
