import { createApp } from "vue";

import App from "./App.vue";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faStar as farStarFull } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStarEmpty } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(farStarFull, farStarEmpty);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
