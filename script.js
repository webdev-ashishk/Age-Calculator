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
  let now = new Date();

  let different = now - dob;

  // console.log(different);

  // let minute = Math.floor(different / (1000 * 60));
  let days = Math.floor(different / (1000 * 60 * 60 * 24));
  let _month = Math.floor(days * 0.0328767);
  let _year = Math.floor(days * 0.00273973);

  // console.log(`Minute: ${minute}`);
  console.log(`days: ${days}`);
  console.log(`month: ${_month}`);
  console.log(`Year: ${_year}`);
};
