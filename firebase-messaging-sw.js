// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

// Initialize the Firebase app in the service worker by passing in the messagingSenderId.
firebase.initializeApp({
    apiKey: "AIzaSyB1z04jNS4gnwWa4VI10cXinj2PBg3KHe0",
    authDomain: "boulder-gym.firebaseapp.com",
    projectId: "boulder-gym",
    storageBucket: "boulder-gym.firebasestorage.app",
    messagingSenderId: "837049852336",
    appId: "1:837049852336:web:73b74809c9f120dc75b675",
    measurementId: "G-PKT03CZKTN"
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/boulder.png",
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
