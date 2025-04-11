document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("devForm");
  const nomeInput = document.getElementById("nomeCompleto");
  const techContainer = document.getElementById("tecnologiasContainer");
  const addTechBtn = document.getElementById("addTechBtn");

  const devs = [];

  addTechBtn.addEventListener("click", () => {
    const index = techContainer.children.length;
    const techDiv = document.createElement("div");
    techDiv.className = "tecnologia";

    techDiv.innerHTML = `
      <label>Nome da Tecnologia:
        <input type="text" name="techName" required>
      </label>
      <div class="radio-group">
        <label><input type="radio" name="exp${index}" value="0-2 anos" required> 0-2 anos</label>
        <label><input type="radio" name="exp${index}" value="3-4 anos"> 3-4 anos</label>
        <label><input type="radio" name="exp${index}" value="5+ anos"> 5+ anos</label>
      </div>
      <br>
      <button type="button" class="removeBtn">Remover</button>
    `;

    techDiv.querySelector(".removeBtn").addEventListener("click", () => {
      techContainer.removeChild(techDiv);
    });

    techContainer.appendChild(techDiv);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const dev = {
      nome: nomeInput.value,
      tecnologias: []
    };

    const techDivs = techContainer.querySelectorAll(".tecnologia");

    techDivs.forEach((div, i) => {
      const nomeTec = div.querySelector('input[name="techName"]').value;
      const tempo = div.querySelector(`input[name="exp${i}"]:checked`).value;

      dev.tecnologias.push({ nome: nomeTec, experiencia: tempo });
    });

    devs.push(dev);
    console.log("Desenvolvedor cadastrado:", dev);
    console.log("Todos os devs:", devs);

    form.reset();
    techContainer.innerHTML = "";
  });
});
