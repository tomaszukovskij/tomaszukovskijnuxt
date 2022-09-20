<template>
  <footer>
    <div class="wrapper">
      <div id="footer">
        <div class="footer__social">
          <a href="">IG</a>
          <a href="">FB</a>
        </div>
        <div class="footer__contact">
          <span>Susiekime:</span>
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
}
#footer, .footer__contact {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer__contact {
  a {
    padding: 5px 20px;
    color: #006d77;
  }
}
</style>
