// App.jsx
import React from 'react';
import './App.css';
import Menu from './Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './card';

export default function App() {

  const animes = [
  {
    nome: 'Naruto',
    imagem: 'https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABdIFYfkylotuQsosH1WlGXHoouJSR59IKXL-xHz1EBGnDra3h7PiJ0E7Oe8wZzKk0hpHSKQGHi7VrGSs64kozAD0u9dXXKO-T4SM.jpg?r=33e'
  },
  {
    nome: 'Blue lock',
    imagem: 'https://preview.redd.it/characters-from-other-sports-anime-that-fits-ego-philosophy-v0-3czmrwld7iwb1.jpg?width=640&crop=smart&auto=webp&s=fa2cf249d061b112125dc3190a37e2af180bb671'
  },
  {
    nome: 'Jujutsu',
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ45iNo7DIIAIYaQIJK0mcvST1FQLdGBffvSA&s'
  },
  {
    nome: 'Death note',
    imagem: 'https://skylimitidiomas.com.br/wp-content/uploads/2022/06/anime.jpg'
  },
 
  {
    nome: 'Attack on Titan',
    imagem: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg'
  },
  {
    nome: 'My Hero Academia',
    imagem: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg'
  },
  {
    nome: 'Demon Slayer',
    imagem: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg'
  },
  {
    nome: 'One Piece',
    imagem: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg'
  },
  
];


  return (
    <div className="container">
      <header className="header"><Menu></Menu></header>
      <nav className="nav">
        
       <div className="m-3">
      <h5>Lista de Animes:</h5>

      <ul className='list-group'>
        {animes.map((a, index)=>(
          <li key={index} className='list=group-item'>
            <h5 className='text-center'>{a.nome}</h5>
            <a href='#'>
              <img src={a.imagem}></img>
            </a>
          </li>
        ))}

      </ul>
      </div>
      </nav>
      <main className="main">
        <div className=" text-center mt-5">
      <h1 className="text-primary">Tudo sobre Animes!</h1>
      <Card nome= 'mirai nikki' texto = 'Mirai Nikki, também conhecido como "Diário do Futuro", é um anime de suspense psicológico que mistura ação e mistério, girando em torno de um jogo mortal envolvendo diários que preveem o futuro. A história acompanha Yukiteru Amano, um garoto solitário que recebe um diário especial e é forçado a participar de uma batalha de vida ou morte contra outros portadores desses diários. Com reviravoltas intensas e personagens complexos, Mirai Nikki explora temas como destino, confiança e sobrevivência.' imagem= 'https://photos.enjoei.com.br/mirai-nikki-manga-vol-2-80661244/800x800/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xNzA4NDg5NC80NGNmZWVhNTg3ZTJlOGQyZGUzMWFmZjliMTI1OTUxYy5qcGc'/>
            <Card nome= 'Toradora'
             texto = ' toradora é uma comédia romântica japonesa que acompanha a vida de Ryuuji Takasu, um garoto gentil com um olhar intimidador, e Taiga Aisaka, uma garota pequena e explosiva. Apesar das suas diferenças, eles formam uma amizade improvável para ajudar um ao outro a conquistar seus respectivos interesses amorosos. Ao longo da história, eles descobrem mais sobre si mesmos e sobre o verdadeiro significado do amor e da amizade, em meio a situações engraçadas e emocionantes.' imagem= 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/G6P8PXJW6-backdrop_wide'/>
      <Card nome= 'Re: zero' texto = 'Re:Zero é um anime de fantasia e drama que acompanha Subaru Natsuki, um jovem comum que é misteriosamente transportado para um mundo paralelo. Lá, ele descobre que possui a habilidade de voltar no tempo toda vez que morre, revivendo eventos e tentando mudar seu destino para proteger as pessoas que ama. A série explora temas profundos como sofrimento, esperança e resiliência, enquanto Subaru enfrenta desafios intensos e inimigos poderosos em sua busca por sobrevivência.' imagem= 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/5525651c53b49243de6835134651192c.jpg'/>

    </div>
</main>
   
      <footer className="footer">Rodapé</footer>
    </div>
  );
}
