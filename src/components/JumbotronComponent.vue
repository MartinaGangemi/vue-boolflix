<template>
    <!-- jumbotron -->
        <div class="jumbo p-5">
            <div class="container h-100 container-fluid d-flex flex-column justify-content-around">
                <h2 class="text-light ">Scelti per Martina Oggi</h2>
                <div class="w-50 testo-jumbo">
                    <div>
                        <img src="@/assets/img/title.png" alt="">
                    </div>
                    <p class="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta magnam beatae exercitationem eligendi ipsam, quas blanditiis commodi omnis maxime eaque incidunt voluptatum consequatur sapiente non libero, at velit voluptatem est?</p>
                </div>
            </div>
           
        </div>
</template>

<script>

export default {
   name: "JumbotronComponent"
}
</script>

<style lang="scss" scoped>

    .jumbo{
        -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(255, 255, 255, 0)));
        background-image: url(@/assets/img/jumbo.jpg);
        height: 600px;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: #141922bf;
        background-blend-mode: multiply;
    }
   
</style>
