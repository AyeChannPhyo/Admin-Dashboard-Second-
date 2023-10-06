const pctx = document.getElementById("piechart");

new Chart(pctx, {
  type: "pie",
  data: {
    labels: ["South Korea", "Japan", "UK", "France", "Thailand"],
    datasets: [
      {
        label: "# of Votes",
        data: [30, 25, 20, 15, 10],
        borderWidth: 1,
        backgroundColor: [
          "rgb(251, 130, 132)",
          "rgb(250, 205, 206)",
          "rgb(122, 64, 65)",
          "rgb(199, 163, 164)",
          "rgb(122, 100, 101)",
        ],
        borderColor: "#ebd4cc",       
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
  },
});
