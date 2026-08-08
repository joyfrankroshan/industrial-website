import { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Box, Typography, Chip } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ---- Brand tokens ----
const BRAND_BLUE = "#3358D3";
const FONT = "'Inter Tight', sans-serif";

// ---- Your service locations (lat/lng approximate - refine as needed) ----
const LOCATIONS = [
  { name: "Oragadam", lat: 12.8402, lng: 79.9836 },
  { name: "Vallam", lat: 12.972, lng: 79.986 },
  { name: "Sriperumbudur", lat: 12.9675, lng: 79.9432 },
  { name: "Irungattukottai", lat: 12.8998, lng: 79.9946 },
  { name: "Ambathur", lat: 13.1143, lng: 80.1548 },
  { name: "OMR", lat: 12.8996, lng: 80.2274 },
  { name: "Tharamani", lat: 12.987, lng: 80.2459 },
  { name: "Tambaram", lat: 12.9249, lng: 80.1 },
  { name: "Urapakkam", lat: 12.8447, lng: 80.0826 },
  { name: "Krishnagiri", lat: 12.5266, lng: 78.215 },
  { name: "Dharmapuri", lat: 12.1357, lng: 78.1591 },
  { name: "Redhills", lat: 13.19, lng: 80.183 },
  { name: "Mount Road", lat: 13.0604, lng: 80.2496 },
  { name: "Mamandur", lat: 12.728, lng: 79.952 },
  { name: "Chengalpattu", lat: 12.6819, lng: 79.9888 },
  { name: "Sholinganallur", lat: 12.901, lng: 80.2279 },
];

// Center roughly over Chennai + surrounding service belt
const MAP_CENTER = [12.95, 79.95];
const DEFAULT_ZOOM = 8;

// ---- Custom circular DivIcon marker (blue dot, matches brand) ----
function createBrandIcon() {
  return L.divIcon({
    className: "",
    html: `
      <div style="
        width: 16px;
        height: 16px;
        background: ${BRAND_BLUE};
        border: 3px solid #ffffff;
        border-radius: 50%;
        box-shadow: 0 2px 6px rgba(51, 88, 211, 0.5);
      "></div>
    `,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -10],
  });
}

// ---- Optional: fit map to markers on mount ----
function FitBounds({ locations }) {
  const map = useMap();
  useState(() => {
    if (locations.length) {
      const bounds = L.latLngBounds(locations.map((l) => [l.lat, l.lng]));
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  });
  return null;
}

export default function LocationsMap() {
  const brandIcon = useRef(createBrandIcon());

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid #E5E7EB",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        "& .leaflet-container": {
          fontFamily: FONT,
        },
        "& .leaflet-popup-content-wrapper": {
          borderRadius: "12px",
          padding: 0,
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        },
        "& .leaflet-popup-content": {
          margin: 0,
        },
        "& .leaflet-popup-tip": {
          background: "#fff",
        },
      }}
    >
      <Box
        sx={{
          height: { xs: 320, sm: 420, md: 500 },
          width: "100%",
        }}
      >
        <MapContainer
          center={MAP_CENTER}
          zoom={DEFAULT_ZOOM}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%", background: "#f5f5f5" }}
        >
          {/* CartoDB Positron - light, minimal tiles matching the clean map aesthetic */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />

          <FitBounds locations={LOCATIONS} />

          {LOCATIONS.map((loc) => (
            <Marker
              key={loc.name}
              position={[loc.lat, loc.lng]}
              icon={brandIcon.current}
            >
              <Popup>
                <Box
                  sx={{
                    minWidth: 180,
                    p: 1.5,
                    fontFamily: FONT,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 0.5 }}>
                    <PlaceIcon sx={{ fontSize: 16, color: BRAND_BLUE }} />
                    <Typography
                      sx={{
                        fontFamily: FONT,
                        fontWeight: 600,
                        fontSize: 14,
                        color: "#111827",
                      }}
                    >
                      {loc.name}
                    </Typography>
                  </Box>
                  <Chip
                    label="Serviced by Hogist"
                    size="small"
                    sx={{
                      fontFamily: FONT,
                      fontSize: 11,
                      height: 22,
                      bgcolor: "rgba(51, 88, 211, 0.08)",
                      color: BRAND_BLUE,
                      fontWeight: 500,
                    }}
                  />
                </Box>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Box>
  );
}
