
function verificarIdade() {
  const data = new Date();
  const anoAtual = data.getFullYear();
  const anoDigitado = parseInt(document.getElementById('ano').value);
  const resultado = document.getElementById('resultado');
  const generoSelecionado = document.querySelector('input[name="radsexo"]:checked');

  if (isNaN(anoDigitado) || anoDigitado <= 0 || anoDigitado > anoAtual || !generoSelecionado) {
      resultado.innerHTML = '<p>[ERRO] Verifique os dados e tente novamente.</p>';
  } else {
      const idade = anoAtual - anoDigitado;
      const genero = generoSelecionado.id === 'masc' ? 'Homem' : 'Mulher';
      let imagemSrc;

      if (idade > 0 && idade < 10) {
          imagemSrc = genero === 'Homem' ? 'img/bebe-homem.jpg' : 'img/bebe-mulher.jpg';
      } else if (idade > 11 && idade < 30) {
          imagemSrc = genero === 'Homem' ? 'img/jovem-homem.jpg' : 'img/jovem-mulher.jpg';
      } else if (idade > 31 && idade < 50) {
          imagemSrc = genero === 'Homem' ? 'img/homem-adulto.jpg' : 'img/mulher-adulta.jpg';
      } else if (idade > 50) {
          imagemSrc = genero === 'Homem' ? 'img/idoso-homem.jpg' : 'img/idosa-mulher.jpg';
      } else {
          imagemSrc = genero === 'Homem' ? 'img/homem.png' : 'img/mulher.png';
      }

      resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`;
      resultado.innerHTML += `<img src="${imagemSrc}" id="foto">`;
  }
}
