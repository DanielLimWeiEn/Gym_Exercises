export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4b14061afbmsh08bf78a8b374ccfp12da48jsn443789f7eaf0",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4b14061afbmsh08bf78a8b374ccfp12da48jsn443789f7eaf0',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
