<template>
  <div class="v-palette-filter">
    <svg class="size-palette" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path class="filter-color" @click="selectGreen" d="M9.41005 15.4476C9.08369 14.9581 8.8661 14.4141 8.75733 13.8702H0C0.16318 16.8075 1.35985 19.5271 3.2092 21.6485L9.41005 15.4476Z" fill="green"/>
      <path class="filter-color" @click="selectYellow" d="M8.75733 12.1843C8.8661 11.586 9.08369 11.0421 9.41005 10.6069L3.2092 4.35168C1.35985 6.47303 0.16318 9.19274 0 12.1843H8.75733Z" fill="yellow"/>
      <path class="filter-color" @click="selectBlue" d="M10.5524 9.41005C11.042 9.08369 11.5859 8.8661 12.1298 8.75733V0C9.19256 0.16318 6.47291 1.35985 4.35156 3.2092L10.5524 9.41005Z" fill="blue"/>
      <path class="filter-color" @click="selectWhite" d="M13.8164 0V8.75733C14.4147 8.8661 14.9587 9.08369 15.3938 9.41005L21.6491 3.2092C19.5277 1.35985 16.8081 0.16318 13.8164 0Z" fill="white"/>
      <path class="filter-color" @click="selectGrey" d="M16.5898 10.5525C16.9162 11.0421 17.1338 11.586 17.2426 12.1299H25.9999C25.8367 9.19268 24.64 6.47303 22.7907 4.35168L16.5898 10.5525Z" fill="#444544"/>
      <path class="filter-color" @click="selectBlack" d="M12.1842 17.2427C11.5859 17.1339 11.042 16.9163 10.6068 16.59L4.35156 22.7908C6.47291 24.6402 9.19256 25.8368 12.1298 26V17.2427H12.1842Z" fill="black"/>
      <path class="filter-color" @click="selectRed" d="M17.2426 13.8158C17.1338 14.4141 16.9162 14.9581 16.5898 15.3932L22.7907 21.6485C24.6401 19.5271 25.8368 16.8074 25.9999 13.8702H17.2426V13.8158Z" fill="red"/>
      <path class="filter-color" @click="selectOrange" d="M15.4475 16.59C14.958 16.9163 14.414 17.1339 13.8701 17.2427V26C16.8074 25.8368 19.527 24.6402 21.6484 22.7908L15.4475 16.59Z" fill="#f54d05"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'v-palette-filter',
  methods: {
    selectGreen () {
      alert('выбран зеленый')
    },
    selectYellow () {
      alert('выбран желтый')
    },
    selectBlue () {
      alert('выбран синий')
    },
    selectWhite () {
      alert('выбран белый')
    },
    selectGrey () {
      alert('выбран серый')
    },
    selectBlack () {
      alert('выбран черный')
    },
    selectRed () {
      alert('выбран красный')
    },
    selectOrange () {
      alert('выбран оранжевый')
    }
  }
}
</script>

<style lang="scss">
  .size-palette{
    width: 260px;
    height: 260px;
  }
  .filter-color{
    cursor: pointer;
  }
</style>
