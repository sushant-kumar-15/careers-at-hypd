<template>
  <div>
    <button
      @click="scrollToApplication"
      class="apply-button-main scroll-button"
      style="margin-top: 25px"
    >
      Apply Now
    </button>
    <div class="flex-row" :class="{ blur: received_application }">
      <div class="left-column">
        <div class="main-title">{{ job.name }}</div>
        <div class="view-all" @click="$router.push('/?jobs=true')">View all jobs</div>
        <div v-html="job.body"></div>
      </div>
      <div class="right-column">
        <div class="form-wrapper" id="form-wrapper">
          <div class="main-title second-title">Fill your personal details</div>
          <div class="content">
            We will require your basic details help us evaluate your application
          </div>
          <div class="input-wrapper">
            <label for="">Full name*</label>
            <br />
            <input v-model="fullname" type="text" />
          </div>
          <div class="input-wrapper">
            <label for="">Email address*</label>
            <br />
            <input v-model="email" type="email" />
          </div>
          <div class="input-wrapper">
            <label for="">Phone number*</label>
            <br />
            <span>+91</span
            ><input
              style="padding-left: 35px; width: calc(80% - 31px)"
              type="tel"
              maxlength="10"
              v-model="phoneno"
            />
          </div>
          <div class="input-wrapper">
            <label for="">Your resume</label>
            <div class="file-wrapper" @click="clickFileInput">
              <input
                type="file"
                ref="file_input"
                accept=".pdf"
                @change="fileUpdated"
                hidden
              />
              <div>
                <img v-if="file == ''" src="../assets/img/add.svg" alt="" />
                <img v-else src="../assets/img/file.png" style="height: 32px" alt="" />
                <div v-if="file == ''">Choose a file</div>
                <div v-else>{{ file.name }}</div>
                <div class="content">Size must be less than 1Mb</div>
              </div>
            </div>
          </div>
          <button
            :class="{
              disabled_btn:
                fullname == '' ||
                phoneno == '' ||
                email == '' ||
                file == '' ||
                phoneno.length != 10 ||
                !validateEmail(email) ||
                file_url == '',
            }"
            @click="verifyForm"
            class="apply-button-main"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
    <div class="received-overlay" v-if="received_application">
      <div class="second-title main-title">
        Thank you for applying to work at Hypd. We will reach out to you soon. 🥰
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
      job: "",
      fullname: "",
      phoneno: "",
      email: "",
      file: "",
      file_url: "",
      received_application: false,
    };
  },
  methods: {
    scrollToApplication() {
      let el = document.getElementById("form-wrapper");
      el.scrollIntoView({
        behavior: "smooth",
      });
    },
    validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    clickFileInput() {
      this.$refs.file_input.click();
    },
    fileUpdated(e) {
      this.file = e.target.files[0];
      if (this.file.size > 1000000) {
        alert("The file size is too big!");
        this.file = "";
      } else {
        this.uploadFile();
      }
    },
    uploadFile() {
      var formData = new FormData();
      formData.append("resume", this.file);
      this.axios
        .post(this.$careerURL + "/api/careers/upload", formData)
        .then((response) => {
          this.file_url = response.data.payload;
        })
        .catch((error) => {
          alert(error.response.data.error[0].message);
        });
    },
    verifyForm() {
      this.axios({
        method: "POST",
        url: this.$careerURL + "/api/careers/apply",
        data: {
          name: this.fullname,
          phone_number: {
            prefix: "+91",
            number: this.phoneno,
          },
          email: this.email,
          department_id: this.job.department_id,
          job_profile_id: this.job.id,
          resume_url: this.file_url,
        },
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          this.received_application = true;
          setTimeout(() => {
            this.$router.push("https://hypd.store/");
            window.open("https://hypd.store/");
          }, 2500);
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    scrollTo(0, 0);
    if (this.$route.params.id) {
      this.axios({
        method: "GET",
        url: this.$careerURL + "/api/careers",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          let list = response.data.payload;
          for (let i in list) {
            list[i].job_profiles = list[i].job_profiles.map((obj) => ({
              ...obj,
              department: list[i].name,
            }));
            this.jobs = [...this.jobs, ...list[i].job_profiles];
          }
          let vm = this;
          vm.job = vm.jobs.find((x) => x.id === vm.$route.params.id);
          if (vm.job == "") {
            vm.$router.push("/");
          }
        })
        .catch((error) => console.log(error));
    } else {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
.flex-row {
  margin: 80px 130px;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
}
.main-title {
  font-family: Gilroy-Bold;
  font-size: 42px;
  color: #000;
}

.left-column {
  text-align: left;
  width: 60%;
}

.right-column {
  width: 40%;
  padding-left: 20px;
  text-align: left;
  position: relative;
}

.view-all {
  color: #fb6c23;
  border-bottom: 1px dotted #fb6c23;
  cursor: pointer;
  display: inline;
  font-size: 14px;
}

.second-title {
  font-size: 22px;
}

.form-wrapper {
  position: sticky;
  top: 50%;
  transform: translateY(-50%);
}

.content {
  color: #a9a9a9;
  font-size: 16px;
  margin-top: 12px;
}

.input-wrapper {
  margin: 20px 0;
  position: relative;
}

label {
  color: #a9a9a9;
  font-size: 14px;
}

input {
  padding: 7px 4px;
  outline: none;
  border: none;
  border-bottom: 1px solid #a9a9a9;
  font-family: Gilroy-Bold;
  font-size: 18px;
  width: 80%;
}

.input-wrapper span {
  font-family: Gilroy-Bold;
  font-size: 18px;
  /* margin-right: ; */
  position: absolute;
  bottom: 8px;
}

.file-wrapper {
  margin-top: 8px;
  border: 1px dashed #a9a9a9;
  width: 80%;
  border-radius: 15px;
  place-items: center;
  text-align: center;
  display: flex;
  justify-content: space-around;
  padding: 12px;
  cursor: pointer;
}

.file-wrapper .content {
  margin-top: 0;
  font-size: 14px;
}

.apply-button-main {
  border-radius: 20px;
  background: #fb6c23;
  color: #fff;
  font-family: Gilroy-Bold;
  font-size: 18px;
  padding: 14px 12px;
  border: none;
  outline: none;
  cursor: pointer;
  width: calc(80% + 24px);
}

.disabled_btn {
  background: #eee;
  pointer-events: none;
}

.blur {
  position: relative;
}

.blur:after {
  background-color: rgba(0, 0, 0, 0.6);
  content: "";
  position: absolute;
  left: -50vh;
  top: -50vw;
  height: 150vh;
  width: 150vw;
  overflow-y: hidden;
  z-index: 2;
}

.received-overlay {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  background: #fff;
  border-radius: 20px;
  padding: 16px 40px;
  max-width: 300px;
  left: 50%;
}

.scroll-button {
  display: none;
}

@media (min-width: 320px) and (max-width: 480px) {
  .scroll-button {
    display: block;
    text-align: center;
    margin: 0 auto;
  }

  .flex-row {
    flex-direction: column;
    margin: 20px 16px;
    gap: 60px;
  }

  .left-column,
  .right-column {
    width: 100%;
  }

  .right-column {
    margin-top: 250px;
  }
}
</style>
