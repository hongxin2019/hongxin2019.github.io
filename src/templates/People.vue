<template>
  <Layout>
    <!-- Header -->
    <div id="banner" class="h-12 py-8 w-full text-xl fixed top-0 select-none">
      <div
        class="md:max-w-5xl px-4 flex justify-between mx-auto items-center h-full">
        <div class="font-bold cursor-pointer" @click="scroll_to('info')">{{ $page.people.name }}</div>
        <div class="flex gap-2 md:gap-8">
          <span class="text-base hover:bg-gray-100 rounded-lg p-2 cursor-pointer"
            @click="scroll_to('info')">Home</span>
          <span class="text-base hover:bg-gray-100 rounded-lg p-2 cursor-pointer"
            @click="scroll_to('publications')">Publications</span>
          <span class="text-base hover:bg-gray-100 rounded-lg p-2 cursor-pointer"
            @click="scroll_to('projects')">Projects</span>
        </div>
      </div>
    </div>

    <!-- Basic Information -->
    <div id="info"
      class="max-w-5xl mx-auto text-base mt-16 pt-4 px-4 flex flex-wrap gap-4 md:gap-16 h-full">
      <!-- Photo -->
      <div>
        <img :src="$page.people.photo" class="w-48" />
      </div>

      <!-- Affiliation -->
      <div class="flex flex-col leading-6 mt-4">
        <!-- name -->
        <div class="text-3xl font-bold mb-5">
          <span>{{ $page.people.name }}</span>
          <span v-if="$page.people.name_cn">
            「{{ $page.people.name_cn }}」
          </span>
        </div>
        <!-- affi -->
        <div v-for="(affi, i) in $page.people.affiliation" :key="'affi' + i">
          {{ affi }}
        </div>
        <!-- links -->
        <div class="mt-4 flex">
          <div class="flex" v-for="(link, i) in $page.people.links"
            :key="'link' + i">
            <div class="text-blue-700">
              <a :href="link.link" target="_blank">{{ link.name }}</a>
            </div>
            <div v-if="i != $page.people.links.length - 1" class="mx-1">/</div>
          </div>
        </div>
      </div>

      <!-- Topics -->
      <div class="mt-4 md:mt-8 leading-6">
        <div class="font-bold">Current Research Topics:</div>
        <ul class="list-disc list-inside mt-1">
          <li v-for="topic in $page.people.topics" :key="topic" class="ml-2">
            <!-- <a
              class="text-blue-700 cursor-pointer"
              @click="
                set_pubs_list('topic', topic);
                scroll_to('publications');
              "
              >{{ topic }}</a
            > -->
            {{ topic }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Self Description write with Markdown -->
    <div class="max-w-5xl text-base mx-auto leading-6 mt-8 people px-4">
      <VueRemarkContent />
    </div>

    <!-- Publications -->
    <div class="max-w-5xl text-base mx-auto leading-6 mt-16 px-4">
      <div id="publications" class="text-xl font-bold mb-2">
        <span>Publications</span>
      </div>
      <div v-for="(cluster, i) in pubs_list" :key="'cluster_' + i">
        <div class="mt-8 mb-5 font-bold text-gray-600">
          {{ cluster.title }}
        </div>
        <div v-for="(pub, i) in cluster.pubs" :key="'pub' + i"
          class="md:flex gap-4 mb-8 md:mb-6">
          <!-- figure -->
          <div class="w-full md:w-64 flex-none">
            <v-lazy-image v-if="pub.figure"
              :src="pub.figure ? pub.figure : 'null'"
              class="md:w-64 md:h-32 md:object-contain" />
          </div>
          <div class="mt-2 md:mt-0 flex flex-col shrink">
            <!-- title -->
            <div class="font-bold">{{ pub.title }}</div>
            <!-- authors -->
            <div class="flex text-gray-600 flex-wrap mt-1">
              <div v-for="(author, j) in pub.authors"
                :key="'pub_' + i + '_' + j">
                <a v-if="author.link" :href="author.link" target="_blank"
                  class="hover:underline"
                  :class="isCurrentAuthor(author.name) ? 'font-bold text-blue-700' : 'text-gray-600'"
                  v-html="formatAuthorName(author.name)"></a>
                <span v-else :class="isCurrentAuthor(author.name) ? 'font-bold text-blue-700' : ''"
                  v-html="formatAuthorName(author.name)"></span>
                <span class="pr-2" v-if="j != pub.authors.length - 1">,</span>
              </div>
            </div>
            <!-- links -->
            <div class="mt-1">
              <span class="font-bold text-blue-700">
                <a v-if="pub.venue.link" :href="pub.venue.link"
                  target="_blank">{{ pub.venue.name }} {{
          pub.venue.year
        }}</a>
                <span v-else>{{ pub.venue.name }} {{ pub.venue.year }}</span>
              </span>
              <span v-for="(link, j) in pub.links.filter(l => l.link && l.link.trim() && l.name && l.name.trim())"
                :key="'publink_' + i + '_' + j">
                <span v-if="j != pub.links.filter(l => l.link && l.link.trim() && l.name && l.name.trim()).length" class="mx-1">/</span>
                <span class="text-blue-700">
                  <a :href="link.link" target="_blank">{{ link.name }}</a>
                </span>
              </span>
            </div>

            <!-- highlights -->
            <div class="flex flex-col text-red-700 font-bold mt-1">
              <div v-for="(hl, j) in pub.highlights"
                :key="'pubhl_' + i + '_' + j" class="flex">
                <div v-if="hl.name">
                  <a v-if="hl.link" href="hl.link" target="_blank"
                    class="text-red-700">{{
          hl.name
        }}</a>
                  <span v-else>{{ hl.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Projects -->
    <div class="max-w-5xl text-base mx-auto leading-6 mt-16 px-4">
      <div id="projects" class="text-xl font-bold mb-5">Projects</div>
      <div v-for="(project, i) in $page.people.projects" :key="'project' + i"
        class="md:flex gap-8 mb-8 md:mb-6">
        <!-- figure -->
        <div class="w-full md:w-64 flex-none">
          <v-lazy-image v-if="project.figure"
            :src="project.figure ? project.figure : 'null'"
            class="md:w-64 md:h-32 md:object-contain" />
        </div>
        <div class="mt-2 md:mt-0 flex flex-col shrink">
          <!-- title -->
          <div class="font-bold">{{ project.title }}</div>
          <!-- authors -->
          <div class="flex text-gray-600 flex-wrap mt-1">
            <div v-for="(author, j) in project.authors"
              :key="'pub_' + i + '_' + j">
              <a v-if="author.link" :href="author.link" target="_blank"
                class="hover:underline"
                :class="isCurrentAuthor(author.name) ? 'font-bold text-blue-700' : 'text-gray-600'"
                v-html="formatAuthorName(author.name)"></a>
              <span v-else :class="isCurrentAuthor(author.name) ? 'font-bold text-blue-700' : ''"
                v-html="formatAuthorName(author.name)"></span>
              <span class="pr-2" v-if="j != project.authors.length - 1">,</span>
            </div>
          </div>
          <!-- links -->
          <div class="flex mt-1">
            <div v-for="(link, j) in project.links.filter(l => l.link && l.link.trim() && l.name && l.name.trim())"
              :key="'projectlink_' + i + '_' + j" class="flex">
              <div class="text-blue-700">
                <a :href="link.link" target="_blank">{{ link.name }}</a>
              </div>
              <div v-if="j != project.links.filter(l => l.link && l.link.trim() && l.name && l.name.trim()).length - 1" class="mx-1">/</div>
            </div>
          </div>

          <!-- highlights -->
          <div class="flex flex-col text-red-700 font-bold mt-1">
            <div v-for="(hl, j) in project.highlights"
              :key="'projecthl_' + i + '_' + j" class="flex">
              <div v-if="hl.name">
                <a v-if="hl.link" href="hl.link" target="_blank"
                  class="text-red-700">{{
          hl.name
        }}</a>
                <span v-else>{{ hl.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Next -->
    <div class="max-w-5xl text-base mx-auto leading-6 mt-8"></div>
  </Layout>
</template>

<script>
import VLazyImage from "v-lazy-image/v2";

export default {
  components: {
    VLazyImage,
  },

  metaInfo() {
    return {
      title: this.$page.people.name,
      titleTemplate: null,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.people.excerpt ? this.$page.people.excerpt : "",
        },
      ],
    };
  },

  data() {
    return {
      pubs_type: "all", // selected, year, topic
      pubs_list: [],
      selected: "",
    };
  },

  mounted() {
    this.set_pubs_list(this.pubs_type);
    // if anchor in url, scroll to it
    if (this.$route.hash) {
      let element_id = this.$route.hash.substring(1);
      this.scroll_to(element_id);
    }
  },

  methods: {
    formatAuthorName(authorName) {
      if (!authorName) return '';
      // Replace special characters with superscript version
      return authorName.replace(/([*†‡§¶#@^~]+)/g, '<sup>$1</sup>');
    },

    isCurrentAuthor(authorName) {
      if (!authorName || !this.$page.people.name) return false;
      // Remove special characters like *, †, ‡, etc. and trim
      const cleanAuthorName = authorName.replace(/[*†‡§¶#@^~]|\s+$/g, '').trim();
      const currentName = this.$page.people.name.trim();
      return cleanAuthorName === currentName;
    },

    scroll_to(id) {
      const anchor = document.getElementById(id);
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth" });
      }
    },

    set_pubs_list(type, selected) {
      this.pubs_type = type;
      this.selected = selected ? selected : "";
      this.pubs_list = [];
      if (type == "all") {
        this.pubs_list.push({
          title: "",
          pubs: this.pubs_all,
        });
      } else if (type == "selected") {
        this.pubs_list.push({
          title: "",
          pubs: this.pubs_selected["selected"],
        });
      } else if (type == "year") {
        if (selected) {
          this.pubs_list.push({
            title: selected,
            pubs: this.pubs_by_year[selected],
          });
        } else {
          for (const year of this.years) {
            this.pubs_list.push({
              title: year,
              pubs: this.pubs_by_year[year],
            });
          }
        }
      } else if (type == "topic") {
        if (selected) {
          this.pubs_list.push({
            title: selected,
            pubs: this.pubs_by_topic[selected],
          });
        } else {
          for (const topic of this.topics) {
            this.pubs_list.push({
              title: topic,
              pubs: this.pubs_by_topic[topic],
            });
          }
        }
      }
    },
  },

  computed: {
    pubs_all() {
      const pubs =
        this.$page && this.$page.people ? this.$page.people.publications : [];
      return pubs;
    },

    pubs_selected() {
      let pubs_list = { selected: [] };
      for (const pub of this.pubs_all) {
        if (pub.selected) {
          pubs_list["selected"].push(pub);
        }
      }
      return pubs_list;
    },

    topics() {
      return Object.keys(this.pubs_by_topic).sort();
    },

    pubs_by_topic() {
      let pubs_list = {};
      for (const pub of this.pubs_all) {
        for (const topic of pub.topic) {
          if (!pubs_list[topic]) {
            pubs_list[topic] = [];
          }
          pubs_list[topic].push(pub);
        }
      }
      return pubs_list;
    },

    years() {
      return Object.keys(this.pubs_by_year).sort().reverse();
    },

    pubs_by_year() {
      let pubs_list = {};
      let current_year = new Date().getFullYear();
      let earliest_year = current_year - 9;
      for (const pub of this.pubs_all) {
        let year = pub.venue.year;
        if (year <= earliest_year) {
          year = earliest_year + " and before";
        }
        if (!pubs_list[year]) {
          pubs_list[year] = [];
        }
        pubs_list[year].push(pub);
      }
      return pubs_list;
    },
  },
};
</script>


<page-query>
  query ($id: ID!) {
    people(id: $id) {
        name
        name_cn
        excerpt
        photo
        topics
        affiliation
        links {
          name
          link
        }
        publications {
          title
          selected
          topic
          figure
          authors {
            name
            link
          }
          venue {
            name
            year
            link
          }
          links {
            name
            link
          }
          highlights {
            name
            link
          }
        }
        projects {
          title
          figure
          brief
          authors {
            name
            link
          }
          links {
            name
            link
          }
          highlights {
            name
            link
          }
        }
    }
  }
  </page-query>

<style>
#banner {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
}

.people a {
  color: #2b6cb0;
}

.people p {
  line-height: 1.5;
  margin-bottom: 12px;
}

* {
  scroll-margin-top: 64px;
}
</style>