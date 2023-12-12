<template>
  <Layout>
    <!-- title -->
    <div
      class="max-w-5xl mx-auto text-center text-4xl font-bold mt-8 mb-4 text-wrap px-4"
    >
      {{ $page.project.title }}
    </div>

    <!-- author list -->
    <div class="max-w-5xl mx-auto my-4 px-4">
      <div class="flex flex-wrap justify-center">
        <div
          :key="author.name"
          v-for="(author, i) in $page.project.authors"
          class="text-lg"
        >
          <span>
            <a :href="author.link" target="_blank">{{ author.name }}</a>
          </span>
          <span class="text-sm align-top">{{ author.affiliation_idx }}</span>
          <span v-if="i != $page.project.authors.length - 1" class="mr-2"
            >,</span
          >
        </div>
      </div>
    </div>

    <!-- affiliation list -->
    <div class="max-w-5xl mx-auto text-center mt-4 px-4">
      <div
        :key="affi.name"
        v-for="(affi, i) in $page.project.affiliations"
        class="text-lg text-wrap"
      >
        <span class="text-sm align-top">{{ i + 1 }}</span>
        <span>{{ affi }}</span>
        <span v-if="i != $page.project.affiliations.length - 1" class="mr-2"
          >,</span
        >
      </div>
    </div>

    <!-- links -->
    <div class="flex mt-5 justify-center gap-2">
      <div v-for="(link, i) in $page.project.links" :key="'link_' + i">
        <a
          :href="link.link"
          target="_blank"
          class="flex bg-purple-900 text-white p-2 px-5 rounded-full hover:text-white hover:bg-purple-700"
          >{{ link.name }}</a
        >
      </div>
    </div>

    <!-- main content -->
    <div class="max-w-5xl mx-auto px-4 project text-base">
      <VueRemarkContent />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.project.title,
      titleTemplate: null,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$page.project.excerpt ? this.$page.project.excerpt : "",
        },
      ],
    };
  },
};
</script>
  
<page-query>
query ($id: ID!) {
  project(id: $id) {
    title
    abbr
    excerpt
    authors{
        name
        link
        affiliation_idx
    }
    affiliations
    links{
        name
        link
    }
  }
}
</page-query>

<style>
.project h2 {
  font-size: 1.5em;
  margin-top: 24px;
  margin-bottom: 12px;
}

.project p {
  color: #4a4a4a;
  line-height: 1.5;
  margin-bottom: 6px;
}

.project #abstract {
  text-align: center;
}

.project pre {
  background-color: #f5f5f5;
  padding: 12px 24px;
  overflow: auto;
  font-size: 14px;
}

.project img {
  max-width: 100%;
  margin: 12px auto;
  display: block;
}
</style>