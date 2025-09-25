function showLinksInfo() {
  
  const links = document.getElementsByTagName("a");

  
  const totalLinks = links.length;

  
  const firstLink = links[0].href;
  const lastLink = links[links.length - 1].href;

  console.log(`Número de enlaces: ${totalLinks}\nPrimer enlace: ${firstLink}\nÚltimo enlace: ${lastLink}`
  );
}

const button = document.createElement("button");
button.textContent = "Mostrar información de enlaces";
button.onclick = showLinksInfo;
document.body.appendChild(button);
