<script>
  import "../style/font.css";
  import namaFont from "../script/nama-font";

  let fontSize = 50;
  let teks = "";
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
          style="font-size: {fontSize}px; font-family: '{item}'"
          dir="rtl"
          class="card-content p-2"
        >
          {teks}
        </div>
      </div>
    {/each}

    <div class="jarak" />
  {/if}
  <div class="card">
    <div class="card-content p-2 fg-white bg-black">Support Me</div>
    <div class="card-content p-2">
      Gopay : 0815 4514 3654 <br />
      Paypal : muhzaini30@gmail.com
    </div>
  </div>
  <button
    on:click={() => (fontSize += 10)}
    class="button tambah primary success cycle ">&plus;</button
  >
  <button
    on:click={() => (fontSize -= 10)}
    class="button primary kurang warning cycle ">&minus;</button
  >
</div>

<style>
  .button.cycle {
    font-size: 30px;
  }
  .tambah,
  .kurang {
    position: fixed;
    bottom: 10px;
  }
  .tambah {
    right: 10px;
  }
  .jarak {
    width: 100%;
    height: 50px;
  }
</style>
