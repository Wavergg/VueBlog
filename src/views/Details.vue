<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button class="" @click="handleDelete">Delete Post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '@/composables/getPost'
import { useRoute } from 'vue-router'
import { useRouter} from 'vue-router'

// component imports
import Spinner from '../components/Spinner.vue'
import { projectFireStore } from '../firebase/config'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    // console.log(route)
    // console.log(route.params)
    const { error, post, load } = getPost(route.params.id)

    load()

    const handleDelete = async () => {
      await projectFireStore.collection('posts').doc(props.id).delete()

      router.push({name: 'Home'})
    }

    return { error, post, handleDelete }
  },
}
</script>

<style scoped>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
</style>