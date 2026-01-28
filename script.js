function filterContent() {
  const search = document.getElementById('search').value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  cards.forEach(card=>{
    const title = card.querySelector('h3').innerText.toLowerCase();
    const type = card.dataset.type.toLowerCase();
    const platform = card.dataset.platform.toLowerCase();
    if(title.includes(search) || type.includes(search) || platform.includes(search)){
      card.style.display='block';
    } else {
      card.style.display='none';
    }
  });
}

function randomSuggestion() {
  const cards = document.querySelectorAll('.card');
  const visibleCards = Array.from(cards).filter(c=>c.style.display!=='none');
  if(visibleCards.length===0) return;
  const rand = visibleCards[Math.floor(Math.random()*visibleCards.length)];
  rand.scrollIntoView({behavior:'smooth'});
  rand.style.border='2px solid #ff0';
  setTimeout(()=>{rand.style.border='none';},2000);
    }
