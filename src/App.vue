<template>
  <div class="app">
    <Header ref="Header" />
    <router-view />
    <Notifications>
      <template #body="props">
        <div class="my-notification"
             :class="{ success: props.item.type === 'success', error: props.item.type === 'error' }">
                <span class="notification-content">
                {{ props.item.text }}
                </span>
        </div>
      </template>
    </Notifications>
  </div>
</template>

<script>
import Header from "./components/Common/Header.vue";

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
    }
  }

}
</script>

<style scoped>
.vue-notification-group {
  top: calc(100vh / 2) !important;
  left: 50%;
  max-width: 400px !important;
  transform: translate(-50%, -50%);
}

.my-notification {
  display: flex;
  justify-content: center;
  margin: 0 5px 5px;
  padding: 10px;
  border-radius: 5px;
  opacity: 0.7;
}

.my-notification button {
  color: white;
  margin-right: 0.5rem;
}

.my-notification .notification-content {
  color: white;
  font-size: 14px;
}

.my-notification.success {
  background: #1EA76E;
}

.my-notification.error {
  background: #FC4545;
}
</style>
