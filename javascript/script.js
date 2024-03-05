const row = document.querySelector('.row-teams');
const membriTeam =  [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    img : 'wayne-barnett-founder-ceo.jpg'

  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    img : 'angela-caroll-chief-editor.jpg'

  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    img : 'walter-gordon-office-manager.jpg'

  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    img : 'angela-lopez-social-media-manager.jpg'

  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    img : 'scott-estrada-developer.jpg'

  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    img : 'barbara-ramos-graphic-designer.jpg'

  }
]

for (let membroTeam of membriTeam){
  console.log(membroTeam);
  row.innerHTML += `
  <div class="col">
    <div class="card mb-4 rounded-0">
        <img src="assets/img/${membroTeam.img}" alt="${membroTeam.nome}">
        <div class="card-body text-center mb-2">
            <h5 class="card-title">${membroTeam.nome}</h5>
            <p class="card-text">${membroTeam.ruolo}</p>
        </div>
    </div>
  </div>
  `
}