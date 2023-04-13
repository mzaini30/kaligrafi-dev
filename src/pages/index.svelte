<script>
  import "../style/font.css";
  import namaFont from "../script/nama-font";
  import iklan from "../gambar/your-ad-here.jpg";
  import dom_to_image from "dom-to-image";
  import { slug } from "kumpulan-tools";

  let fontSize = 50;
  let teks = "بسم الله الرحمن الرحيم";
  let warna = "#000";
  let element;

  async function download(id) {
    const blob_gambar = await dom_to_image.toBlob(
      document.querySelector(`.isi-${id}`)
    );
    console.log(blob_gambar);
  }
</script>

<div class="py-3 pb-12 min-h-screen">
  <div class="container">
    <input
      dir="rtl"
      class="sticky top-3 z-99"
      type="text"
      data-role="input"
      placeholder="اكتب هنا"
      bind:value={teks}
    />

    {#if teks}
      {#each namaFont as item}
        <div class="card">
          <div class="card-header flex justify-between">
            <div>{item}</div>
            <button on:click={() => download(slug(item))}>download</button>
          </div>
          <div
            style="font-size: {fontSize}px; font-family: '{item}';
          color: {warna}"
            dir="rtl"
            class="card-content p-2 kaligrafinya isi-{slug(item)}"
          >
            {teks}
          </div>
        </div>
      {/each}
    {/if}

    <div class="py-4 mx-auto flex justify-center">
      <a
        href="https://chat.whatsapp.com/HFVW22P2dpeKOMBJFpSqUd"
        class="inline-block mx-auto no-underline black text-sm border border-black rounded text-black p-2"
        >Join Community</a
      >
    </div>

    <!-- <a href="https://wa.me/6281545143654" class="block mt-3"
      ><img src={iklan} alt="" /></a
    > -->

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
