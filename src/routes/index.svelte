<script>
  import '../app.css';
  import Header from '../components/Header.svelte';
  import Card from '../components/Card.svelte';
  import Filters from '../components/Filters.svelte';
  import { projectData, projectsFiltered } from '../stores/projectData';
  import { fade, slide } from 'svelte/transition';
  import { transitionTime } from '../stores/state';
</script>

<Header />
<div class="content">
  <Filters />
  <div class="project-list-holder">
    {#each $projectsFiltered as project}
      <Card data={project} />
    {/each}
  </div>
</div>

<style>
  .project-list-holder {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    height: auto;
    max-height: calc(
      100vh - var(--dim-header-height) - var(--dim-filter-height) - 65px
    );
  }

  @media only screen and (max-width: 600px) {
    .project-list-holder {
      flex-direction: column;
      flex-wrap: inherit;
      align-items: center;
    }
  }
</style>
