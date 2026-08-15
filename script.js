// ---------------------------------------------------------------
  // CONFIGURAÇÃO: substitua pelos links reais de checkout
  // ---------------------------------------------------------------
  const CHECKOUT_PACOTE_29 = "https://pay.cakto.com.br/3eotrhf_1041651"; // [LINK CHECKOUT PACOTE R$29,90]
  const CHECKOUT_AULA_10   = "https://pay.cakto.com.br/bzrqtwa_1041677";   // [LINK CHECKOUT EBOOK R$10,90]

  const modal = document.getElementById('upgradeModal');
  const buyTriggers = document.querySelectorAll('.buy-trigger');
  const closeBtn = document.getElementById('modalClose');
  const acceptBtn = document.getElementById('acceptOffer');
  const declineBtn = document.getElementById('declineOffer');

  function openModal(){
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => modal.classList.add('show'));
  }
  function closeModal(){
    modal.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => modal.classList.remove('active'), 250);
  }

  buyTriggers.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });

  acceptBtn.addEventListener('click', () => {
    window.location.href = CHECKOUT_PACOTE_29;
  });
  declineBtn.addEventListener('click', () => {
    window.location.href = CHECKOUT_AULA_10;
  });