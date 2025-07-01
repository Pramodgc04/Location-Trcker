# 🌍 Live Device Tracking Application

This project is a real-time device tracking application that utilizes the **Geolocation API**, **WebSockets**, and **Leaflet.js** to monitor and display device locations on a map. Built using **Node.js**, **Express**, **Socket.io**, and **EJS**, it enables seamless live tracking with instant map updates.

---

## 🚀 Features

- 📡 **Live Device Tracking**: Continuously monitor and update device locations in real-time.
- 🗺️ **Interactive Map with Markers**: Display all devices with dynamic and responsive markers.
- 🔄 **Automatic Marker Updates**: Markers move as device positions change—no refresh needed.
- 📱 **Multi-Device Support**: Simultaneously track multiple devices on the same map interface.

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **Socket.io**
- **Leaflet.js**
- **EJS (Embedded JavaScript Templating)**

---

### 📁 Project Structure

```plaintext
Location-Tracker/
│
├── public/       # Static files (CSS, JS, icons)
│   └── js/       # Client-side Socket.io and map logic
│
├── views/        # EJS templates
│   └── index.ejs
│
├── server.js     # Main server logic (Express + Socket.io)
├── package.json  # Project metadata and dependencies
└── README.md     # Project overview and guide
```

## ⚙️ How It Works

### 🧩 Backend (Node.js + Express + Socket.io)

1. **Server Initialization**: Express sets up the HTTP server.
2. **WebSocket Connection**: Socket.io establishes a real-time channel with each connected device.
3. **Location Data Handling**: Devices send location updates via WebSocket.
4. **Broadcasting Updates**: The server broadcasts all updates to connected clients.
5. **Disconnection Handling**: When a device disconnects, its marker is removed from the map.

### 🖥️ Frontend (JavaScript + Leaflet.js + Geolocation API)

6. **Get Current Location**: The browser continuously tracks geolocation using the Geolocation API.
7. **Send Updates**: Location is emitted to the server using Socket.io.
8. **Render Map**: Leaflet.js displays an interactive map.
9. **Dynamic Marker Management**: Markers are added, updated, and removed in real-time based on WebSocket data.

---

## 🔧 Installation and Running Locally

```bash
git clone https://github.com/Pramodgc04/Location-Trcker.git
cd Location-Trcker
npm install
node server.js
```

Open your browser and go to:
http://localhost:3000

---

## 🎯 Use Cases

Fleet management systems

Real-time delivery tracking

Personal location sharing

IoT device monitoring

## 📌 Conclusion

By combining Express.js, Socket.io, Leaflet.js, and the Geolocation API, this Live Device Tracker offers a robust, scalable, and interactive real-time tracking solution. It’s ideal for applications requiring instant geolocation updates and multi-device support.

📝 Maintained by Pramod G C: https://github.com/Pramodgc04
