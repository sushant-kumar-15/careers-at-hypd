<template>
  <div class="container">
    <section class="first-section">
      <div class="first-section-column">
        <div class="main-title main-title-white">Discover Your Best.</div>
        <div class="content white-content" style="max-width: 480px; margin-top: 20px">
          At HYPD, you will find your best, grow your best, and redefine your own worth.
        </div>
        <button class="main-button" @click="scrollToJobs">Apply Now</button>
      </div>
      <div class="full-image-container">
        <img class="full-image" src="../assets/img/bg.jpg" alt="" />
      </div>
    </section>
    <section style="border-bottom: 1px solid #e9eaee">
      <!-- <div style="margin: 80px 0">
        <div class="main-title">Who? What? How?</div>
        <div class="content" style="margin-top: 12px">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </div>
      </div> -->
      <div class="three-columns-row" style="margin: 80px 0">
        <div>
          <div><img src="../assets/img/group.svg" alt="" /></div>
          <div class="main-title second-title" style="margin-top: 12px">Who we are</div>
          <div class="content">
            A family spanning the globe, who continuously strive to innovate, create, and
            disrupt!
          </div>
        </div>
        <div>
          <div><img src="../assets/img/price-tag.svg" alt="" /></div>
          <div class="main-title second-title" style="margin-top: 12px">What we do</div>
          <div class="content">
            We are disrupting the Creators Economy, while building for new age Brands,
            Creators and Consumers, all at the same time!. Not reinventing the wheel, just
            mimicking human behavior digitally by enabling our “Watch It, Like It, Buy It”
            formula!
          </div>
        </div>
        <div>
          <div><img src="../assets/img/technology.svg" alt="" /></div>
          <div class="main-title second-title" style="margin-top: 12px">How we do it</div>
          <div class="content">
            By creating a platform charged with intelligence that provides exclusive
            access to brands, creators and consumers to engage with one another and
            understand their ever-evolving needs.
          </div>
        </div>
      </div>
    </section>
    <section>
      <div style="margin: 80px 0 50px 0">
        <div class="main-title">Why Hypd?</div>

        <div class="content" style="margin-top: 18px">
          If you want to carve your own space, believe in working hard & partying harder,
          this is your place to be!
        </div>
      </div>
      <div class="three-columns-row three-columns-row-left">
        <div>
          <div class="indicator-with-content">
            <div class="indicator orange-indicator">01</div>
            <div class="second-title main-title third-title">
              Complete ownership and freedom of your position, and ideas!
            </div>
          </div>
        </div>
        <div>
          <div class="indicator-with-content">
            <div class="indicator green-indicator">02</div>
            <div class="second-title main-title third-title">
              Be in a culture where you will meet like-minded people who help achieve each
              other’s goals and evil plans to take over the world.
            </div>
          </div>
        </div>
        <div>
          <div class="indicator-with-content">
            <div class="indicator yellow-indicator">03</div>
            <div class="second-title main-title third-title">
              At HYPD, you’ll grow slightly slower than the speed of light. But we’re
              destined to speed up sooner than ever!
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div
        class="slider-root"
        id="slider"
        v-touch:swipe.left="slideLeft"
        v-touch:swipe.right="slideRight"
      >
        <div @click="showFirst">
          <img
            src="/company_3.jpg"
            class="slides"
            id="0"
            :class="{ 'center-slide': one }"
            style="margin-left: 65px"
          />
        </div>
        <div @click="showSecond">
          <img
            id="1"
            src="/company_2.jpg"
            class="slides"
            :class="{ 'center-slide': two }"
          />
        </div>
        <div @click="showThird">
          <img
            id="2"
            src="/company_1.jpg"
            class="slides"
            style="margin-right: 65px"
            :class="{ 'center-slide': three }"
          />
        </div>
      </div>
    </section>
    <section class="grayed" id="jobs-section">
      <div class="main-title" style="margin-top: 48px">Want to join us?</div>
      <div class="content" style="margin-top: 12px">
        Please send a cover letter and resume to
        <span class="mail-to"
          ><a href="mailto:careers@hypd.in"> careers@hypd.in </a></span
        >
        or apply at the links below.
      </div>
      <div class="jobs-wrapper" v-if="jobs && jobs.length > 0">
        <div class="job-category-container" v-for="(category, i) in jobs" :key="i">
          <div class="job-category-title" @click="expandJob(i)">
            <div class="job-category second-title">
              {{ category.name }}
              <div class="job-count-indicator">{{ category.job_profiles.length }}</div>
            </div>
            <div class="caret" :class="{ expanded_caret: active_job.includes(i) }">
              <img src="../assets/img/arrow.svg" alt="" />
            </div>
          </div>
          <div
            class="jobs-section"
            :class="{ expanded_jobs_section: active_job.includes(i) }"
          >
            <div class="job-container" v-for="(job, j) in category.job_profiles" :key="j">
              <div>
                <div class="job-title">{{ job.name }}</div>
                <div class="job-description">{{ job.description }}</div>
              </div>
              <router-link :to="'/job/' + job.id" class="apply-button"
                >Apply now <img src="../assets/img/arrow-right.png" alt=""
              /></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      position: 0,
      one: false,
      two: false,
      three: false,
      jobs: [],
      active_job: [],
    };
  },
  methods: {
    scrollToJobs() {
      document.getElementById("jobs-section").scrollIntoView({
        behavior: "smooth",
      });
    },
    expandJob(i) {
      if (this.active_job.includes(i)) {
        let index = this.active_job.indexOf(i);
        this.active_job.splice(index, 1);
      } else {
        this.active_job.push(i);
      }
    },
    slideLeft() {
      if (this.position == 0) {
        document.getElementById("slider").style.transform =
          "translateX(calc(-8px - 46vw))";
        this.position = 1;
        this.three = false;
        this.one = false;
        this.two = true;
        return;
      } else if (this.position == 1) {
        document.getElementById("slider").style.transform =
          "translateX(calc(-8px - 46vw))";
        this.position = 2;
        this.three = true;
        this.one = false;
        this.two = false;
        return;
      }
    },
    slideRight() {
      if (this.position == 1) {
        document.getElementById("slider").style.transform = "translateX(0px)";
        this.position = 0;
        this.three = false;
        this.one = true;
        this.two = false;
        return;
      } else if (this.position == 2) {
        document.getElementById("slider").style.transform = "translateX(0px)";
        this.position = 0;
        this.three = false;
        this.one = false;
        this.two = true;
        return;
      }
    },
    showSecond() {
      if (this.position == 0) {
        this.slideLeft();
      }
    },
    showThird() {
      this.slideLeft();
    },
    showFirst() {
      this.slideRight();
    },
    fetchJobs() {
      this.axios({
        method: "GET",
        url: this.$careerURL + "/api/careers",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          this.jobs = response.data.payload;
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.fetchJobs();
    if (this.$route.query.jobs) {
      setTimeout(() => {
        this.scrollToJobs();
      }, 300);
    }
  },
};
</script>

<style scoped>
.container {
  /* margin: 0 120px; */
}

section {
  /* height: 100vh; */
  overflow-x: hidden;
  align-items: center;
  display: grid;
}

.first-section {
  height: calc(100vh - 65px);
  text-align: left;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  text-align: center;
}

.round-half-img {
  border-radius: 50%;
  object-fit: cover;
  width: 70vh;
  height: 70vh;
  margin: 80px 0;
}

.main-title {
  font-family: Gilroy-Bold;
  font-size: 42px;
  color: #000;
}

.main-title-white {
  color: #fff;
}

.first-section .column-two {
  text-align: right;
}

.content {
  color: #7c7c7c;
  font-size: 18px;
}

.white-content {
  color: #fff;
}

.main-button {
  cursor: pointer;
  margin-top: 28px;
  width: 200px;
}

.full-image-container {
  height: calc(100vh - 66px);
  position: relative;
  top: 0;
  left: 0;
}

.full-image-container::after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
}

.full-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.first-section-column {
  position: absolute;
  z-index: 2;
  top: 60%;
  transform: translateY(-10%);
  left: 120px;
}

.three-columns-row {
  /* padding-bottom: 60px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  margin: 0 120px;
  align-items: baseline;
  text-align: center;
}
.second-title {
  font-size: 22px;
}

.three-columns-row .content {
  max-width: 400px;
  margin: 0 auto;
  font-size: 17px;
  margin-top: 12px;
}

.two-columns-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 0 120px;
}

.two-columns-row .column-one {
  text-align: left;
}

.three-columns-row-left {
  text-align: left;
}

.indicator {
  border-radius: 20px;
  font-family: Gilroy-Bold;
  font-size: 16px;
  color: #fff;
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 8px;
}

.orange-indicator {
  background: #fb6c23;
}

.green-indicator {
  background: #23d087;
}

.yellow-indicator {
  background: #fcc742;
}

.three-columns-row .indicator-with-content {
  max-width: 350px;
}

.slider-root {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  transition: linear 0.4s;
  margin: 40px 0;
}
.slider-root::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

.slides {
  margin: 8px;
  height: 680px;
  width: 46vw;
  flex: 0 0 auto;
  object-fit: cover;
  border-radius: 20px;
  cursor: pointer;
}

.grayed {
  background: #fbfbfb;
}

.mail-to a {
  color: #fb6c23;
  font-family: Gilroy-Bold;
  text-decoration: none;
}

.jobs-wrapper {
  margin: 40px 260px;
}

.job-category-container {
  padding: 18px;
  border-bottom: 1px solid #eee;
}

.job-category-title {
  font-family: Gilroy-Bold;
  color: #000;
  text-align: left;
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
  cursor: pointer;
}

.caret {
  transform: rotate(180deg);
  cursor: pointer;
  transition: 0.4s linear;
}

.expanded_caret {
  transform: none;
}

.job-count-indicator {
  background: #2597df;
  color: #fff;
  font-size: 13px;
  font-family: Gilroy-Medium;
  padding: 4px 12px;
  border-radius: 20px;
  display: inline;
  vertical-align: middle;
  text-align: center;
  margin-left: 12px;
}

.jobs-section {
  margin: 0;
  max-height: 0;
  transition: all 0.25s ease-out;
  overflow: hidden;
}

.expanded_jobs_section {
  margin: 16px;
  max-height: 1000px;
  transition: max-height 0.45s ease-in;
}

.apply-button {
  padding: 0;
  color: #fb6c23;
  text-decoration: none;
  border-bottom: 1px dotted #fb6c23;
}

.job-container {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed #eee;
  padding: 15px;
  align-items: center;
  text-align: left;
}

.job-container:last-of-type {
  border-bottom: none;
  padding-bottom: 0;
}

.job-title {
  font-family: Gilroy-Bold;
  font-size: 17px;
  color: #000;
}

.job-description {
  margin-top: 6px;
  color: #7c7c7c;
  font-size: 14px;
}

a img {
  vertical-align: middle;
}

.apply-button img {
  height: 10px;
  margin-left: 6px;
}

.third-title {
  font-size: 18px;
}
@media (min-width: 320px) and (max-width: 480px) {
  .container {
    margin: 0;
  }

  .first-section-column {
    text-align: center;
    position: absolute;
    bottom: 0;
    transform: none;
    left: auto;
  }

  .three-columns-row {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
    grid-gap: 68px;
  }

  .slider-root {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 45px;
  }

  .slides {
    height: auto;
    width: 90vw;
    margin: 0 auto !important;
  }

  section {
    display: block;
  }

  .jobs-wrapper {
    margin: 20px auto;
    margin-top: 50px;
  }
}
</style>
