<template>
<footer class="footer">
    <div class="container is-fluid">
        <div class="btt">
            <button ref="scrollIntoView" @click="scrollToElement">
                <img alt="Back to top" src="../assets/img/arrow-top.png">
            </button>
        </div>       
        <hr/>
    </div>
    <a href="#">Contact</a>
</footer>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default {
  name: 'Footer',
  props: {
    msg: String
  },
  methods: {
    scrollToElement() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    }
  },
  mounted() {
    this.scrollToElement();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .footer {
        padding:0 !important;
        background-color:transparent !important;
        text-align:center;
        color:$mediumblue;
        margin-bottom:2rem;
        a {
            color:$mediumblue;
            text-transform:uppercase;
            font-family:$bold-font;
            font-size: 14px;
            &:hover {
                color:$darkblue;
            }
        }
        hr {
            background:$mediumblue;
            max-width: 90%;
            margin:1.5rem auto;
            height:1px;
        }
        button {
            background: transparent;
            border: 0;
            cursor:pointer;
        }
    }
</style>
