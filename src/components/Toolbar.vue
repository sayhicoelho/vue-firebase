<template>
  <div>
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click.stop="$emit('toggle')"></v-toolbar-side-icon>
      <v-toolbar-title>
        {{ $route.meta.title }}
      </v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'toolbar'
}
</script>

