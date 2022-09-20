<template>
  <footer>
    <div class="wrapper">
      <div id="footer">
        <div class="footer__social">
          <a
            target="_blank"
            href="https://www.instagram.com/tomaszukovskij/"
            class="instagram"
          ></a>
        </div>
        <div class="footer__contact">
          <a href="mailto:tomas.zukovskij@gmail.com">tomas.zukovskij@gmail.com</a>
          <a href="tel:+37060952811">+37060952811</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped lang="scss">
footer {
  padding-bottom: 50px;
  font-family: 'Oxygen', sans-serif;
  margin-top: 100px;
}
#footer, .footer__contact {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer__contact {
  font-size: .9em;
  a {
    padding: 5px 20px;
    color: #006d77;
  }
}
.footer__social {
  a {
    width: 50px;
    height: 50px;
    display: block;
    color: red;
    &:hover {
      opacity: 0.7;
    }
    &.facebook {
      background: url("../../assets/img/facebook-brands.svg") center center
      no-repeat;
      background-size: 20px;
    }
    &.instagram {
      background: url("../../assets/img/instagram-brands.svg") center center no-repeat;
      background-size: 25px;
    }
  }
}
</style>
