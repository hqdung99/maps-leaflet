import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  SVGOverlay,
  Marker,
  Popup,
  Polyline,
  Circle,
  CircleMarker,
  Polygon,
  Rectangle,
  LayersControl,
  ScaleControl,
  Pane,
  useMap,
} from "react-leaflet";
import {} from "@react-leaflet/core";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./leaflet.css";
import {
  ThanhPhoHoChiMinh,
  ThanhPhoHoChiMinh_HuyenCanGio,
  ThanhPhoHoChiMinh_HuyenNhaBe,
  ThanhPhoHoChiMinh_HuyenBinhChanh,
  ThanhPhoHoChiMinh_Quan7,
  ThanhPhoHoChiMinh_HuyenCuChi,
  ThanhPhoHoChiMinh_HuyenHocMon,
  ThanhPhoHoChiMinh_QuanBinhThanh,
  ThanhPhoHoChiMinh_Quan1,
  ThanhPhoHoChiMinh_Quan4,
  ThanhPhoHoChiMinh_Quan8,
  ThanhPhoHoChiMinh_Quan5,
  ThanhPhoHoChiMinh_Quan6,
  ThanhPhoHoChiMinh_Quan11,
  ThanhPhoHoChiMinh_Quan10,
  ThanhPhoHoChiMinh_Quan3,
  ThanhPhoHoChiMinh_QuanPhuNhuan,
  ThanhPhoHoChiMinh_QuanTanPhu,
  ThanhPhoHoChiMinh_QuanBinhTan,
  ThanhPhoHoChiMinh_QuanTanBinh,
  ThanhPhoHoChiMinh_Quan12,
  ThanhPhoHoChiMinh_QuanGoVap,
  ThanhPhoHoChiMinh_ThanhPhoThuDuc,
} from "./boundary/district";

const obj = {
  ThanhPhoHoChiMinh_HuyenCanGio,
  ThanhPhoHoChiMinh_HuyenNhaBe,
  ThanhPhoHoChiMinh_HuyenBinhChanh,
  ThanhPhoHoChiMinh_Quan7,
  ThanhPhoHoChiMinh_HuyenCuChi,
  ThanhPhoHoChiMinh_HuyenHocMon,
  ThanhPhoHoChiMinh_QuanBinhThanh,
  ThanhPhoHoChiMinh_Quan1,
  ThanhPhoHoChiMinh_Quan4,
  ThanhPhoHoChiMinh_Quan8,
  ThanhPhoHoChiMinh_Quan5,
  ThanhPhoHoChiMinh_Quan6,
  ThanhPhoHoChiMinh_Quan11,
  ThanhPhoHoChiMinh_Quan10,
  ThanhPhoHoChiMinh_Quan3,
  ThanhPhoHoChiMinh_QuanPhuNhuan,
  ThanhPhoHoChiMinh_QuanTanPhu,
  ThanhPhoHoChiMinh_QuanBinhTan,
  ThanhPhoHoChiMinh_QuanTanBinh,
  ThanhPhoHoChiMinh_Quan12,
  ThanhPhoHoChiMinh_QuanGoVap,
  ThanhPhoHoChiMinh_ThanhPhoThuDuc,
};

const center = [10.775830881777122, 106.70107014486052];

const purpleOptions = {
  fillColor: "#FD8D3C",
  fillOpacity: 0.7,
  weight: 2,
  opacity: 1,
  dashArray: "3",
  color: "white",
};

const purpleOptions1 = {
  fillColor: "#BD0026",
  fillOpacity: 0.7,
  weight: 2,
  opacity: 1,
  dashArray: "3",
  color: "white",
};

var info = L.control();

info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info"); // create a div with a class "info"
  this.update();
  return this._div;
};

// method that we will use to uepdswatee the contsrol based on feature properties passed
info.update = function (props) {
  this._div.innerHTML =
    "<h4>US Population Density</h4>" +
    (props
      ? "<b>" +
        props.name +
        "</b><br />" +
        props.density +
        " people / mi<sup>2</sup>"
      : "Hover over a state");
};

function MyComponent() {
  const map = useMap();

  useEffect(() => {
    info.addTo(map);

    return () => {
      info.remove(map);
    };
  }, []);
  return null;
}

var corner1 = L.latLng(11.804410329076212, 104.17574045005802);
var corner2 = L.latLng(8.537712860574695, 109.37227561043666);
var bounds = L.latLngBounds(corner1, corner2);

const boundsBox = [
  [13.248089847492581, 103.45811990209447],
  [13.254294274473095, 110.75511773284695],
  [8.184620443541315, 111.52173388635028],
  [8.064678908160822, 102.73605364377491],
];

const boundsBoxoptions = {
  fillColor: "#C9D2D3",
  fillOpacity: 0.7,
  weight: 2,
  opacity: 1,
  dashArray: "3",
  color: "white",
};

function MyApp() {
  const [selectDistrict, setSelectDistrict] = useState("");
  console.log("selectDistrict: ", selectDistrict);

  console.log(selectDistrict);
  return (
    <>
      <MapContainer
        center={center}
        zoom={10}
        style={{ width: "100vw", height: "100vh" }}
        maxBounds={bounds}
        minZoom={9}
        maxZoom={20}
        bounds={bounds}
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/voyager/256/{z}/{x}/{y}.png?key=9WFebKyo4SzKO0H6sXG3"
        />
        <MyComponent />
        <Polygon pathOptions={boundsBoxoptions} positions={boundsBox} />

        {ThanhPhoHoChiMinh.data.map((item1) => {
          const newPoly = item1.ShapeE3.coordinates[0].map((item) => [
            item[1],
            item[0],
          ]);
          return (
            <Polygon
              pathOptions={purpleOptions}
              positions={newPoly}
              eventHandlers={{
                mouseover: (e) => {
                  console.log("mouseover");
                  var layer = e.target;

                  layer.setStyle({
                    weight: 5,
                    color: "#666",
                    dashArray: "",
                    fillOpacity: 0.7,
                  });
                  info.update({ name: "Huynh Quoc Dung", density: "full" });
                },
                mouseout: (e) => {
                  var layer = e.target;

                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 2,
                    dashArray: "3",
                    color: "white",
                  });
                  info.update();
                },
                click: (e) => {
                  console.log("value: ", selectDistrict);
                  setSelectDistrict(item1.UniqueName);
                },
              }}
            />
          );
        })}

        {selectDistrict &&
          obj[selectDistrict].data.map((item1) => {
            const newPoly = item1.ShapeE3.coordinates[0].map((item) => [
              item[1],
              item[0],
            ]);

            return (
              <Polygon
                pathOptions={purpleOptions1}
                positions={newPoly}
                eventHandlers={{
                  mouseover: (e) => {
                    console.log("mouseover");
                    var layer = e.target;

                    layer.setStyle({
                      weight: 5,
                      color: "#666",
                      dashArray: "",
                      fillOpacity: 0.7,
                    });
                    info.update({ name: "Huynh Quoc Dung", density: "full" });
                  },
                  mouseout: (e) => {
                    var layer = e.target;

                    layer.setStyle({
                      fillOpacity: 0.7,
                      weight: 2,
                      dashArray: "3",
                      color: "white",
                    });
                    info.update();
                  },
                  click: (e) => {
                    setSelectDistrict("");
                  },
                }}
              />
            );
          })}
      </MapContainer>
    </>
  );
}

export default MyApp;
