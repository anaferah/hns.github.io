<template>
<nav class="main-nav">
    <ul>
        <li>
            <router-link to="/howwedecodeddandruff">How Head & Shoulders Decoded Dandruff</router-link>
        </li>
        <li>
            <router-link to="/trueweightofflake">The true weight of the flake</router-link>         
        </li>     
    </ul>
  </nav>
  <!-- <router-view/> -->
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    nav {
        &.main-nav {
            ul {
                padding:0;
                text-align: right;
                li {
                    list-style:none;
                    display:inline-block;
                    padding-left:2rem;
                    a {
                        color:white;
                        text-transform: uppercase;
                        font-family: $bold-font;
                        font-size:1rem;
                        letter-spacing: 0.9px;
                    }
                }
            }
        }
    }
</style>
