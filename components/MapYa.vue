<template>
  <div id="map"></div>
</template>

<script>
export default {
  name: 'MapYa',
  mounted() {
    const mapScript = document.createElement('script')
    mapScript.setAttribute(
      'src',
      'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A664d466ee90cea0092381a9c37d823d6e4e861820fee158c89cf7038a05b99d6&amp;width=100%25&amp;height=300&amp;lang=ru_RU&amp;scroll=false'
    )
    document.querySelector('#map').append(mapScript)
  },
}
</script>

<style lang="sass">
#map
  position: absolute
  width: 100%
  height: 100%
  z-index: 1
</style>
