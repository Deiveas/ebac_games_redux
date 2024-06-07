import express, { json } from 'express'
import cors from 'cors'

const app = express()
const PORT = 4000

app.use(cors())
app.use(json())

app.get('/produtos', (req, res) => {
  res.json([
    {
      id: 1,
      titulo: 'FIFA 23',
      plataformas: ['Xbox Series S/X', 'Windows', 'PS5'],
      precoAntigo: 299,
      preco: 190,
      categoria: 'Esportes',
      imagem:
        'https://image.api.playstation.com/vulcan/ap/rnd/202301/0312/yM0eeJui8AFByeP5BC5XV5j9.png?w=440&thumb=false'
    },
    {
      id: 2,
      titulo: 'Gotham Knights',
      plataformas: ['Xbox Series S/X', 'PS5', 'Windows'],
      precoAntigo: 299,
      preco: 150,
      categoria: 'Ação',
      imagem:
        'https://image.api.playstation.com/vulcan/ap/rnd/202204/1422/cXffCEiRPrxFapUs6zxJQp1k.png?w=440&thumb=false'
    },
    {
      id: 3,
      titulo: 'The Witcher 3',
      plataformas: ['Xbox Series S/X', 'PS5', 'Windows'],
      precoAntigo: 349,
      preco: 140.9,
      categoria: 'Ação',
      imagem:
        'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png?w=440&thumb=false'
    },
    {
      id: 4,
      titulo: 'Hogwarts Legacy',
      plataformas: ['PS5', 'Windows'],
      precoAntigo: null,
      preco: 349.9,
      categoria: 'Aventura',
      imagem:
        'https://image.api.playstation.com/vulcan/ap/rnd/202011/0919/JmxLZt6exeqcKRz7BSmK8aId.png?w=440&thumb=false'
    },
    {
      id: 5,
      titulo: 'Resident Evil 4',
      plataformas: ['PS5'],
      precoAntigo: null,
      preco: 349.9,
      categoria: 'Terror',
      imagem:
        'https://image.api.playstation.com/vulcan/ap/rnd/202207/2509/85p2Dwh5iDhUzRKe40QeNYh3.png?w=440&thumb=false'
    },
    {
      id: 6,
      titulo: 'Death Stranding',
      plataformas: ['PC'],
      precoAntigo: null,
      preco: 259.9,
      categoria: 'Terror',
      imagem:
        'https://editors.dexerto.com/wp-content/uploads/2022/12/26/death-stranding-epic-games-store-free-christmas-gift.jpg'
    },
    {
      id: 7,
      titulo: 'Resident Evil 2',
      plataformas: ['PC'],
      precoAntigo: null,
      preco: 269.9,
      categoria: 'Terror',
      imagem:
        'https://www.vavache.fr/wp-content/uploads/2019/03/vignette_Resident_Evil_2_Remake-large.png'
    },
    {
      id: 8,
      titulo: 'Resident Evil MegaCombo',
      plataformas: ['XBOX ONE'],
      precoAntigo: null,
      preco: 549.9,
      categoria: 'Terror',
      imagem: 'https://i.ebayimg.com/images/g/acwAAOSwFMRhN93o/s-l1600.webp'
    }
  ])
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
