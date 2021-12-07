<template>
    <div title="genres" class="rounded h-200 movie-detail-genre">
        <ul class="flex flex-wrap">
            <li v-for="genre in genres" :key="genre.id">{{genre.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'MovieGenres',
  props: ['genres']
}
</script>