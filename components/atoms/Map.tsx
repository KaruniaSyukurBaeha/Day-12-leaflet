import { LatLngExpression } from "leaflet"
import { NextPage } from "next"
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet'


const Map: NextPage = () => {
    const position = [51.505, -0.09]
    return (
        <MapContainer center={position as LatLngExpression} zoom={13} scrollWheelZoom={false} style={{ width: "500px", height: "500px"}}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position as LatLngExpression}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
        </MapContainer>
    )
}
export default Map

// export default function Map() {
//     const position = [51.505, -0.09]
//     return (
//         <MapContainer center={position as LatLngExpression} zoom={13} scrollWheelZoom={false}>
//             <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             />
//             <Marker position={position as LatLngExpression}>
//             <Popup>
//                 A pretty CSS3 popup. <br /> Easily customizable.
//             </Popup>
//             </Marker>
//         </MapContainer>
//     )
// }
