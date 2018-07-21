<template>
  <div>
    <v-container>
      <p>
        Welcome <strong>{{ currentUser.displayName }}</strong>!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad voluptatem voluptate aliquam fugiat incidunt laudantium, nulla, amet ducimus numquam reprehenderit perferendis natus tempora ratione repudiandae modi rerum nisi explicabo.
      </p>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  computed: mapState(['currentUser'])
}
</script>
