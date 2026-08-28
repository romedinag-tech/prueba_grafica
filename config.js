/* Config de ciudad — shell compartido (_motor/dashboard_kit). live=true: feed GTFS-RT vía capturador Cloud Run. */
window.CITY = {
  slug: "temuco",
  nombre: "Temuco",
  sigla: "TE",
  lat0: -38.7432, lon0: -72.6074,
  comunas: ["Temuco", "Padre Las Casas"],
  comunasGeojson: "comunas_temuco.geojson",
  live: true,
  liveBase: "https://storage.googleapis.com/temuco-transporte-live/",
  demanda: true,                        // 3er modo: validaciones del medio de pago (abordajes)
  repo: "transportepublicoTemuco",
  voz: {"ejeSing": "eje", "ejePlur": "ejes", "EjePlur": "Ejes"},
};
