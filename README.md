# 🌍 Currency Converter

A simple web-based currency converter application built using **HTML**, **CSS**, and **JavaScript**. It allows users to convert currency values in real-time using the [Frankfurter API](https://www.frankfurter.app/), with added visual flair from **country flags** and **Font Awesome icons**.

---

## 🚀 Features

- 🌐 Real-time currency conversion  
- 🏳️ Country flags for selected currencies (via [FlagsAPI](https://flagsapi.com))  
- 🔠 Font Awesome icons for better UI  
- 🔄 Support for multiple currencies (INR, USD, EUR, GBP, etc.)  
- 🧮 User-defined amount input  
- 📱 Responsive design  
- ⚠️ Basic error handling  

---

## 🛠️ Tech Stack

- **HTML** – Structure and layout  
- **CSS** – Styling and design  
- **JavaScript** – Logic, Fetch API integration, and DOM manipulation  
- **Frankfurter API** – Real-time exchange rates  
- **FlagsAPI** – Country flags (`https://flagsapi.com/US/flat/64.png`)  
- **Font Awesome** – Icons and UI enhancements  

---

## 📦 How It Works

The app uses the `fetch` API to send a GET request to the Frankfurter API with the selected amount, base currency, and target currency. The exchange rate is retrieved and displayed along with the respective country flags.
