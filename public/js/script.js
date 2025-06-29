const socket = io();
console.log("hey");

if(navigator.geolocation){
    navigator.geolocation.watchPosition(
        (position)=>{
        const {latitude, longitude} = position.coords;
        socket.emit("send-location", {latitude, longitude});
}, 
(error)=>{
    console.log(error);
},
{
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}
);
}

const map=L.map("map").setView([0, 0], 16);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
    attribution: "Pammu"
}).addTo(map);

const markers = {};

socket.on("receive-location", (data)=> {
    const{ id, latitude, longitude} = data;
    map.setView([latitude, longitude],16);
    if(markers[id]){
        markers[id].setLatLng([latitude, longitude]);
    }else{
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});
// socket.on("send-location", (data) => {
//     data.id = socket.id;
//     socket.broadcast.emit("receive-location", data);
//     socket.emit("receive-location", data); // Send back to self also if needed
// });
console.log("All users' locations:");
for (const key in markers) {
    const latLng = markers[key].getLatLng();
    console.log(`User ID: ${key}, Latitude: ${latLng.lat}, Longitude: ${latLng.lng}`);
}

socket.on("user-disconnected", (id)=>
{
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id];
    }
});


