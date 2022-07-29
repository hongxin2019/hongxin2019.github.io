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
      <div class="flex flex-wrap px-5 py-16 mx-auto max-w-3xl sm:flex-no-wrap">
        <!-- <img
          class="rounded mr-10 shadow-xl"
          :src="me.photo"
          width="200" v-if="me.photo"
        /> -->
        <div class="w-40 mr-10">
          <img
            class="rounded shadow-lg object-contain"
            :src="require('@/assets/image/' + me.photo)"
            v-if="me.photo"
          />
        </div>
        <div class="">
          <p class="text-3xl mt-8 sm:mt-2">
            <span v-if="me.name">{{ me.name }}</span>

            <!-- <span v-if="me.name && me.name_cn"> · </span> -->

            <span v-if="me.name_cn">「{{ me.name_cn }}」</span>
          </p>
          <p class="text-blue-900 font-medium font-mono">
            {{ me.email }}
          </p>
          <p
            class="mt-3 max-w-sm sm:max-w-md"
            v-html="me.bio"
            v-if="me.photo"
          ></p>
          <p class="mt-5" v-html="me.bio" v-else></p>
          <div v-if="me.github || me.scholar" class="mt-3 text-blue-900 flex">
            <p v-if="me.github" class="mr-3">
              <a :href="me.github" class="flex items-start">
                <git-hub-icon
                  class="mr-1"
                  size="1.25x"
                  fill="#2a4365"
                ></git-hub-icon>
                Github
              </a>
            </p>
            <p v-if="me.scholar">
              <a :href="me.scholar" class="flex items-start">
                <google-scholar-icon
                  class="mr-1"
                  size="1.25x"
                  fill="#2a4365"
                ></google-scholar-icon>
                Google Scholar
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="border-b border-gray-300">
      <div class="px-5 py-16 max-w-3xl mx-auto">
        <p class="text-xl mb-8 font-medium">Research</p>

        <div class="mt-8" v-for="(pub, pub_i) in publications" :key="pub.title">
          <div class="sm:flex">
            <div class="w-64 sm:w-64">
              <a :href="pub.homepage || pub.pdf">
                <img
                  :src="require('@/assets/image/' + pub.img)"
                  class="object-contain"
                  v-if="pub.img"
                />
              </a>
            </div>
            <div class="mt-2 sm:mt-0 sm:ml-5 w-full">
              <p class="font-bold">
                <a :href="pub.homepage" v-if="pub.homepage">
                  <span class="link">{{ pub.title }}</span>
                </a>
                <span class="" v-else>{{ pub.title }}</span>
              </p>
              <div class="text-sm">
                <p class="text-gray-700">
                  <span v-for="(author, index) in pub.authors" :key="author">
                    <span
                      class="font-bold"
                      v-if="author == $page.metadata.me.name"
                      >{{ author }}</span
                    >
                    <span v-else>{{ author }}</span>
                    <span v-if="index != pub.authors.length - 1">, </span>
                    <span v-else>.</span>
                  </span>
                </p>
                <p class="text-gray-700">
                  <!-- <span>{{ pub.proceeding }}</span>
                  <span class="">
                    <span
                      v-if="pub.proceeding_abbr"
                      class="font-bold text-blue-900"
                    >
                      ({{ pub.proceeding_abbr }})</span
                    ><span>, {{ pub.year }}</span>
                  </span> -->
                  <span class="italic">
                    <span v-if="pub.proceeding_abbr">{{
                      pub.proceeding_abbr
                    }}</span>
                    <span v-else>{{ pub.proceeding }}</span>
                  </span>
                  <span>,{{ pub.year }}</span>
                  <span class="font-bold" v-if="pub.honor"
                    >,{{ pub.honor }}</span
                  >
                </p>
              </div>
              <div class="flex text-gray-900 items-center mt-2 pl-1">
                <a
                  :href="pub.homepage"
                  v-if="pub.homepage"
                  class="block mr-3 hover:text-blue-800 flex items-center"
                >
                  <font-awesome-icon class="text-lg" :icon="['fas', 'home']" />
                </a>
                <a
                  :href="pub.code"
                  v-if="pub.code"
                  class="block mr-3 hover:text-blue-800 flex items-center"
                >
                  <git-hub-icon size="1.2x" class="custom-class"></git-hub-icon>
                </a>
                <a
                  :href="pub.notebook"
                  v-if="pub.notebook"
                  class="block mr-3 hover:text-blue-800 flex items-center"
                >
                  <google-colab-icon size="1.25x"></google-colab-icon>
                </a>
                <a
                  :href="pub.pdf"
                  v-if="pub.pdf"
                  class="block mr-3 hover:text-blue-800 flex items-center"
                >
                  <adobe-acrobat-reader-icon
                    size="1.2x"
                  ></adobe-acrobat-reader-icon>
                </a>
              </div>
            </div>
          </div>
          <div
            class="border-b h-8 w-full"
            v-if="pub_i != publications.length - 1"
          ></div>
        </div>
      </div>
    </div>

    <div class="">
      <div class="px-5 py-16 max-w-3xl mx-auto flex justify-center">
        <div class="w-64" id="counter-wrap"></div>
      </div>
    </div>
  </Layout>
</template>

<script>
import ButtonLink from "../components/ButtonLink";
import {
  GoogleColabIcon,
  GitHubIcon,
  GoogleScholarIcon,
  AdobeAcrobatReaderIcon,
} from "vue-simple-icons";

export default {
  components: {
    "a-btn": ButtonLink,
    GoogleColabIcon,
    GitHubIcon,
    GoogleScholarIcon,
    AdobeAcrobatReaderIcon,
  },
  metaInfo() {
    return {
      title: "Xin Hong",
      titleTemplate: null,
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
  mounted() {
    if (process.env.NODE_ENV != "development") {
      let counter = document.createElement("script");
      counter.setAttribute(
        "src",
        "//cdn.clustrmaps.com/map_v2.js?cl=374151&w=a&t=tt&d=2aJ6BDWYMWIFRD7ZCecw8HTEpJgFvXZj4gPf96mQlHM&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=6b7280"
      );
      counter.setAttribute("id", "clustrmaps");
      document.getElementById("counter-wrap").appendChild(counter);
    }
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
      github
      scholar
			bio
			cluster {
				publications {
					title
					authors,
					proceeding,
					proceeding_abbr,
					year,
					homepage,
					code,
          notebook,
					pdf,
					honor,
          img
				}
			}
		}
	}
}
</page-query>
