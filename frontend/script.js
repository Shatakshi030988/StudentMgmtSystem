const form = document.getElementById("studentForm");
const list = document.getElementById("studentList");
const baseUrl = "http://localhost:9090/api/students/select";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const student = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    course: document.getElementById("course").value
  };

  await fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  });

  form.reset();
  loadStudents();
});

async function loadStudents() {
  const res = await fetch(baseUrl);
  const data = await res.json();
  list.innerHTML = "";
  data.forEach(s => {
    const li = document.createElement("li");
    li.textContent = `${s.name} - ${s.course}`;
    list.appendChild(li);
  });
}

loadStudents();
