let roster = [];

function insertEntry() {
  const n = document.getElementById("nField").value.trim();
  const m = parseInt(document.getElementById("mField").value);
  const s = parseInt(document.getElementById("sField").value);
  const e = parseInt(document.getElementById("eField").value);

  if (!n || isNaN(m) || isNaN(s) || isNaN(e)) {
    alert("Fill all details correctly!");
    return;
  }

  const entry = { n, scores: { m, s, e } };
  roster.push(entry);

  document.getElementById("nField").value = "";
  document.getElementById("mField").value = "";
  document.getElementById("sField").value = "";
  document.getElementById("eField").value = "";

  showList();
}

function showList() {
  const box = document.getElementById("listBox");
  box.innerHTML = roster
    .map(x => `
      <div class="student">
        <strong>${x.n}</strong><br>
        Math: ${x.scores.m}, Science: ${x.scores.s}, English: ${x.scores.e}
      </div>
    `)
    .join("");
}

function generateReport() {
  if (roster.length === 0) {
    alert("No students available!");
    return;
  }

  const data = roster.map(x => {
    const vals = Object.values(x.scores);
    const sum = vals.reduce((a, b) => a + b, 0);
    const avg = (sum / vals.length).toFixed(2);
    return { n: x.n, sum, avg };
  });

  const top = data.reduce((a, b) => (b.sum > a.sum ? b : a), data[0]);

  const box = document.getElementById("reportBox");
  box.innerHTML = `
    <h2>Report</h2>
    <ul>
      ${data.map(r => `<li>${r.n}: Total = ${r.sum}, Average = ${r.avg}</li>`).join("")}
    </ul>
    <p><strong>Topper:</strong> ${top.n} with ${top.sum} marks</p>
  `;
}
