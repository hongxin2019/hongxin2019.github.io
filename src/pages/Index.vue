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
          <img class="rounded shadow-lg"
            :src="require('@/assets/image/' + me.photo)" v-if="me.photo" />
        </div>
        <div class="">
          <p class="text-3xl mt-8 sm:mt-2">
            <span v-if="me.name">{{ me.name }}</span>

            <!-- <span v-if="me.name && me.name_cn"> · </span> -->

            <span v-if="me.name_cn">「{{ me.name_cn }}」</span>
          </p>
          <!-- <p class="text-blue-900 font-medium font-mono">
            {{ me.email }}
          </p> -->
          <p class="mt-3 max-w-sm sm:max-w-md" v-html="me.bio" v-if="me.photo">
          </p>
          <p class="mt-5" v-html="me.bio" v-else></p>
          <div v-if="me.email || me.github || me.scholar || me.cv"
            class="mt-3 text-blue-900 flex" :set="(me_prev = false)">
            <p v-if="me.email">
              <a :href="'mailto:' + me.email" class="flex items-start"
                :set="(me_prev = true)">
                Email
              </a>
            </p>
            <p v-if="me_prev" class="mx-1">/</p>
            <p v-if="me.github">
              <a :href="me.github" class="flex items-start"
                :set="(me_prev = true)">
                Github
              </a>
            </p>
            <p v-if="me_prev" class="mx-1">/</p>
            <p v-if="me.scholar">
              <a :href="me.scholar" class="flex items-start">
                Google Scholar
              </a>
            </p>
            <p v-if="me_prev" class="mx-1">/</p>
            <p v-if="me.cv">
              <a :href="me.cv" class="flex items-start"> CV </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="border-b border-gray-300" v-viewer>
      <div class="sm:px-0 px-5 my-16 max-w-3xl mx-auto">
        <p class="text-2xl mb-8 font-medium">Research</p>

        <p v-if="me.interests" class="my-8">
          {{ me.interests }}
        </p>

        <div class="sm:flex py-5 sm:py-0" v-for="pub in publications"
          :key="pub.title">
          <div class="
              sm:p-5 sm:pl-0
              pl-0
              w-full
              sm:w-1/4
              flex flex-col
              justify-center
            ">
            <img class="" :src="require('@/assets/image/' + pub.img)"
              v-if="pub.img" />
          </div>
          <div class="
              sm:p-5
              py-2
              sm:pr-0
              pr-0
              w-full
              sm:w-3/4
              flex flex-col
              justify-center
            ">
            <p class="font-bold">
              <a :href="pub.homepage || pub.code || pub.pdf"
                v-if="pub.homepage || pub.code || pub.pdf">
                <span class="link">{{ pub.title }}</span>
              </a>
              <span class="" v-else>{{ pub.title }}</span>
            </p>
            <div class="text-sm">
              <p class="">
                <span v-for="(author, index) in pub.authors" :key="author">
                  <span class="font-bold"
                    v-if="author == $page.metadata.me.name">{{ author }}</span>
                  <span v-else>{{ author }}</span>
                  <span v-if="index != pub.authors.length - 1">, </span>
                </span>
              </p>
              <p class="">
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
                  <span
                    v-if="pub.proceeding_abbr">{{ pub.proceeding_abbr }}</span>
                  <span v-else>{{ pub.proceeding }}</span>
                </span>
                <span>, {{ pub.year }}</span>
                <span class="font-bold" v-if="pub.honor">,{{ pub.honor }}</span>
              </p>
            </div>
            <div class="flex items-center" :set="(previous = false)">
              <div v-if="pub.homepage">
                <a :href="pub.homepage">
                  <span :set="(previous = true)">Project Page</span>
                </a>
              </div>
              <div v-if="pub.code">
                <span v-if="previous" class="mx-1">/</span>
                <a :href="pub.code">
                  <span :set="(previous = true)">Code</span>
                </a>
              </div>
              <div v-if="pub.notebook">
                <span v-if="previous" class="mx-1">/</span>
                <a :href="pub.notebook">
                  <span :set="(previous = true)">Colab Demo</span>
                </a>
              </div>
              <div v-if="pub.pdf">
                <span v-if="previous" class="mx-1">/</span>
                <a :href="pub.pdf">
                  <span :set="(previous = true)">Paper</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sm:px-0 px-5 my-16 max-w-3xl mx-auto">
        <p class="text-2xl mb-4 font-medium">Project</p>
        <div class="sm:flex py-5 sm:py-0" v-for="project in me.cluster.projects"
          :key="project.title">
          <div class="
              sm:p-5 sm:pl-0
              pl-0
              w-full
              sm:w-1/4
              flex flex-col
              justify-center
              scale-150
            ">
            <img
              :src="project.img.startsWith('http') ? project.img : require('@/assets/image/' + project.img)"
              class="" v-if="project.img" />
          </div>
          <div class="
              sm:p-5
              py-2
              sm:pr-0
              pr-0
              w-full
              sm:w-3/4
              flex flex-col
              justify-center
            ">
            <p class="font-bold">
              <a :href="project.homepage || project.code"
                v-if="project.homepage || project.code">
                <span class="link">{{ project.title }}</span>
              </a>
              <span class="" v-else>{{ project.title }}</span>
            </p>
            <p class="mt-2">{{ project.brief }}</p>
          </div>
        </div>
      </div>

      <div class="sm:px-0 px-5 my-16 max-w-3xl mx-auto">
        <p class="text-2xl mb-4 font-medium">Review Experiences</p>
        <p class="py-5">{{ me.review_experiences }}</p>
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

<style>

</style>

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
      cv
			bio
      interests
      review_experiences
			cluster {
				publications {
					title
					authors
					proceeding
					proceeding_abbr
					year
					homepage
					code
          notebook
					pdf
					honor
          img
          brief
				}
        projects {
          title
          code
          homepage
          img
          brief
        }
			}
		}
	}
}
</page-query>
