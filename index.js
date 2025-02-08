const buton1 = document.querySelector('.js-button1');
const buton2 = document.querySelector('.js-button2');
const buton3 = document.querySelector('.js-button3');
const renderZone = document.querySelector('.js-render-zone'); 

buton1.addEventListener('click',()=>{
  renderZone.innerHTML ='';
  for(i=1;i<=100;i++)
  {if(i<10)
    renderZone.innerHTML+=`<a target="_blank" href="fise1/e_f_electricitate_si_00${i}.pdf">Fisa ${i}</a>`
    else if(i<100)
      renderZone.innerHTML+=`<a target="_blank" href="fise1/e_f_electricitate_si_0${i}.pdf">Fisa ${i}</a>`
    else
    
      renderZone.innerHTML+=`<a target="_blank" href="fise1/e_f_electricitate_si_${i}.pdf">Fisa ${i}</a>`
  }

})


buton2.addEventListener('click',()=>{
  renderZone.innerHTML ='';
  for(i=1;i<=100;i++)
  {if(i<10)
    renderZone.innerHTML+=`<a target="_blank" href="fise2/e_f_electricitate_sii_00${i}.pdf">Fisa ${i}</a>`
    else if(i<100)
      renderZone.innerHTML+=`<a target="_blank" href="fise2/e_f_electricitate_sii_0${i}.pdf">Fisa ${i}</a>`
    else
    
      renderZone.innerHTML+=`<a target="_blank" href="fise2/e_f_electricitate_sii_${i}.pdf">Fisa ${i}</a>`
  }

})



buton3.addEventListener('click',()=>{
  renderZone.innerHTML ='';
  for(i=1;i<=100;i++)
  {if(i<10)
    renderZone.innerHTML+=`<a target="_blank" href="fise3/e_f_electricitate_siii_00${i}.pdf">Fisa ${i}</a>`
    else if(i<100)
      renderZone.innerHTML+=`<a target="_blank" href="fise3/e_f_electricitate_siii_0${i}.pdf">Fisa ${i}</a>`
    else
    
      renderZone.innerHTML+=`<a target="_blank" href="fise3/e_f_electricitate_siii_${i}.pdf">Fisa ${i}</a>`
  }

})