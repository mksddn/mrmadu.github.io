<template>
  <div>
    <script src="https://vk.com/js/api/openapi.js?168"></script>
    <div id="vk_groups"></div>
    <script>
      VK.Widgets.Group(
        'vk_groups',
        { mode: 3, no_cover: 1, width: '340' },
        73108189
      )
    </script>
  </div>
</template>

<script>
export default {
  name: 'WidgetVK'
}
</script>

<style lang="sass" scoped></style>
