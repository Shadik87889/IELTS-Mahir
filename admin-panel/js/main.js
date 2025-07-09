document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".sidebar-nav a");
  const currentUrl = window.location.pathname.split("/").pop(); // e.g., 'dashboard.html'

  links.forEach((link) => {
    const linkUrl = link.getAttribute("href");
    if (linkUrl === currentUrl) {
      link.classList.add("active");
    }

    // Optional: allow click to still override if JS-only SPA
    link.addEventListener("click", () => {
      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
  const ctx = document.getElementById("dashboardChart").getContext("2d");
  const currencySelector = document.getElementById("currencySelector");
  const timeframeButtons = document.querySelectorAll(".timeframe-button");
  const chartTypeSwitch = document.getElementById("chartTypeSwitch");

  let currentCurrency = "$";
  let currentTimeframe = "Day";
  let currentChartType = "bar";

  const formatDateLabel = (offsetDays = 0) => {
    const date = new Date();
    date.setDate(date.getDate() - offsetDays);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  };

  const generateData = (timeframe) => {
    switch (timeframe) {
      case "Day":
        return {
          labels: [
            formatDateLabel(6),
            formatDateLabel(5),
            formatDateLabel(4),
            formatDateLabel(3),
            formatDateLabel(2),
            formatDateLabel(1),
            formatDateLabel(0),
          ],
          data: [50, 250, 180, 90, 150, 200, 300, 400],
        };
      case "Week":
        return {
          labels: [
            formatDateLabel(28),
            formatDateLabel(21),
            formatDateLabel(14),
            formatDateLabel(7),
            formatDateLabel(0),
          ],
          data: [820, 650, 720, 580, 900],
        };
      case "Month":
        return {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          data: [2800, 3200, 2900, 3400],
        };
      default:
        return { labels: [], data: [] };
    }
  };

  const createChart = (type, labels, data) => {
    const threshold1 = 100;
    const threshold2 = 300;

    let backgroundColor;

    if (type === "bar") {
      backgroundColor = data.map((value) =>
        value <= threshold1 ? " #643b2f " : " #f0734e"
      );
    } else {
      backgroundColor = "rgba(78, 115, 223, 0.2)";
    }

    const datasetConfig = {
      label: "Revenue",
      data: data,
      backgroundColor,
      borderColor:
        type === "bar"
          ? data.map((value) => (value <= threshold1 ? "#643b2f" : "#f0734e"))
          : "#f0734e",
      fill: type === "line",
      tension: 0.4,
      borderWidth: 2,
      borderRadius: type === "bar" ? 6 : 0,
      pointRadius: 4,
    };

    if (type === "bar") {
      datasetConfig.barThickness = 40;
    }

    return new Chart(ctx, {
      type,
      data: {
        labels,
        datasets: [datasetConfig],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => `${currentCurrency}${ctx.parsed.y}`,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (v) => `${currentCurrency}${v}`,
              font: { size: 14 },
            },
            grid: { color: "#eaeaea" },
          },
          x: {
            ticks: { font: { size: 14 } },
            grid: { display: false },
          },
        },
      },
    });
  };

  let dashboardChart = null;

  const updateChart = () => {
    if (dashboardChart) dashboardChart.destroy();

    const { labels, data } = generateData(currentTimeframe);
    dashboardChart = createChart(currentChartType, labels, data);
  };

  currencySelector.addEventListener("change", function () {
    currentCurrency = this.value;
    updateChart();
  });

  timeframeButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      timeframeButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      currentTimeframe = this.dataset.timeframe;
      updateChart();
    });
  });

  chartTypeSwitch.addEventListener("change", function () {
    currentChartType = this.value;
    updateChart();
  });

  updateChart();
});
currencySelector.addEventListener("change", function () {
  currentCurrency = this.value;

  // Update chart
  updateChart();

  // Update summary card currency values
  document.getElementById(
    "revenueAmount"
  ).textContent = `${currentCurrency}8,500`;
  document.getElementById(
    "pendingPayments"
  ).textContent = `${currentCurrency}2,300`;
});
