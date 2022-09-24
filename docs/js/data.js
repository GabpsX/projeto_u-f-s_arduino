fetch('phmetro.txt')
  .then(response => response.text())
  .then(text => {
    const phmetro = text.split();
    document.getElementById("ph_copy").value = phmetro;
   
})


fetch('ciclador.txt')
  .then(response => response.text())
  .then(text => {
    const ciclador = text.split();
    document.getElementById('Ciclador_copy').value = ciclador;
})


fetch('wave.txt')
  .then(response => response.text())
  .then(text => {
    const wave = text.split();
    document.getElementById('wave').value = wave;
})







