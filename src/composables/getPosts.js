import { ref } from 'vue'
import { projectFireStore } from '../firebase/config'

const getPosts = () => {

  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      // let data = await fetch('http://localhost:3000/posts')
      // if(!data.ok) {
      //   throw Error('no available data')
      // }
      // posts.value = await data.json()

      const res = await projectFireStore.collection('posts')
        .orderBy('createdAt','desc')
        .get()

      posts.value = res.docs.map(doc => {
        return { ...doc.data(), id: doc.id}
      })
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { posts, error, load }
}

export default getPosts