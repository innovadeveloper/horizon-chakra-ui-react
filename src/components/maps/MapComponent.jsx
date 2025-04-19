'use client';
import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ScaleControl, useMap } from 'react-leaflet';
import L from 'leaflet'; // Importamos Leaflet
import 'leaflet/dist/leaflet.css'; // Estilos de Leaflet
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react'; // Componentes de Chakra UI


const MapComponent = ({ 
    position = [51.505, -0.09],  // Coordenadas para el centro del mapa
    zoomLevel = 13,  // Nivel de zoom inicial
    iconUrl = '/icons/smart-device-icon.png',  // Icono del marcador
    popupData = [  // Datos del popup (tabla)
        ['Celda 1', 'Celda 2'],
        ['Celda 3', 'Celda 4']
    ]
}) => {
    // Crear un icono con las propiedades recibidas
    const customIcon = new L.Icon({
        iconUrl: iconUrl, // Icono personalizado
        iconSize: [46, 46], // Tamaño del icono
        iconAnchor: [16, 32], // Anclaje del icono
        popupAnchor: [0, -32], // Anclaje del popup
    });

    return (
        <Box
            borderRadius="5px"  // Borde redondeado
            overflow="hidden"    // Evitar que el mapa se desborde
            boxShadow="lg"       // Añadir sombra (opcional)
            width="100%"         // Establecer el ancho completo
            height="500px"       // Altura del mapa
        >
            <MapContainer center={position} zoom={zoomLevel} style={{ height: '100%', width: '100%' }}>
                {/* Capa de teselas (mapa base) */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Marcador con el icono personalizado */}
                <Marker position={position} icon={customIcon}>
                    {/* Popup con una tabla de 2 columnas y 2 filas */}
                    <Popup>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>Columna 1</Th>
                                    <Th>Columna 2</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {popupData.map((row, index) => (
                                    <Tr key={index}>
                                        {row.map((cell, i) => (
                                            <Td key={i} textAlign="center">{cell}</Td>
                                        ))}
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </Popup>
                </Marker>
                <ScaleControl position="bottomleft" /> 
                {/* Control de escala en la esquina inferior izquierda */}
            </MapContainer>
        </Box>
    );
};

export {MapComponent};
