<template>
  <div>
    <HeaderFront />
    <main class="main">
      <b-container>
        <b-row>
          <b-col>
            <Nuxt />
          </b-col>
          <b-col lg="3">
            <SidebarBlog />
          </b-col>
        </b-row>
      </b-container>
    </main>
    <FooterFront />
  </div>
</template>
<script>
import SidebarBlog from '~/components/SidebarBlog'
export default {
  components: { SidebarBlog },
}
</script>
