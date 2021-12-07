<template>
  <Dashboard>

    
      <PostItem v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>


  </Dashboard>
</template>

<script>
import PostItem from '~/components/PostItem.vue'

export default {
  components: {
    PostItem
  },
  metaInfo: {
    title: 'Code, Art, and Whatnot'
  }
}
</script>

<page-query>
query {
  posts: allPost(filter: { status: { eq: "published" }}, limit: 7) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
           cover_image 
        ext_image
        path
        category {
          id
          title
        }
        
        
      }
    }
  }
}
</page-query>

<style lang="scss">

</style>
