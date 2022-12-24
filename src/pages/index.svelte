<script>
  import "../style/font.css";
  import { Page, List, ListInput, Card, Fab, Icon } from "framework7-svelte";
  import Navbar from "../komponen/navbar.svelte";

  const namaFont = [
    "Ah Moharram",
    "Al-Battar",
    "Al-Jazeera",
    "Al-Watan Headlines",
    "Ara Aqeeq",
    "Arabics",
    "Basim Marah Beh",
    "Boutros Art",
    "Cocon",
    "Diwan",
    "Edilbi Souria",
    "Fanni",
    "Farsi",
    "Hacen Saudi Arabia",
    "Hamada",
    "Hayah",
    "Ibtisam",
    "Khat Thuluth",
    "Khayal",
    "Maghribi Assile",
    "Naskh",
    "Noora",
    "Sadiyah",
    "Sardar Hoor",
    "Thuluth",
    "Uthmanic Hafs",
  ];
  let fontSize = 50;
  let teks = "";
</script>

<Page>
  <Navbar />
  <div class="inputan">
    <List noHairlinesMd>
      <ListInput
        outline
        label="اكتب هنا"
        placeholder="Write in Arabic letters"
        floatingLabel
        type="text"
        clearButton
        bind:value={teks}
      />
    </List>
  </div>
  {#if teks}
    {#each namaFont as item}
      <Card outline>
        <span slot="header">{item}</span>
        <div
          style="font-size: {fontSize}px; font-family: '{item}'; direction: rtl"
          slot="content"
        >
          {teks}
        </div>
      </Card>
    {/each}
  {/if}
  <div class="jarak" />
  <div class="tombol">
    <Fab onClick={() => (fontSize += 10)} position="right-bottom" color="green"
      >&plus;</Fab
    >
    <Fab onClick={() => (fontSize -= 10)} position="left-bottom" color="yellow"
      >&minus;</Fab
    >
  </div>
</Page>

<style>
  .inputan :global(input) {
    direction: rtl;
  }
  .inputan :global(.input-clear-button) {
    left: 8px;
  }
  .jarak {
    width: 100%;
    height: 70px;
  }
  .tombol {
    font-size: 50px;
  }
  .tombol :global(.fab) {
    position: fixed;
  }
</style>
