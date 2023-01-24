<template>
  <div>
    <TitlePage :title="post.title.rendered" type="page" />
    <section id="postContent">
      <b-container>
        <b-row>
          <b-col v-if="$route.fullPath.includes('/about/')" lg="3">
            <SidebarAbout isSchedule />
          </b-col>
          <b-col class="cntnt" :class="{'col-lg-9': $route.fullPath.includes('/about/')}">
            <div class="post-text" v-html="post.content.rendered" />
            <br />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <SectionCreed />
    <SectionPosts />
  </div>
</template>

<script>
export default {
  name: 'ContentPost',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped></style>
