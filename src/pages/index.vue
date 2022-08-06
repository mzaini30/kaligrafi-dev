<script setup="" lang="ts">
import { ref } from "vue";
import Info from "info-zen";

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

// const { stringify, parse } = JSON;

const teks = ref("");
const fontSize = ref(50);
// const blog: Ref<any> = ref({});

function perbesar() {
  fontSize.value += 10;
}

function perkecil() {
  fontSize.value -= 10;
}

// if (localStorage.blog) {
//   blog.value = parse(localStorage.blog);
// }

// async function ambil(): Promise<void> {
//   let data = await fetch("https://android.zenia.my.id/pertama.json");
//   data = await data.json();
//   blog.value = data;
//   localStorage.blog = stringify(data);
// }
// ambil();
</script>

<template>
  <Info></Info>
  <!-- <div class="text-sm bg-black text-white text-center p-2 truncate">
    <a
      :href="`https://android.zenia.my.id/tulisan/${blog.slug}`"
      class="underline decoration-dotted"
      >{{ blog.judul }}</a
    >
  </div> -->
  <div class="p-3">
    <input
      type="text"
      class="w-full mb-3 border border-slate-200 focus:outline-none focus:border-slate-500 p-2 rounded"
      style="direction: rtl"
      placeholder="اكتب هنا"
      @keyup="teks = ($event.target as HTMLInputElement).value"
    />

    <div
      v-for="item in namaFont"
      v-if="teks"
      class="border border-slate-200 rounded-sm p-3 mb-3 shadow"
    >
      <div class="text-green-500 pb-2">{{ item }}</div>
      <div
        class="text-right break-words"
        :style="`font-size: ${fontSize}px; font-family: '${item}'`"
      >
        <div class="">{{ teks }}</div>
      </div>
    </div>

    <p class="text-center">
      <a
        href="https://play.google.com/store/apps/details?id=com.trihandayani.kaligrafi"
        class="text-blue-500"
        >Review This App</a
      >
      &bull;
      <router-link to="/credit" class="text-blue-500">Credit</router-link>
    </p>

    <div class="w-full h-[50px]">&nbsp;</div>

    <img class="tombol left-3" src="/icon/minus.png" @click="perkecil" alt="" />
    <img class="tombol right-3" src="/icon/add.png" @click="perbesar" alt="" />
  </div>
</template>

<style>
@font-face {
  font-family: "Ah Moharram";
  src: url("/font/Ah-moharram-bold.ttf");
}

@font-face {
  font-family: "Al-Battar";
  src: url("/font/ae_AlBattar.ttf");
}

@font-face {
  font-family: "Al-Jazeera";
  src: url("/font/Aljazeera.ttf");
}

@font-face {
  font-family: "Al-Watan Headlines";
  src: url("/font/AlWatanHeadlines-Bold.ttf");
}

@font-face {
  font-family: "Ara Aqeeq";
  src: url("/font/AraAqeeq-Bold.ttf");
}

@font-face {
  font-family: "Arabics";
  src: url("/font/BArabics.ttf");
}

@font-face {
  font-family: "Basim Marah Beh";
  src: url("/font/Basim Marah Beh Light.ttf");
}

@font-face {
  font-family: "Boutros Art";
  src: url("/font/BoutrosART-Medium.otf");
}

@font-face {
  font-family: "Cocon";
  src: url("/font/cocon.otf");
}

@font-face {
  font-family: "Diwan";
  src: url("/font/Diwanltr.ttf");
}

@font-face {
  font-family: "Edilbi Souria";
  src: url("/font/EdilbiSouria.ttf");
}

@font-face {
  font-family: "Fanni";
  src: url("/font/Fanni.ttf");
}

@font-face {
  font-family: "Farsi";
  src: url("/font/Frsspbl.ttf");
}

@font-face {
  font-family: "Hacen Saudi Arabia";
  src: url("/font/HacenSaudiArabia.ttf");
}

@font-face {
  font-family: "Hamada";
  src: url("/font/Hamada_light_font.ttf");
}

@font-face {
  font-family: "Hayah";
  src: url("/font/Hayah.otf");
}

@font-face {
  font-family: "Ibtisam";
  src: url("/font/HSN_Ibtisam.ttf");
}

@font-face {
  font-family: "Khat Thuluth";
  src: url("/font/Khat Thuluth.TTF");
}

@font-face {
  font-family: "Khayal";
  src: url("/font/Khayal_Demo.ttf");
}

@font-face {
  font-family: "Maghribi Assile";
  src: url("/font/Maghribi Assile.ttf");
}

@font-face {
  font-family: "Naskh";
  src: url("/font/AdobeNaskh-Medium.otf");
}

@font-face {
  font-family: "Noora";
  src: url("/font/M Unicode Noora.ttf");
}

@font-face {
  font-family: "Sadiyah";
  src: url("/font/HSN_sadiyah.ttf");
}

@font-face {
  font-family: "Sardar Hoor";
  src: url("/font/A Sardar Hoor otf.otf");
}

@font-face {
  font-family: "Thuluth";
  src: url("/font/A.Thuluth_p30download.com.ttf");
}

@font-face {
  font-family: "Uthmanic Hafs";
  src: url("/font/UthmanicHafs1 Ver09.otf");
}
</style>

<style scoped="">
.tombol {
  @apply w-12 cursor-pointer fixed bottom-3 bg-white rounded-3xl;
}
</style>
