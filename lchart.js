const lctx = document.getElementById("linechart");

new Chart(lctx, {
  type: "line",
  data: {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Sales",
        data: [30, 55, 70, 80, 60, 40, 70],
        borderWidth: 1,
        borderColor: "#e49a99",
        backgroundColor: "#e49a99",
        color: "#8a4243",
        fontColor: "fff",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: "#ebd4cc",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ebd4cc", // Set the x-axis label color
        },
      },
      y: {
        ticks: {
          color: "#ebd4cc", // Set the y-axis label color
        },
      },
    },
  },
});
