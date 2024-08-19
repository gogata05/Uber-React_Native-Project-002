import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const onboardingData = [
  {
    id: 1,
    title: "Welcome to the App",
    description: "This is the first step in your journey.",
    image: require("../assets/onboarding1.png")
  },
  {
    id: 2,
    title: "Learn New Skills",
    description: "We help you develop new skills quickly and easily.",
    image: require("../assets/onboarding2.png")
  },
  {
    id: 3,
    title: "Achieve Your Goals",
    description: "Track your progress and achieve your goals with us.",
    image: require("../assets/onboarding3.png")
  }
];

const Home = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isLastSlide = activeIndex === onboardingData.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <Swiper ref={swiperRef} loop={false} dot={<View style={styles.dot} />} activeDot={<View style={styles.activeDot} />} onIndexChanged={index => setActiveIndex(index)}>
        {onboardingData.map(item => (
          <View key={item.id} style={styles.slide}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </Swiper>

      <Button title={isLastSlide ? "Get Started" : "Next"} onPress={() => (isLastSlide ? router.replace("/(auth)/sign-up") : swiperRef.current?.scrollBy(1))} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white"
  },
  skipButton: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20
  },
  skipText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold"
  },
  dot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: "#E2E8F0",
    borderRadius: 2
  },
  activeDot: {
    width: 32,
    height: 4,
    marginHorizontal: 4,
    backgroundColor: "#0286FF",
    borderRadius: 2
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  image: {
    width: "100%",
    height: 300
  },
  titleContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center"
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#858585",
    marginTop: 10
  }
});

export default Home;
