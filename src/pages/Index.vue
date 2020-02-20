<template>
  <Layout>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <div class="columns is-multiline">
              <div class="column is-narrow">
                <g-image src="~/assets/hongxin.jpg" width="176" />
              </div>
              <div class="column">
                <p class="title">Xin Hong （洪鑫）</p>
                <p class="has-text-grey has-text-weight-semibold">
                  I am a PhD student advised by
                  <a href="http://www.bigdatalab.ac.cn/~lanyanyan/"
                    >Yanyan Lan</a
                  >
                  at the Institute of Computing Technology (ICT), Chinese
                  Academy of Sciences. I work in the areas of computer vision
                  and machine learning with focus on visual reasoning, and joint
                  processing of text and image data. Before joining Yanyan Lan's
                  research group, I was an research intern at Megvii working on
                  image inpainting.
                </p>
                <br />
                <p class="has-text-weight-bold">
                  Email: hongxin19b [at] ict.ac.cn
                </p>
              </div>
              <div class="column is-12">
                <hr />
                <p class="title">Publications</p>
              </div>

              <div class="column is-12">
                <p class="has-text-weight-bold">
                  Deep Fusion Network for Image Completion
                </p>
                <p class="has-text-grey">
                  <span class="has-text-weight-bold">Xin Hong</span>, Pengfei
                  Xiong, Haoqiang Fan.
                </p>
                <p class="has-text-grey">
                  ACM International Conference on Multimedia (ACMMM), 2019.
                </p>
                <div class="tags">
                  <span class="tag">
                    <a
                      class="has-text-grey"
                      href="/pdf/mm-2019-dfnet.pdf"
                    >
                      PDF
                    </a>
                  </span>
                  <span class="tag">
                    <a
                      class="has-text-grey"
                      href="https://github.com/hughplay/DFNet"
                    >
                      Code
                    </a>
                  </span>
                </div>
              </div>

              <div class="column is-12">
                <p class="has-text-weight-bold">
                  Attention-driven Factor Model for Explainable Personalized
                  Recommendation
                </p>
                <p class="has-text-grey">
                  Jingwu Chen, Fuzhen Zhuang,
                  <span class="has-text-weight-bold">Xin Hong</span>, Xiang Ao,
                  Xing Xie, Qing He.
                </p>
                <p class="has-text-grey">
                  ACM SIGIR Conference on Research and Development in Information Retrieval (SIGIR), 2018.
                </p>
                <div class="tags">
                  <a href="/pdf/sigir-2019-afm.pdf">
                    <span class="tag is-rounded">PDF</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Homepage"
  }
};
</script>

<style></style>
