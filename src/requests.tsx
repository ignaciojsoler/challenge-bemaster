const apiKey = "4479c8da513385de6697a704f3630e3e"
const requests = {
  fetchSimpsons: `list/7067554?api_key=${apiKey}&language=es-ES`,
  fetchDisney: `list/5905?api_key=${apiKey}&language=es-ES`,
  fetchDisneyClassics: `list/338?api_key=${apiKey}&language=es-ES`,
  fetchDisneySeries: `list/95101?api_key=${apiKey}&language=es-ES`,
  fetchPixar: `list/9095?api_key=${apiKey}&language=es-ES`,
  fetchMusicPixar: `list/7067556?api_key=${apiKey}&language=es-ES`,
  fetchDocumentaries: `list/7067555?api_key=${apiKey}&language=es-ES`,
  fetchNationalGeographic: `list/7067613?api_key=${apiKey}&language=es-ES`,
  fetchMarvel: `list/1?api_key=${apiKey}&language=es-ES`,
  fetchMarvelPhases: `list/8920?api_key=${apiKey}&language=es-ES`,
  fetchMarvelPhaseOne: `list/1271?api_key=${apiKey}&language=es-ES&sort_by=vote_average.asc`,
  fetchMarvelPhaseTwo: `list/3204?api_key=${apiKey}&language=es-ES&sort_by=vote_average.asc`,
  fetchMarvelPhaseThree: `list/7067552?api_key=${apiKey}&language=es-ES&sort_by=vote_average.asc`,
  fetchToyStory: `list/7067603?api_key=${apiKey}&language=es-ES&sort_by=vote_average.asc`,
  fetchCars: `list/7067605?api_key=${apiKey}&language=es-ES&sort_by=vote_average.asc`,
  fetchUnexpectedHeroes: `list/7067606?api_key=${apiKey}&language=es-ES&sort_by=vote_average.asc`,
  fetchStarWars: `list/8136?api_key=${apiKey}&language=es-ES`,
  fetchStarWarsLego: `list/7067607?api_key=${apiKey}&language=es-ES&sort_by=vote_average.asc`,
  fetchRandom: `list/7068720?api_key=${apiKey}&language=es-ES&sort_by=vote_average.asc`,
};
export default requests;
