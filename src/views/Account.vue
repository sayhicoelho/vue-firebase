<template>
  <div>
    <navigation-drawer/>
    <router-view/>
  </div>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer'

export default {
  name: 'account',
  components: {
    NavigationDrawer
  }
}
</script>
