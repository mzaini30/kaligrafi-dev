<script>
  import "../style/font.css";
  import namaFont from "../script/nama-font";

  let fontSize = 50;
  let teks = "الحمد لله رب العالمين";
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
  <div class="card mb-10">
    <div class="card-content p-2 fg-white bg-black">Support Me</div>
    <div class="card-content p-2">
      Gopay : 0815 4514 3654 <br />
      Paypal : muhzaini30@gmail.com
    </div>
  </div>
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
</style>
