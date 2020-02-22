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
        class="bio divider flex flex-wrap px-5 py-10
        sm:flex-no-wrap md:flex-no-wrap lg:flex-no-wrap xl:flex-nowrap"
      >
        <g-image
          class="rounded mr-10 shadow-xl"
          src="~/assets/hongxin.jpg"
          width="200"
        />
        <div class="flex-col-reverse flex">
          <p class="mt-5 max-w-sm">
            I am a Ph.D. student advised by
            <a class="" href="http://www.bigdatalab.ac.cn/~lanyanyan/"
              >Yanyan Lan</a
            >
            at the Institute of Computing Technology (ICT), Chinese Academy of
            Sciences. I work in the areas of computer vision and machine
            learning with focus on visual reasoning, and joint processing of
            text and image data. Before joining Yanyan Lan's research group, I
            was an research intern at Megvii working on image inpainting.
          </p>
          <p class="text-orange-900 font-medium font-mono">
            hongxin19b@ict.ac.cn
          </p>
          <p class="mt-8 text-2xl font-bold">洪鑫 · Xin Hong</p>
        </div>
      </div>

      <div class="publications divider px-5 py-10">
        <p class="text-2xl font-bold">Publications</p>

        <div class="mt-3">
          <p class="font-bold italic">
            Deep Fusion Network for Image Completion
          </p>
          <p class="text-orange-900">
            <span class="font-bold">Xin Hong</span>, Pengfei Xiong, Haoqiang
            Fan.
          </p>
          <p class="text-orange-900">
            ACM International Conference on Multimedia (<span class="font-bold"
              >ACMMM</span
            >), 2019.
          </p>
          <div class="flex flex-row">
            <p class="mr-3">
              <a class="" href="/pdf/mm-2019-dfnet.pdf">
                PDF
              </a>
            </p>
            <p class="mr-3">
              <a class="" href="https://github.com/hughplay/DFNet">
                Code
              </a>
            </p>
          </div>
        </div>

        <div class="mt-5">
          <p class="font-bold italic">
            Attention-driven Factor Model for Explainable Personalized
            Recommendation
          </p>
          <p class="text-orange-900">
            Jingwu Chen, Fuzhen Zhuang,
            <span class="font-bold">Xin Hong</span>, Xiang Ao, Xing Xie, Qing
            He.
          </p>
          <p class="text-orange-900">
            ACM SIGIR Conference on Research and Development in Information
            Retrieval (<span class="font-bold">SIGIR</span>), 2018.
          </p>
          <div class="flex flex-row">
            <p class="mr-3">
              <a class="" href="/pdf/sigir-2018-afm.pdf">
                PDF
              </a>
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
  metaInfo: {
    title: "Homepage"
  }
};
</script>

<style>
</style>
