import { reactive } from "vue";

export const store = reactive({
  movies: "",

  apikey: "api_key=b790c7a203e2966b42f46ec5b56229e9&query=",

  apiUrl: "api.themoviedb.org/3/search/movie?",
});
