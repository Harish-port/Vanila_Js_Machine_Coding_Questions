(async function () {
  const data = await fetch("./data.json");
  const res = await data.json();
  console.log(res, "response");
  let employees = res;
  let selectedEmployee = employees[0];
  let selectedEmployeeId = employees[0].id;
  const employeeList = document.querySelector(".employees__names--list");
  const employeeInfo = document.querySelector(".employees__single--info");
  // Add Employee Logic
  const createEmployee = document.querySelector(".createEmployee");
  const addEmployeeModal = document.querySelector(".addEmployee");
  const addEmployeeForm = document.querySelector(".addEmployee");
  createEmployee.addEventListener("click", () => {
    addEmployeeModal.style.display = "flex";
  });
  addEmployeeModal.addEventListener("click", () => {
    if (e.target.className === "addEmployee") {
      addEmployeeModal.style.display = "none";
    }
  });
  addEmployeeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(addEmployeeForm);
    const values = [formData.entries()];
    let empData = {};
    values.forEach((val) => {
      empData[val[0]];
    });
  });
  // Select Employee Logic
  employeeList.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN" && selectedEmployeeId !== e.target.id) {
      selectedEmployeeId = e.target.id;
      renderEmployees();
      renderSingleEmployee();
    }
  });

  // Render All Employees Logic - START
  const renderEmployees = () => {
    employeeList.innerHTML = "";
    employees.forEach((emp) => {
      const employee = document.createElement("span");
      employee.classList.add("employees__names--item");
      if (parseInt(selectedEmployeeId, 10) === emp.id) {
        employee.classList.add("selected");
        selectedEmployee = emp;
      }
      employee.setAttribute("id", emp.id);
      employee.innerHTML = `${emp.firstName} ${emp.lastName} <i class="employeeDelete">❌</i>`;
      employeeList.append(employee);
    });
  };

  const renderSingleEmployee = () => {
    employeeInfo.innerHTML = `
    <img src="${selectedEmployee.imageUrl}"/>
    <span class='employees__single--info'>${selectedEmployee.firstName} ${selectedEmployee.lastName} (${selectedEmployee.age})</span>
    <span>${selectedEmployee.address}</span>
    <span>${selectedEmployee.email}</span>
    <span>Mobile - ${selectedEmployee.contactNumber}</span>
    <span>DOB - ${selectedEmployee.dob}</span>
    `;
  };
  if (selectedEmployee) renderSingleEmployee();
  renderEmployees();
})();
