<template>
  <StyledHeader>
    <div class="hubble">

      <img src="/images/Logo.svg" alt=" " class="img1" />
      <div className="  btn1">
        <button className="">Product</button>
        <img src="/images/dots.svg" alt=" " className=" " />
        <button className="">Performance</button>
        <img src="/images/dots.svg" alt=" " className=" " />

        <button className="">Dashboard</button>
      </div>
    <button className="btn">Login</button>
    </div>
  </StyledHeader>
</template>

<script>
import { StyledHeader } from "./style/Header.styled.js";
export default {
  name: "HeaderFunction",
  components: { StyledHeader },
};
</script>
