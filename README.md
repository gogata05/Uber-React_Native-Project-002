Uber-React_Native-Project-002

# Uber-React_Native

## Introduction

Uber is an application for ordering an uber.

## Features

- React Native
- Expo
- Stripe
- PostgreSQL
- Google Maps
- Zustand
- Clerk
- Tailwind CSS

## <a name="quick-start">🤸 How to use?</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/gogata05/Uber-React_Native-Project-002.git
cd uber
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=

EXPO_PUBLIC_PLACES_API_KEY=
EXPO_PUBLIC_DIRECTIONS_API_KEY=

DATABASE_URL=

EXPO_PUBLIC_SERVER_URL=https://uber.dev/

EXPO_PUBLIC_GEOAPIFY_API_KEY=

EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

Replace the placeholder values with your actual Clerk, Stripe, NeonDB, Google Maps, andgeoapify credentials. You can
obtain these credentials by signing up on
the [Clerk](https://clerk.com/), [Stripe](https://stripe.com/in), [NeonDB](https://neon.tech/), [Google Maps](https://console.cloud.google.com/)
and [geoapify](https://www.geoapify.com/) websites respectively.

**Running the Project**

```bash
npx expo start
```

Download the [Expo Go](https://expo.dev/go) app and Scan the QR code on your respective device to view the project.

# Photos

## 1. Get Started Page

![Get Started Page](assets/images/ImagesReadMeMD/1Get%20Started%20Page%201.jpg)

## 2. Sign in with Google

![Sign in with Google](assets/images/ImagesReadMeMD/5Sign%20in%20with%20Google.jpg)

## 3. Choose a Rider - Google Maps

![Choose a Rider](assets/images/ImagesReadMeMD/7Choose%20a%20Rider%20page.jpg)

## 4. Rider Details

![Rider Details](assets/images/ImagesReadMeMD/7Rider%20Details.jpg)

## 5. Stripe Payment

![Stripe Payment](assets/images/ImagesReadMeMD/8Stripe%20Payment.jpg)

## 6. Recent Rides 1

![Recent Rides 1](assets/images/ImagesReadMeMD/9Recent%20Rides%203.jpg)

## 7. All Rides

![All Rides](assets/images/ImagesReadMeMD/10All%20Rides.jpg)

## 8. From To Ride

![From To Ride](assets/images/ImagesReadMeMD/6From%20To%20Ride.jpg)

## 9. Recent Rides 2

![Recent Rides 2](assets/images/ImagesReadMeMD/6Recent%20Rides%201.jpg)

## 10. Access location

![Access location](assets/images/ImagesReadMeMD/12Access%20location.jpg)

## 11. Enter Verification Code

![Enter Verification Code](assets/images/ImagesReadMeMD/13Enter%20Varification%20Code.jpg)

## 12. Email Verification Code - using Clear Auth

![Email Verification Code](assets/images/ImagesReadMeMD/14Email%20Varification%20Code.jpg)

## 13. Search Destination - With Google Places API

![Search Destination](assets/images/ImagesReadMeMD/15Search%20Destination.jpg)

## 14. Profile

![Profile](assets/images/ImagesReadMeMD/16Profile.jpg)

## 15. Messages

![Messages](assets/images/ImagesReadMeMD/17Messages.jpg)

## 16. Register

![Register](assets/images/ImagesReadMeMD/4Register.jpg)

## 17. Login

![Register](assets/images/ImagesReadMeMD/Login.jpg)

## 18. Login

![Register](assets/images/ImagesReadMeMD/success%20message.jpg)

## 19. NeonDB PostgreSQL

![NeonDB PostgreSQL](assets/images/ImagesReadMeMD/18NeonDB%20PostgreSQL.png)

## 20. Clerk Authentication

![Clerk Authentication](assets/images/ImagesReadMeMD/19Clerk%20Authentication.png)
