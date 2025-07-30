const apiKey = 'b5j389L4AmaDTx7nQOwCghdhoSHSVphXXbosAOad';

const url = `https://api.watchmode.com/v1/releases/?apiKey=${apiKey}`;

export const hacerPeticion = async()=>{
  const response = await fetch(url);
  const json = await response.json();
  console.log(json.releases)
  return json.releases;

}