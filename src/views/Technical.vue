<template>
  <main class="Financial">
    <img src="../assets/img/2.jpeg">

    <section class="area">
      <div class="field" data-aos="fade-up">
        <img src="../assets/img/yard.png">
        <h3>مساحة الأرض</h3>  
        <span>3000 <b>م²</b></span>
      </div>
      <div class="field" data-aos="fade-up" data-aos-delay="100">
        <img src="../assets/img/building.png">
        <h3>عدد الادوار</h3>  
        <span>6 ادوار</span>
        <p>( بدروم, أرضي ,5 ادوار )</p>
      </div>
      <div class="field" data-aos="fade-up" data-aos-delay="200">
        <img src="../assets/img/market.png">
        <h3>المشروع يضم</h3>  
        <span>مجمع سكني و سنتر تجاري</span>
      </div>
    </section>
  </main>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted() {
    AOS.init({
      duration: 1000,
      once: true
    })
  }
}
</script>

<style lang="scss">
@import '../assets/style/conf';

.Financial {
  height: 3000px;

  img {
    width: 100%;
  }

  .area {
    width: 100%;
    text-align: center;
    margin: 100px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .field {

      img {
        width: 150px;
        border-radius: 10px;
        box-shadow: 1px 3px 5px 1px rgba($color: $prim, $alpha: .3);
      }

      h3 {
        font-size: 2em;
        color: $prim;
        margin: 30px 0 10px;
      }

      span {
        font-size: 1.5em;

        b {
          font-weight: 300;
          font-size: 20px;
        }
      }

      p {
        font-size: 1.2em;
        margin-top: 10px;
      }
    }
  }
}
</style>