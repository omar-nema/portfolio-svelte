<script>
  export let data;
  let maxDate = Math.max(...data.years);
  let displayDate = maxDate;
  if (data.years.length > 1) {
    minDate = Math.min(...data.years);
    displayDate = minDate + ' - ' + maxDate;
  }
  import { page } from '$app/stores';
  import { selectedProject, transitionTime } from '../stores/state';
  import { fade } from 'svelte/transition';
</script>

<a
  class="card"
  sveltekit:prefetch
  href={data.url}
  transition:fade
  on:click={() => {
    $selectedProject = data.title;
  }}
>
  <div class="list-row card-title"><span>{data.title}</span></div>
  <div class="list-row card-body">
    {data.description}
  </div>
  <div class="list-row card-footer">
    {#each data.tags as tag}
      <div
        class="chip"
        class:datavis={tag == 'datavis'}
        class:art={tag == 'art'}
        class:product={tag == 'product'}
      >
        {tag}
      </div>
    {/each}
    <div class="chip date">{displayDate}</div>
  </div>
</a>

<style>
  .card {
    text-decoration: none;
    margin-bottom: 30px;
    margin-right: 30px;
    border: 1px dashed #a9a9a9;
    padding: 20px;
    background: white;
    position: relative;
    width: calc(33% - 30px);
    height: auto;
    transition: border-color 0.2s ease-in-out, box-shadow 0.3s ease-in-out;
    cursor: pointer;
    font-size: 16px;
  }
  .card:hover {
    border-color: black;
    box-shadow: 1px 2px 1px 0 rgba(0, 0, 0, 0.15);
  }

  .card-title {
    font-weight: 700;
    color: black;
    justify-content: space-between;
    align-items: center;
    text-decoration: underline;
    text-decoration-thickness: 0.5px;
  }

  .card-body {
    height: 100px;
    padding-top: 15px;
    color: black;
    font-weight: 400;
  }
  .list-row {
    display: flex;
  }

  .card-footer {
    display: flex;
  }
  .chip {
    font-size: 14px;
    margin-right: 10px;
    border-radius: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 2px 10px;
    font-weight: 400;
    color: white;
    border: 1.3px solid transparent;
    font-weight: 600;
    background: none;
  }
  .chip.date {
    background: #3f3e3e;
  }
  .chip.datavis {
    color: var(--color-tag-datavis);
    border-color: var(--color-tag-datavis);
    background: var(--color-tag-datavis-bg);
  }
  .chip.art {
    color: var(--color-tag-art);
    border-color: var(--color-tag-art);
    background: var(--color-tag-art-bg);
  }
  .chip.product {
    color: var(--color-tag-product);
    border-color: var(--color-tag-product);
    background: var(--color-tag-product-bg);
  }
</style>
