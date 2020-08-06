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
    <v-recommendation/>
    <v-team/>
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
import vRecommendation from '../components/v-recommendation/v-recommendation'
import vTeam from '../components/v-team/v-team'
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
    vRecommendation,
    vTeam,
    vFooter
  },
  data: () => ({

  })
}
</script>
