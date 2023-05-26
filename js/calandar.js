window.onload = function () {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Month and Year
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.getElementById("monthAndYear").innerText =
    monthNames[month] + " " + year;

  // Calendar
  const calendarTable = document.getElementById("calandar");
  let output =
    "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>";

  for (let i = 0; i < firstDayOfMonth; i++) {
    output += "<td></td>";
  }

  for (let i = 1; i <= daysInMonth; i++) {
    if ((i + firstDayOfMonth) % 7 === 1) {
      output += "</tr><tr>";
    }
    output += `<td>${i}</td>`;
  }

  output += "</tr>";
  calendarTable.innerHTML = output;
};
