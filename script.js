const calculateAge = () => {
  let date = document.getElementById("dateField").value;
  let month = document.getElementById("monthField").value;
  let year = document.getElementById("yearField").value;

  console.log(date);
  console.log(month);
  console.log(year);

  if (date > 31) {
    alert("input valid date");
    return;
  }

  let dob = new Date(`${date} ${month} ${year}`);
  console.log(dob);
};
