const menu = document.getElementById("left-menu");
const menuBtn = document.getElementById("menu-btn");

function toggleMenu() {
    menu.classList.toggle("active");
}

function closeMenu() {
    menu.classList.remove("active");
}

document.addEventListener("click", function (e) {

    // Only on mobile/tablet
    if (window.innerWidth <= 950) {

        // If the click is outside the menu and outside the menu button
        if (
            !menu.contains(e.target) &&
            !menuBtn.contains(e.target)
        ) {
            closeMenu();
        }
    }
});
function loadPage(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error("Page not found.");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("content").innerHTML = data;

            if (window.innerWidth <= 950) {
                closeMenu();
            }

            if (page === "dashboard.html") {
                initializeDashboard();
            }
        })
        .catch(error => {
            document.getElementById("content").innerHTML =
                "<h2>Failed to load page.</h2>";
            console.error(error);
        });
}


function initializeDashboard() {

    // Attendance Chart
    new Chart(document.getElementById("attendanceChart"), {
            type: "bar",

    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

        datasets: [
            {
                label: "Present",
                data: [85, 80, 98, 91, 85, 72, 65],
                backgroundColor: "#FDB515",
                borderRadius: 8,
                borderSkipped: false,
                barThickness: 18
            },
            {
                label: "Absent",
                data: [5, 12, 8, 9, 15, 6, 3],
                backgroundColor: "#3D5CAA",
                borderRadius: 8,
                borderSkipped: false,
                barThickness: 18
            }
        ]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                    padding: 20,
                    boxWidth: 10,
                    font: {
                        size: 13
                    }
                }
            },

            tooltip: {
                enabled: true
            }
        },

        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: "#555",
                    font: {
                        size: 12
                    }
                }
            },

            y: {
                beginAtZero: true,
                max: 100,

                ticks: {
                    stepSize: 20,
                    color: "#555",
                    font: {
                        size: 12
                    }
                },

                grid: {
                    color: "#E8EDF5"
                }
            }
        },

        animation: {
            duration: 1200,
            easing: "easeOutQuart"
        }
    }
    });

    // Grade Chart
    new Chart(document.getElementById("gradeChart"), {
        type:"doughnut",

data:{

labels:["A","B","C","D"],

datasets:[{

data:[18,24,31,19,8],

backgroundColor:[

"#19c37d",

"#3b82f6",

"#7c4ce3",

"#f59e0b",

"#ef4444"

],

borderWidth:0,

hoverOffset:8

}]

},

options:{

cutout:"68%",

plugins:{

legend:{

position:"bottom",

labels:{

usePointStyle:true,

padding:20,

boxWidth:10

}

}

}

}
    });

    // Line Chart
    const ctx = document.getElementById("lineChart").getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
    gradient.addColorStop(0, "rgba(59,130,246,0.30)");
    gradient.addColorStop(1, "rgba(59,130,246,0.02)");
    new Chart(ctx, {
            type: "line",
    data: {
        labels: [
            "Sep",
            "Oct",
            "Nov",
            "Dec",
            "Jan",
            "Feb",
            "Mar"
        ],

        datasets: [{
            label: "Average Score",

            data: [
                72,
                75,
                68,
                80,
                84,
                79,
                88
            ],

            borderColor: "#3b82f6",
            backgroundColor: gradient,

            fill: true,

            borderWidth: 3,

            pointRadius: 4,
            pointHoverRadius: 6,

            pointBackgroundColor: "#3b82f6",
            pointBorderColor: "#3b82f6",

            tension: 0.4
        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {
                display: false
            },

            tooltip: {
                backgroundColor: "#ffffff",
                titleColor: "#111827",
                bodyColor: "#374151",
                borderColor: "#dbe4f0",
                borderWidth: 1,
                displayColors: false,
                padding: 12,

                callbacks: {
                    label: function(context) {
                        return "Score: " + context.parsed.y;
                    }
                }
            }

        },

        scales: {

            x: {

                grid: {
                    display: false
                },

                border: {
                    display: false
                },

                ticks: {
                    color: "#64748b",
                    font: {
                        size: 13
                    }
                }

            },

            y: {

                min: 60,
                max: 100,

                ticks: {
                    stepSize: 10,
                    color: "#64748b",
                    font: {
                        size: 13
                    }
                },

                border: {
                    display: false
                },

                grid: {
                    color: "#e5e7eb",
                    borderDash: [4, 4],
                    drawTicks: false
                }

            }

        },

        interaction: {
            mode: "index",
            intersect: false
        },

        elements: {

            line: {
                capBezierPoints: true
            }

        }

    }
    });

}











const profileBtn = document.getElementById("profileBtn");
const dropdown = document.getElementById("dropdown");

profileBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.classList.toggle("active");
});

document.addEventListener("click", function () {
    dropdown.classList.remove("active");
});

document.getElementById("logout").addEventListener("click", function (e) {
    e.preventDefault();

    Swal.fire({
        title: "Sign Out?",
        text: "Are you sure you want to sign out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Sign Out"
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear();
            sessionStorage.clear();

            window.location.href = "../index.html";
        }
    });
});





























const dateElement = document.getElementById("current-date");

const today = new Date();

const options = {
    weekday: "long",   // Monday
    year: "numeric",   // 2026
    month: "long",     // July
    day: "numeric"     // 9
};

dateElement.textContent = today.toLocaleDateString("en-US", options);


const searchdiv = document.querySelector(".search-box");
const searchbtn = document.getElementById("search-btn");
searchbtn.addEventListener("click",() =>{
    searchdiv.classList.toggle("active");
} );








