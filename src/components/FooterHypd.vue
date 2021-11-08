<template>
  <div class="footer-container" id="scroll-ref">
    <div class="footer flex-space-between" style="align-items: flex-start">
      <div class="description-and-logos footer-column">
        <div class="footer-logo">HYPD.</div>
        <div class="footer-description footer-text mt-14">
          Don't just watch, now shop from snackable videos
        </div>
        <div class="footer-logos mt-42 flex-together">
          <a href="https://www.facebook.com/hypdstore/" target="_blank"
            ><img src="../assets/img/facebook-logo.svg" alt=""
          /></a>
          <a href="https://twitter.com/HypdStore_in" target="_blank"
            ><img src="../assets/img/twitter-logo.svg" alt=""
          /></a>
          <a href="https://www.linkedin.com/company/hypdin/" target="_blank"
            ><img src="../assets/img/linkedin-logo.svg" alt=""
          /></a>
          <a href="https://www.instagram.com/hypd.store" target="_blank"
            ><img src="../assets/img/instagram-logo.svg" alt=""
          /></a>
          <a
            href="https://www.youtube.com/channel/UCNLrrzAIuAKk8MPuBF7H4jQ"
            target="_blank"
            ><img src="../assets/img/youtube-logo.svg" alt=""
          /></a>
        </div>
      </div>
      <div class="footer-column">
        <div class="footer-title">Shopping online</div>
        <div class="footer-links mt-20">
          <div class="footer-link footer-text" @click="downloadApp">Order Status</div>
          <!-- <div class="footer-link footer-text">Shipping and Delivery</div> -->
          <div class="footer-link footer-text" @click="toRefund">
            Refunds & Cancellations
          </div>
          <div class="footer-link footer-text" @click="openContactUs">Contact Us</div>
        </div>
      </div>
      <div class="footer-column">
        <div class="footer-title">Information</div>
        <div class="footer-links mt-20">
          <div class="footer-link footer-text" @click="openAboutUS">About Us</div>
          <div class="footer-link footer-text" @click="toPP">Privacy Policy</div>
          <div class="footer-link footer-text" @click="toTNC">Terms & Conditions</div>
          <div class="footer-link footer-text hiring" @click="redirectToJobs">
            We are hiring!
          </div>
          <!-- <div class="footer-link footer-text">Site feedback</div> -->
        </div>
      </div>
      <div class="footer-column">
        <div class="footer-title">Download App</div>
        <div class="footer-links mt-20">
          <div
            @click="redirectToApp"
            class="footer-link footer-text footer-download-icon"
          >
            <img src="../assets/img/download-playstore.svg" alt="" />
          </div>
          <div
            @click="redirectToApp"
            class="footer-link footer-text footer-download-icon"
          >
            <img src="../assets/img/download-appstore.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="separator">
      <hr />
    </div>
    <div class="footer-copyright footer-text">HYPD - © 2021. ALL RIGHTS RESERVED.</div>
  </div>
</template>

<script>
export default {
  methods: {
    openContactUs() {
      window.open("https://www.hypd.store/contact-us", "_blank");
    },
    openAboutUS() {
      window.open("https://www.hypd.in/", "_blank");
    },
    contact() {
      window.open("mailto:help@hypd.in");
    },
    toRefund() {
      window.open("https://www.hypd.store/refund-cancellation");
    },
    redirectToJobs() {
      window.open("https://www.linkedin.com/company/hypdin/jobs/", "_blank");
    },
    redirectToApp() {
      window.open("https://hypd.onelink.me/tBOn/5dac1a01", "_blank");
    },
    toPP() {
      window.open("https://www.hypd.store/privacy-policy");
    },
    toTNC() {
      window.open("https://www.hypd.store/terms-and-conditions");
    },
    downloadApp() {
      var x = confirm("Let's proceed to the app to help you track your orders.");
      if (x) {
        // var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        // if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        //   return "iOS";
        // } else {
        window.open("https://hypd.onelink.me/tBOn/5dac1a01", "_blank");
        // }
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped>
.footer {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 16px;
  position: relative;
  align-items: flex-start;
}

.footer-logo {
  font-family: Ginger-Regular;
  color: #13141b;
  font-size: 22px;
}

.footer-description {
  max-width: 360px;
}

.footer-text {
  color: #a9a9a9;
  font-size: 14px;
  letter-spacing: 0.011em;
  line-height: 1.3em;
}

.footer-logos {
  column-gap: 28px;
}

.footer-logos a img {
  height: 15px;
}

.footer-title {
  color: #13141b;
  font-size: 14px;
  font-family: Gilroy-Bold;
}

.footer-link {
  margin: 6px 0;
  cursor: pointer;
}

.footer-download-icon {
  margin: 18px 0;
}

.separator {
  position: relative;
  bottom: 0;
}

.separator hr {
  background-color: #ebebeb;
  height: 1px;
  border: 0;
}

.footer-copyright {
  padding: 18px 0;
  text-align: center;
  font-size: 12px;
}

.footer-container {
  bottom: 0;
  max-width: 1440px;
  box-sizing: border-box;
  margin-top: 94px;
  margin-left: auto;
  margin-right: auto;
  padding: 24px 10px 0;
  position: relative;
  z-index: 0;
  background: #fafafa;
}

.mt-20 {
  margin-top: 20px;
}

.mt-14 {
  margin-top: 14px;
}

.mt-42 {
  margin-top: 42px;
}

@media (min-width: 320px) and (max-width: 480px) {
  .footer {
    margin-top: 60px;
  }
  .footer {
    margin: 0 !important;
    flex-direction: column;
    text-align: center;
  }

  .footer-column {
    margin: 20px auto !important;
    text-align: center;
  }
}
</style>
