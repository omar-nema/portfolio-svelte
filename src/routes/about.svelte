<script>
  import '../app.css';
  import Header from '../components/Header.svelte';
  import Card from '../components/Card.svelte';
  import Filters from '../components/Filters.svelte';
  import { projectData } from '../stores/projectData';
  import { fade, slide } from 'svelte/transition';
</script>

<Header />
<div class="content">
  <div class="about-page">
    <div class="about-header">
      <span>about omar</span>
    </div>
    <div class="about-body">
      <p />
      <p>I am a: technologist, strategist, and educator.</p>
      <p>
        Since graduating with a biomedical engineering degree in 2015, I have
        been drawn to creative, socially-minded applications of technology. In
        2016, I moved from a data engineering position to product management in
        pursuit of a more craft-based, human-centered role. From 2016-2021, I
        managed and designed all care-focused applications at Arcadia.io as a
        Senior Product Manager.
      </p>
      <p>
        Outside of work, I have developed a deep fascination for the interplay
        between data, technology, and the human experience. After creating some
        of my own visualization projects, I decided to to push my craft further
        by enrolling in the Data Visualization program at Parsons School of
        Design.
      </p>
      <p>
        I am currently finishing up my degree (set to graduate in May 2022),
        doing freelance work, and teaching creative coding course at Parsons.
      </p>
      <p style="color: gray">
        Note: this website only contains my independent creative tech work.
        Professional product management and freelance work are *not* shown here.
      </p>
    </div>
    <div class="about-footer">
      <a class="download-btn" href="/">
        download cv
      </a>
    </div>
  </div>
</div>

<style>
  .about-page {
    margin: auto;
    max-width: 750px;
    margin-bottom: 30px;
    margin-top: 30px;
    line-height: 1.4rem;
    background: white;
    padding: 50px;
    border: 1px dashed black;
  }

  .about-header {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 40px;
  }
  .about-header span {
    border-bottom: 2px solid black;
    padding-bottom: 5px;
  }
  .download-btn {
    width: auto;
    display: inline-block;
    color: #416bfd;
    border: 1px solid #416bfd;
    background: white;
    padding: 5px 10px;
    margin-top: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.15s linear;
    text-decoration: none;
  }
  .download-btn:hover {
    background: #f3f3f9;
  }

  @media only screen and (max-width: 600px) {
    .about-page {
      margin-top: 0px;
      margin-bottom: 0;
      background: none;
      width: 100%;
      border: none;
      padding: 50px 35px;
    }
  }
</style>
