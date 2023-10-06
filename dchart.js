const dctx = document.getElementById("doughnut");

new Chart(dctx, {
  type: "doughnut",
  data: {
    labels: ["Liquid Blush", "Tinted Lip Oil", "Gel Eyeliner"],
    datasets: [
      {
        label: "# of Votes",
        data: [40, 30, 20],
        borderWidth: 1,
        backgroundColor: [
          "rgb(251, 130, 132)",
          "rgb(250, 205, 206)",
          "rgb(122, 64, 65)",
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
