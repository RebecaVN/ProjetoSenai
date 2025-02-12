//configuração padrao que os docs pedem 
window.sr = ScrollReveal({reset: true});

//barra de pesquisa
sr.reveal(' .pesquisar',{ 
  duration: 1000,
  distance: '300px',
  scale: 1,
  origin: 'top',
  distance: '50px',
  delay:500
});

///
//PAG de LOGIN

    //- eclipses
sr.reveal('.eclipses .img',{ 
  duration: 1000,
  origin: 'right',
  distance: '30px',
  delay: 1000
});
sr.reveal('.eclipse-1',{ 
  duration: 1000,
  origin: 'right',
  distance: '30px',
  delay: 500
});
sr.reveal('.eclipse-2',{ 
  duration: 1000,
  origin: 'right',
  distance: '40px',
  delay: 750
});
sr.reveal('.eclipse-3',{ 
  duration: 1000,
  origin: 'right',
  distance: '50px',
  delay: 950
});
/////////
sr.reveal('.botoes_box',{ 
  duration: 1000,
  origin: 'top',
  distance: '50px',
});

sr.reveal('.input',{ 
  duration: 1000,
  origin: 'right',
  distance: '50px',
});
sr.reveal('#infosAcess a , .input_entrar',{ 
  duration: 1000,
  origin: 'right',
  distance: '50px',
});
sr.reveal('.gestao_link',{ 
  duration: 1000,
  origin: 'left',
  distance: '50px',
});

///////////////////////

//PAG INDEX
sr.reveal('.corpo-index .imagem-index',{ 
  duration: 1000,
  origin: 'left',
  distance: '50px',
});
sr.reveal('.corpo-index .container-texto h2',{ 
  duration: 1500,
  origin: 'right',
  distance: '50px',
});
sr.reveal('.corpo-index .container-texto p',{ 
  duration: 1500,
  origin: 'left',
  distance: '70px',
});

sr.reveal('.corpo-index .container-texto button',{ 
  duration: 1500,
  origin: 'rigth',
  distance: '70px',
});
///////////////////////

//PAG Home GESTAO
sr.reveal('#main_homeGestao .titulo',{ 
  duration: 1000,
  origin: 'right',
  distance: '50px',
});
sr.reveal('#main_homeGestao .section_cards ',{ 
  duration: 1000,
  origin: 'top',
  distance: '50px',
});
sr.reveal('#main_homeGestao .section_cards .card .img img ',{ 
  duration: 1000,
  origin: 'top',
  distance: '50px',
  delay: 300
});
sr.reveal('#main_homeGestao .section_cards .card .btn',{ 
  duration: 1000,
  origin: 'top',
  distance: '50px',
  delay: 300
});
///////////////////////


//REVEAL HOME PROFESSOR//
sr.reveal('#main_homeProfessor .btnCriarSala',{ 
  duration: 1000, // Duração da animação em milissegundos
  scale: 1, // Escala final (100%)
  opacity: 1, // Opacidade final (100%)
  distance: '150px', // Distância de deslocamento
  origin: 'top'
});
sr.reveal('#main_homeProfessor .bem-vindo',{ 
  duration: 1000, // Duração da animação em milissegundos
  scale: 1, // Escala final (100%)
  opacity: 1, // Opacidade final (100%)
  distance: '150px', // Distância de deslocamento
  origin: 'top',
  delay:500
});
sr.reveal('#main_homeProfessor .pesquisa',{ 
  duration: 1000,
  scale: 1,
  opacity: 1,
  distance: '150px',
  origin: 'right'
});
sr.reveal('#main_homeProfessor .card',{ 
  duration: 1000,
  scale: 1,
  opacity: 1,
  distance: '100px',
  origin: 'left'
});
sr.reveal('#main_homeProfessor .card',{ 
  duration: 1000,
  scale: 1,
  opacity: 1,
  distance: '100px',
  origin: 'left'
});
/////////////////


///TABELAS
sr.reveal('#body_tables .row__title',{ 
  duration: 1000,
  scale: 1,
  opacity: 1,
  distance: '200px',
  origin: 'top'
});
sr.reveal('#body_tables .table__th',{ 
  duration: 1000,
  scale: 1,
  opacity: 1,
  distance: '200px',
  origin: 'top',
  delay: 120
});
sr.reveal('#body_tables .table-row__td',{ 
  duration: 1000,
  scale: 1,
  opacity: 0,
  distance: '100px',
  origin: 'left',
});
sr.reveal('#body_tables .table-row__img',{ 
  duration: 1000,
  scale: 1.5,
  opacity: 1,
  distance: '100px',
  origin: 'top',
  delay:550
});
//////

///MAQUINAS DA TURMA
sr.reveal('#main_maquinasDaTurmas .bem-vindo',{ 
  duration: 1000,
  distance: '300px',
  origin: 'top',
});
sr.reveal('#main_maquinasDaTurmas .bem-vindo',{ 
  duration: 1000,
  distance: '300px',
  origin: 'top',
});
sr.reveal('.maquinas .card',{ 
  duration: 1000,
  distance: '300px',
  origin: 'right',
});
sr.reveal('.maquinas .card img',{ 
  duration: 1000,
  distance: '100px',
  origin: 'top',
  delay:550
});
sr.reveal('.maquinas .card h2',{ 
  duration: 1000,
  distance: '40px',
  origin: 'bottom',
  delay:400
});

///

//FORMULARIOS DE EDITAR PERFIL
sr.reveal('#main_formPerfil .container_form ',{ 
  duration: 1000,
  distance: '70px',
  origin: 'top',
});
sr.reveal('#main_formPerfil .container_form .input ',{ 
  duration: 1000,
  distance: '200px',
  origin: 'top',
});
sr.reveal('#main_formPerfil .container_form img ',{ 
  duration: 1000,
  distance: '200px',
  origin: 'top',
  delay:800
});
sr.reveal('#main_formPerfil .container_form #imgEditIcon ',{ 
  duration: 1000,
  distance: '80px',
  origin: 'top',
  delay:500
});

////

///CADASTRAR CATEGORIA DE MAQUINA

sr.reveal('.form_modal .checkboxes_section',{ 
  duration: 1000,
  distance: '200px',
  origin: 'left',
});
sr.reveal('.form_modal .checkboxes_section .checkboxes .add',{ 
  duration: 1000,
  distance: '200px',
  origin: 'left',
  delay: 700
});
sr.reveal('.form_modal .checkboxes_section .checkboxes .titulo i',{ 
  duration: 1000,
  distance: '200px',
  origin: 'top',
  delay: 700
});
sr.reveal('.form_modal #submitCadastrar',{ 
  duration: 1000,
  distance: '200px',
  origin: 'left',
  delay: 650
});
sr.reveal('.form_modal #section_input_img',{ 
  duration: 1000,
  distance: '200px',
  origin: 'bottom',
  delay: 400
});
/// FIM CADASTRAR CATEGORIA DE MAQUINA