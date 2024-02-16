import { reactive } from "vue";

export const store = reactive({
  movies: [],

  series: [],

  apikey: "api_key=b790c7a203e2966b42f46ec5b56229e9&query=",

  apiUri: "https://api.themoviedb.org/3/",
});
