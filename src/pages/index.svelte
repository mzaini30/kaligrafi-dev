<script>
  import "../style/font.css";
  import namaFont from "../script/nama-font";

  let fontSize = 50;
  let teks = "";
  let warna = "#000";
</script>

<div class="container">
  <input
    dir="rtl"
    type="text"
    data-role="input"
    placeholder="اكتب هنا"
    bind:value={teks}
  />

  {#if teks}
    {#each namaFont as item}
      <div class="card">
        <div class="card-header">{item}</div>
        <div
          style="font-size: {fontSize}px; font-family: '{item}';
          color: {warna}"
          dir="rtl"
          class="card-content p-2 kaligrafinya"
        >
          {teks}
        </div>
      </div>
    {/each}
  {/if}
  <a href="https://zen.thedev.id/komunitas.html" class="d-block komunitas"
    >COMMUNITY</a
  >
  <div class="fixed-bottom bg-white px-3 d-flex kontrol">
    <input
      data-role="slider"
      data-hint="true"
      class="slider"
      data-value={fontSize}
      on:change={(x) => (fontSize = x.detail.val)}
    />
    <input type="color" class="d-block mt-1" bind:value={warna} />
  </div>
</div>

<style>
  .kontrol {
    gap: 10px;
    box-shadow: 0 0 10px 0 gray;
  }
  .komunitas {
    text-decoration: none;
    width: min-content;
    color: #212121;
    border: 1px solid #212121;
    border-radius: 3px;
    padding: 3px 10px;
    margin: 10px auto; /* margin-top: 10px; */
    font-size: 14px;
    margin-bottom: 33px;
  }
</style>
