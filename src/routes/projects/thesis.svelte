<script>
  import '../../app.css';
  import Header from '../../components/Header.svelte';
  import Carousel from '../../components/Carousel.svelte';
  import InfoSection from '../../components/InfoSection.svelte';
  let imgs = [
    '/assets/gaze/gaze-1.png',
    '/assets/gaze/gaze-2.png',
    '/assets/gaze/gaze-3.png',
    '/assets/gaze/kahlo2.png',
    '/assets/gaze/kahlo1.png',
  ];
  let info = '2021 • Web App • Independent';
  let desc = [
    'How We Gaze is a meta-gallery that shows how individuals gaze at pieces of artwork. The gazes hosted in the gallery are crowd-sourced - individuals are invited to view pieces of artwork, and see their gaze visualized in realtime.',
    'This project was built using the Svelte framework, d3.js for visualization, webgazer.js for eye-tracking, and Firebase for data storage. Observable was used for data exploration.',
  ];
  let link =
    'https://omarnema.com/parsons-studio-1/qual/gaze-study-svelte/public/';
</script>

<Header />
<div class="container">
  <Carousel {imgs} />
  <InfoSection description={desc} {info} {link} />
</div>
