/* Config LAB (white-label demo) — MISMOS datos de Temuco, identidad de marca distinta ("PULSO").
   El deploy toma la data de Temuco vía data_src; el tema lo fija el registro (cliente-a). */
window.CITY = {
  slug: "temuco",
  nombre: "Temuco",
  sigla: "PU",
  lat0: -38.7432, lon0: -72.6074,
  comunas: ["Temuco", "Padre Las Casas"],
  comunasGeojson: "comunas_temuco.geojson",
  live: true,
  liveBase: "https://storage.googleapis.com/temuco-transporte-live/",
  demanda: true,
  repo: "prueba_grafica",
  voz: {"ejeSing": "corredor", "ejePlur": "corredores", "EjePlur": "Corredores"},
  // ── Marca white-label (opcional; si falta, el shell usa "Centro de Mando / Transporte X") ──
  marca: "PULSO Movilidad",
  tbTitle: "PULSO · Temuco",
  tbSub: "Inteligencia de Movilidad · GPS en vivo",
  heroTitle: "MONITOR DE FLOTA<br>EN TIEMPO REAL",
  eyebrow: "PULSO · Inteligencia de Movilidad",
  heroSub: "Operación del transporte público de Temuco medida sobre GPS en vivo — flota, velocidad, cobertura y cumplimiento en una sola vista.",
  // Nombres de los modos, sugerentes de lo que muestran (white-label). Prod sin esto usa los originales.
  modoLabels: { operacion: "Operación en Vivo", infra: "Red y Corredores", demanda: "Demanda y Pasajeros" },
};
