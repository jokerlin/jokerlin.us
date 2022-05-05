<script setup lang="ts">
import { useRouter } from 'vue-router'
import { englishOnly, formatDate } from '~/utils'

export interface Post {
  path: string
  title: string
  date: string
  lang?: string
  duration?: string
}

const props = defineProps<{
  type?: string
  posts?: Post[]
}>()

const router = useRouter()
const routes: Post[] = router.getRoutes()
  .filter(i => i.path.startsWith('/posts') && (i.meta.frontmatter as Post)?.date)
  .sort((a, b) => +new Date((b.meta.frontmatter as Post).date) - +new Date((a.meta.frontmatter as Post).date))
  .map(i => ({
    path: i.path,
    title: (i.meta.frontmatter as Post).title,
    date: (i.meta.frontmatter as Post).date,
    lang: (i.meta.frontmatter as Post).lang,
    duration: (i.meta.frontmatter as Post).duration,
  }))

const posts = computed(() => (props.posts || routes).filter(i => !englishOnly.value || i.lang !== 'zh'))
</script>

<template>
  <ul>
    <template v-if="!posts.length">
      <div py2 op50>
        No Post yet.
      </div>
    </template>
    <app-link
      v-for="route in posts" :key="route.path"
      class="item block font-normal mb-6 mt-2 no-underline"
      :to="route.path"
    >
      <li class="no-underline">
        <div class="title text-lg">
          {{ route.title }}
          <sup
            v-if="route.lang === 'zh'"
            class="text-xs border border-current rounded px-1 pb-0.2"
          >中文</sup>
        </div>
        <div class="time opacity-50 text-sm -mt-1">
          {{ formatDate(route.date) }}
          <span v-if="route.duration" class="opacity-50">· {{ route.duration }}</span>
        </div>
      </li>
    </app-link>
  </ul>
</template>
