/* ======================================================== */
/* 💻 firebase-config.js (PERBAIKAN DATABASE URL)           */
/* ======================================================== */

const firebaseConfig = {
    apiKey: "AIzaSyCrTGNrUu-37TEDBWf25mamqJiFZiRcBGE",
  authDomain: "food-order-app-15341.firebaseapp.com",
  projectId: "food-order-app-15341",
  storageBucket: "food-order-app-15341.firebasestorage.app",
  messagingSenderId: "670005995232",
  appId: "1:670005995232:web:a9f67ec1cb8e75092b9285",
    measurementId: "G-84FYDL0VL1",
    // 👇 BARIS INI SANGAT PENTING AGAR TIDAK ERROR 👇
    databaseURL: "https://food-order-app-15341-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Inisialisasi Firebase
if (!firebase.apps.length) { 
    firebase.initializeApp(firebaseConfig); 
}

const database = firebase.database();
const db = database; 
let menuCache = {}; 

let menuData = [];
let cart = [];
let currentCategory = 'all';
let currentUser = null;

window.onload = function() {
    const path = window.location.pathname;
    if (path.includes('admin.html')) {
        if(typeof initAdminMode === 'function') initAdminMode();
    } else {
        if(typeof initUserMode === 'function') initUserMode();
    }
};