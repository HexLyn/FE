import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Global Vuetify styles
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Import components
import {
  VApp,
  VAppBar,
  VToolbar,
  VToolbarTitle,
  VSpacer,
  VCard,
  VCardSubtitle,
  VMain,
  VFooter,
  VRow,
  VCol,
  VList,
  VListItem,
  VListItemTitle,
  VCardTitle, // μ¶”κ°€
  VCardText, // μ¶”κ°€
  VContainer, // μ¶”κ°€
  VTextField, // μ¶”κ°€
  VDatePicker, // μ¶”κ°€
  VForm, // μ¶”κ°€
  VRadioGroup, // μ¶”κ°€
  VRadio, // μ¶”κ°€
  VMenu, // μ¶”κ°€
  VBtn, // μ¶”κ°€
} from 'vuetify/components';

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi', // MDI μ•„μ�΄μ½� μ„Έν�Έ μ‚¬μ�©
  },
  components: {
    VApp,
    VAppBar,
    VToolbar,
    VToolbarTitle,
    VSpacer,
    VCard,
    VCardSubtitle,
    VMain,
    VFooter,
    VRow,
    VCol,
    VList,
    VListItem,
    VListItemTitle,
    VCardTitle, // μ¶”κ°€
    VCardText, // μ¶”κ°€
    VContainer, // μ¶”κ°€
    VTextField, // μ¶”κ°€
    VDatePicker, // μ¶”κ°€
    VForm, // μ¶”κ°€
    VRadioGroup, // μ¶”κ°€
    VRadio, // μ¶”κ°€
    VMenu, // μ¶”κ°€
    VBtn, // μ¶”κ°€
  },
  theme: {
    defaultTheme: 'light', // or 'dark'
  },
});

// export default vuetify;
export default createVuetify({
  components,
  directives,
});
