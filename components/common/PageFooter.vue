<template>
  <footer>
    <a
      href="mailto:zukovskijtomas@gmail.com"
      target="_blank"
      class="mail"
    />
    <a
      href="https://www.instagram.com/tomaszukovskij/"
      target="_blank"
      class="instagram"
    />
  </footer>
</template>
<style lang="scss" scoped>
footer {
  width: 100%;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  a {
    width: 50px;
    height: 50px;
    opacity: 0.5;
    &:hover {
      opacity: 0.7;
    }
    &.mail {
      background: url("../../assets/img/envelope-regular.svg") center center
      no-repeat;
      background-size: 30px;
    }
    &.instagram {
      background: url("../../assets/img/instagram-brands.svg") center center
      no-repeat;
      background-size: 30px;
    }
  }
  @media all and (max-width: 800px) {
    padding-bottom: 20px;
  }
}
</style>
