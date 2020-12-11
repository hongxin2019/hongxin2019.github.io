<template>
  <Layout>
    <!-- <div
      class="fixed top-0 right-0 m-8 p-3 text-xs font-mono text-white h-6 w-6 rounded-full flex items-center justify-center bg-blue-700 sm:bg-pink-500 md:bg-blue-900 lg:bg-blue-900 xl:bg-blue-900"
    >
      <div class="block  sm:hidden md:hidden lg:hidden xl:hidden">al</div>
      <div class="hidden sm:block  md:hidden lg:hidden xl:hidden">sm</div>
      <div class="hidden sm:hidden md:block  lg:hidden xl:hidden">md</div>
      <div class="hidden sm:hidden md:hidden lg:block  xl:hidden">lg</div>
      <div class="hidden sm:hidden md:hidden lg:hidden xl:block">xl</div>
    </div> -->
    <div class="border-b border-gray-300">
      <div
        class="flex flex-wrap px-5 py-16 mx-auto max-w-3xl sm:flex-no-wrap md:flex-no-wrap lg:flex-no-wrap xl:flex-nowrap"
      >
        <!-- <img
          class="rounded mr-10 shadow-xl"
          :src="me.photo"
          width="200" v-if="me.photo"
        /> -->
        <img
          class="rounded mr-10 shadow-lg"
          :src="require('@/assets/image/' + me.photo)"
          width="200"
          height="281"
          v-if="me.photo"
        />
        <div class="flex-col-reverse flex">
          <p class="mt-5 max-w-sm" v-html="me.bio" v-if="me.photo"></p>
          <p class="mt-5" v-html="me.bio" v-else></p>
          <p class="text-blue-900 font-medium font-mono">
            {{ me.email }}
          </p>
          <p class="mt-8 text-2xl font-bold">
            <span v-if="me.name_cn">{{ me.name_cn }}</span>
            <span v-if="me.name && me.name_cn"> · </span>
            <span v-if="me.name">{{ me.name }}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="border-b border-gray-300">
      <div class="px-5 py-16 max-w-3xl mx-auto">
        <p class="text-2xl font-bold mb-8">Publications</p>

        <div class="my-5" v-for="pub in publications" :key="pub.title">
          <p class="font-bold italic">{{ pub.title }}</p>
          <p class="text-blue-900">
            <span v-for="(author, index) in pub.authors" :key="author">
              <span class="font-bold" v-if="author == $page.metadata.me.name">{{
                author
              }}</span>
              <span v-else>{{ author }}</span>
              <span v-if="index != pub.authors.length">, </span>
            </span>
          </p>
          <p class="text-blue-900">
            <span>{{ pub.proceeding }}</span>
            <span v-if="pub.proceeding_abbr" class="font-bold">
              ({{ pub.proceeding_abbr }})
            </span>
            <span>, {{ pub.year }}</span>
            <span class="font-bold" v-if="pub.honor">{{ pub.honor }}</span>
            <span>.</span>
          </p>
          <div class="flex flex-row my-2">
            <a-btn class="mr-3" v-if="pub.pdf" :href="pub.pdf"> PDF </a-btn>
            <a-btn class="mr-3" v-if="pub.code" :href="pub.code"> Code </a-btn>
            <a-btn class="mr-3" v-if="pub.project" :href="pub.project">
              Project
            </a-btn>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import ButtonLink from '../components/ButtonLink';

export default {
  components: {
    'a-btn': ButtonLink,
  },
  metaInfo() {
    return {
      title: 'Homepage',
    };
  },
  methods: {
    compare_pub: function (a, b) {
      if (a.year > b.year) {
        return 1;
      } else if (a.year < b.year) {
        return -1;
      }

      if (a.pdf > b.pdf) {
        return 1;
      } else if (a.pdf < b.pdf) {
        return -1;
      }

      return 0;
    },
  },
  computed: {
    me: function () {
      return this.$page.metadata.me;
    },
    publications: function () {
      var pubs = this.me.cluster.publications;
      return pubs.sort(this.compare_pub).reverse();
    },
  },
};
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
