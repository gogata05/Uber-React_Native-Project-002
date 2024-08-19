import { useSignUp } from "@clerk/clerk-expo";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, Text, View, TextInput, Button, StyleSheet } from "react-native";
import { ReactNativeModal } from "react-native-modal";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: ""
  });

  const onSignUpPress = async () => {
    if (!isLoaded) return;
    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setVerification({
        ...verification,
        state: "pending"
      });
    } catch (err: any) {
      console.log(JSON.stringify(err, null, 2));
      Alert.alert("Error", err.errors[0].longMessage);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) return;
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verification.code
      });
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        setVerification({
          ...verification,
          state: "success"
        });
      } else {
        setVerification({
          ...verification,
          error: "Verification failed. Please try again.",
          state: "failed"
        });
      }
    } catch (err: any) {
      setVerification({
        ...verification,
        error: err.errors[0].longMessage,
        state: "failed"
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Create Your Account</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Name</Text>
          <TextInput placeholder="Enter name" value={form.name} onChangeText={value => setForm({ ...form, name: value })} style={styles.input} />
          <Text style={styles.label}>Email</Text>
          <TextInput placeholder="Enter email" textContentType="emailAddress" value={form.email} onChangeText={value => setForm({ ...form, email: value })} style={styles.input} />
          <Text style={styles.label}>Password</Text>
          <TextInput placeholder="Enter password" secureTextEntry={true} textContentType="password" value={form.password} onChangeText={value => setForm({ ...form, password: value })} style={styles.input} />
          <Button title="Sign Up" onPress={onSignUpPress} />
          <Link href={{ pathname: "/sign-in" }} style={styles.link}>
            Already have an account? <Text style={styles.linkText}>Log In</Text>
          </Link>
        </View>
        <ReactNativeModal
          isVisible={verification.state === "pending"}
          onModalHide={() => {
            if (verification.state === "success") {
              setShowSuccessModal(true);
            }
          }}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Verification</Text>
            <Text style={styles.modalText}>We've sent a verification code to {form.email}.</Text>
            <TextInput placeholder={"12345"} value={verification.code} keyboardType="numeric" onChangeText={code => setVerification({ ...verification, code })} style={styles.input} />
            {verification.error && <Text style={styles.errorText}>{verification.error}</Text>}
            <Button title="Verify Email" onPress={onPressVerify} />
          </View>
        </ReactNativeModal>
        <ReactNativeModal isVisible={showSuccessModal}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Verified</Text>
            <Text style={styles.modalText}>You have successfully verified your account.</Text>
            <Button title="Browse Home" onPress={() => router.push(`/(root)/(tabs)/home`)} />
          </View>
        </ReactNativeModal>
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
  headerText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  form: {
    marginBottom: 20
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
  linkText: {
    color: "#007BFF"
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20
  },
  errorText: {
    color: "red",
    marginTop: 10
  }
});

export default SignUp;
