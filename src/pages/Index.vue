<template>
  <Layout>
    <!-- <div
      class="fixed top-0 right-0 m-8 p-3 text-xs font-mono text-white h-6 w-6 rounded-full flex items-center justify-center bg-orange-700 sm:bg-pink-500 md:bg-orange-900 lg:bg-orange-900 xl:bg-orange-900"
    >
      <div class="block  sm:hidden md:hidden lg:hidden xl:hidden">al</div>
      <div class="hidden sm:block  md:hidden lg:hidden xl:hidden">sm</div>
      <div class="hidden sm:hidden md:block  lg:hidden xl:hidden">md</div>
      <div class="hidden sm:hidden md:hidden lg:block  xl:hidden">lg</div>
      <div class="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
    </div> -->
    <div class="container max-w-3xl font-normal">
      <div
        class="divider flex flex-wrap px-5 py-10
        sm:flex-no-wrap md:flex-no-wrap lg:flex-no-wrap xl:flex-nowrap"
      >
        <img
          class="rounded mr-10 shadow-xl"
          :src="me.photo"
          width="200" v-if="me.photo"
        />
        <div class="flex-col-reverse flex">
          <p class="mt-5 max-w-sm" v-html="me.bio" v-if="me.photo"></p>
          <p class="mt-5" v-html="me.bio" v-else></p>
          <p class="text-orange-900 font-medium font-mono">
            {{ me.email }}
          </p>
          <p class="mt-8 text-2xl font-bold">
            <span v-if="me.name_cn">{{me.name_cn}}</span>
            <span v-if="me.name && me.name_cn"> · </span>
            <span v-if="me.name">{{me.name}}</span>
          </p>
        </div>
      </div>

      <div class="divider px-5 py-10">
        <p class="text-2xl font-bold">Publications</p>

        <div
          class="mt-5"
          v-for="pub in me.cluster.publications"
          :key="pub.title"
        >
          <p class="font-bold italic">{{ pub.title }}</p>
          <p class="text-orange-900">
            <span v-for="(author, index) in pub.authors" :key="author">
              <span class="font-bold" v-if="author == $page.metadata.me.name">{{ author }}</span>
              <span v-else>{{ author }}</span>
              <span v-if="index != pub.authors.length">, </span>
            </span>
          </p>
          <p class="text-orange-900">
            {{ pub.proceeding }} (<span class="font-bold">{{
              pub.proceeding_abbr
            }}</span
            >), {{ pub.year }}<span class="font-bold" v-if="pub.honor"> {{ pub.honor }}</span>.
          </p>
          <div class="flex flex-row">
            <p class="mr-3" v-if="pub.pdf">
              <a class="" :href="pub.pdf">PDF</a>
            </p>
            <p class="mr-3" v-if="pub.code">
              <a class="" :href="pub.code">Code</a>
            </p>
            <p class="mr-3" v-if="pub.project">
              <a class="" :href="pub.project">Project</a>
            </p>
          </div>
        </div>
      </div>

      <p class="mb-20"></p>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'Homepage',
    }
  },
  computed: {
    me: function () {
      return this.$page.metadata.me
    }
  }
}
</script>

</script>

<style></style>

<page-query>
query {
	metadata: metadata {
		me {
			name
			name_cn
      photo
			email
			bio
			cluster {
				publications {
					title
					authors,
					proceeding,
					proceeding_abbr,
					year,
					pdf,
					code,
					project,
					honor
				}
			}
		}
	}
}
</page-query>
