<template>
    <div id="preloader">
        <div class="txt">
            <p class="txt-perc">0%</p>
            <div class="progress"><span></span></div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Preloader',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #preloader {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 101;
        background-color: #212121;
        color: #ffffff; 
        .txt {
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%); 
        }
        .txt-perc {
            font-size: 35px;
            font-family: 'Roboto Condensed', Helvetica, Helvetica Neue, Arial, sans-serif;
            opacity: 1;
            margin: 0 0 6px 0;
            max-width: 400px;
            text-align: center; 
        }
        .progress {
            width: 100px;
            height: 3px;
            background-color: rgba(255, 255, 255, 0.2);
            margin: 0 auto 15px auto; 
            span {
                display: block;
                width: 0;
                height: 100%;
                background-color: rgba(255, 255, 255, 0.8); 
            }
        }
        &.is-hidden {
            visibility: hidden;
            opacity: 0; 
        }
        .is-loading {
            overflow: hidden; 
        }
    }
    
</style>
