module.exports = {
  images: {
    loader: "default",
    path: "/_next/image",
    domains: ["res.cloudinary.com", "localhost"],
  },

  build: {
    env: {
      NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      NEXT_PUBLIC_FIREBASE_PROJECT_ID:
        process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      NEXT_PUBLIC_FIREBASE_SENDER_ID:
        process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
      NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID:
        process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
      NEXT_PUBLIC_ADMIN_UID: process.env.NEXT_PUBLIC_ADMIN_UID,
    },
  },
};
