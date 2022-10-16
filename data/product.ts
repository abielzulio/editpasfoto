/* Static data about product */

interface Product {
  name: string
  description: {
    short: string
    long: string
  }
  tagline: string
  keywords: string
  url: string
  img: string
  author: string
  favicon: string
}

export const product: Product = {
  name: "Edit Pas Foto",
  description: {
    short: "Edit Almamater, Jas Formal, dan Ganti Latar Foto",
    long: "Editpasfoto merupakan aplikasi swaedit pas foto berbasis web dengan fitur mengganti ratio ukuran foto dan menambah layer almamater kampus & jas formal",
  },
  tagline: "Edit pas foto, tanpa skill edit foto",
  keywords: "edit pas foto, pas foto, ganti ratio, almamater, jas formal",
  url: "https://editpasfoto.vercel.app/",
  img: "/img/og.png",
  author: "Abiel Zulio M",
  favicon: "/img/favicon.png",
}
