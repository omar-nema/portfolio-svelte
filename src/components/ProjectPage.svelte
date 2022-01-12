<script>
  import '../app.css';
  import Header from '../components/Header.svelte';
  import Carousel from '../components/Carousel.svelte';
  import InfoSection from '../components/InfoSection.svelte';
  export let imgs = [];
  export let info;
  export let desc = [];
  export let link = null;
</script>

<Header />
<div class="container">
  <Carousel {imgs} />
  <InfoSection description={desc} {info} {link} />
</div>
