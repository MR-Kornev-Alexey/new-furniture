<template>
  <v-container class="v-main-page">
    <v-nav-bar/>
    <v-main-screen/>
    <v-cabinet-furniture/>
    <v-proposal/>
    <v-upload />
    <v-design />
    <v-choice-bayer/>
    <v-uniq/>
    <v-material/>
    <v-video/>
    <v-uniq-second/>
    <v-slider-feedback/>
    <v-feedback-form/>
    <v-footer/>
    </v-container>
</template>

<script>
import vNavBar from '../components/v-nav-bar/v-nav-bar'
import vMainScreen from '../components/v-main-screen/v-main-screen'
import vCabinetFurniture from '../components/v-cabinet-furniture/v-cabinet-furniture'
import vUpload from '../components/v-upload/v-upload'
import vProposal from '../components/v-proposal/v-proposal'
import vDesign from '../components/v-design/v-design'
import vChoiceBayer from '../components/v-choice-bayer/v-choice-bayer'
import vUniq from '../components/v-uniq/v-uniq'
import vMaterial from '../components/v-material/v-material'
import vFooter from '../components/v-footer/v-footer'
import vVideo from '../components/v-video/v-video'
import vUniqSecond from '../components/v-uniq-second/v-uniq-second'
import vSliderFeedback from '../components/v-slider-feedback/v-slider-feedback'
import vFeedbackForm from '../components/v-feedback-form/v-feedback-form'
export default {
  name: 'v-main-page',
  components: {
    vNavBar,
    vMainScreen,
    vCabinetFurniture,
    vProposal,
    vUpload,
    vDesign,
    vChoiceBayer,
    vUniq,
    vMaterial,
    vVideo,
    vUniqSecond,
    vSliderFeedback,
    vFeedbackForm,
    vFooter
  },
  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader'
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify'
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify'
      }
    ],
    importantLinks: [
      {
        text: 'Documentation',
        href: 'https://vuetifyjs.com'
      },
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com'
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify'
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs'
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify'
      }
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com/components/api-explorer'
      },
      {
        text: 'Select a layout',
        href: 'https://vuetifyjs.com/getting-started/pre-made-layouts'
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions'
      }
    ]
  })
}
</script>
