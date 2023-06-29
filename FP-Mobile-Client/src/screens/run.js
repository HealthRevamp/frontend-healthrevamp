import { StyleSheet, Text, View, Button } from "react-native";
import { useEffect, useRef, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import axios from "axios";
import polyline from "@mapbox/polyline";
import { googleMapApi } from "../config/apiKey";

export default function Run() {
  const mapRef = useRef(null);
  const [polylineMap, setPolylineMap] = useState([]);
  const [placeIdOrigin, setPlaceIdOrigin] = useState("");
  const [placeIdDestination, setPlaceIdDestination] = useState("");
  const onPress = () => {
    postMap(placeIdOrigin, placeIdDestination);
  };
  const postMap = async (placeIdOrigin, placeIdDestination) => {
    try {
      const { data } = await axios({
        url: `https://routes.googleapis.com/directions/v2:computeRoutes`,
        method: "post",
        data: {
          origin: {
            // Union field location_type can be only one of the following:
            placeId: placeIdOrigin, 
            // End of list of possible types for union field location_type.
          },
          destination: {
            // Union field location_type can be only one of the following:
            placeId: placeIdDestination, 
            // End of list of possible types for union field location_type.
          },
        },
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": googleMapApi,
          "X-Goog-FieldMask":
            "routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline",
        },
      });

      console.log(data.routes[0]?.polyline?.encodedPolyline);
      const decodedPolyline = polyline
        .decode(data.routes[0]?.polyline?.encodedPolyline)
        .map(([latitude, longitude]) => ({
          latitude,
          longitude,
        }));
      setPolylineMap(decodedPolyline);
      mapRef.current.fitToCoordinates(decodedPolyline, {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
        animated: true,
      });
      console.log(decodedPolyline);
    } catch (err) {
      console.log("here");
      console.log(err);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
          
        >
          <Polyline
            coordinates={polylineMap}
            strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
            strokeWidth={3}
          />
        </MapView>
        <View style={styles.autocompleteContainer}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              setPlaceIdOrigin(data?.place_id);
              console.log(data?.place_id);
            }}
            query={{
              key: googleMapApi,
              language: "en",
            }}
          />
          <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              setPlaceIdDestination(data?.place_id);
              console.log(data?.place_id);
            }}
            query={{
              key: googleMapApi,
              language: "en",
            }}
          />
          <Button title="test" onPress={() => onPress()} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 700,
  },
  map: {
    flex: 1,
  },
  autocompleteContainer: {
    height: 400,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: "white",
  },
});
