// ============================================================================
// GRAINSHIELD - charts.js
// Gráficos interativos com Chart.js
// ============================================================================

// Carregar Chart.js do CDN
const chartScript = document.createElement('script');
chartScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js';
document.head.appendChild(chartScript);

// Função para inicializar todos os gráficos
function initCharts() {
  chartScript.onload = function() {
    // Cores personalizadas
    const colors = {
      primary: '#2B6F3D',
      secondary: '#185FA5',
      accent: '#F2A623',
      success: '#22C55E',
      danger: '#EF4444',
      light: '#E8F3ED',
      lightText: 'rgba(43, 111, 61, 0.1)'
    };

    // Gráfico 1: Motoristas x Número de Viagens
    const chart1Element = document.getElementById('grafico1');
    if (chart1Element) {
      new Chart(chart1Element, {
        type: 'bar',
        data: {
          labels: ['Motorista A', 'Motorista B', 'Motorista C', 'Motorista D', 'Motorista E'],
          datasets: [{
            label: 'Número de Viagens',
            data: [12, 19, 8, 15, 11],
            backgroundColor: colors.primary,
            borderColor: colors.primary,
            borderWidth: 1,
            borderRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { stepSize: 5 }
            }
          }
        }
      });
    }

    // Gráfico 2: Motoristas x Perdas de Carga
    const chart2Element = document.getElementById('grafico2');
    if (chart2Element) {
      new Chart(chart2Element, {
        type: 'line',
        data: {
          labels: ['Motorista A', 'Motorista B', 'Motorista C', 'Motorista D', 'Motorista E'],
          datasets: [{
            label: 'Perdas (kg)',
            data: [450, 620, 280, 550, 390],
            backgroundColor: colors.lightText,
            borderColor: colors.accent,
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: colors.accent,
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 6
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true }
          },
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    }

    // Gráfico 3: Análise de Perdas
    const chart3Element = document.getElementById('grafico3');
    if (chart3Element) {
      new Chart(chart3Element, {
        type: 'doughnut',
        data: {
          labels: ['Vedação Inadequada', 'Estradas Ruins', 'Manutenção Veículo', 'Planejamento Logístico', 'Outros'],
          datasets: [{
            data: [35, 25, 20, 15, 5],
            backgroundColor: [
              colors.primary,
              colors.secondary,
              colors.accent,
              colors.success,
              '#d1d5db'
            ],
            borderColor: '#fff',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom'
            }
          }
        }
      });
    }

    // Gráfico 4: Comparativo Antes/Depois
    const chart4Element = document.getElementById('grafico4');
    if (chart4Element) {
      new Chart(chart4Element, {
        type: 'bar',
        data: {
          labels: ['Perda %'],
          datasets: [
            {
              label: 'Antes (Vedação Inadequada)',
              data: [5.92],
              backgroundColor: colors.danger,
              borderColor: colors.danger,
              borderWidth: 1
            },
            {
              label: 'Depois (Com Vedação)',
              data: [1.34],
              backgroundColor: colors.success,
              borderColor: colors.success,
              borderWidth: 1
            }
          ]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          scales: {
            x: { beginAtZero: true, max: 7 }
          },
          plugins: {
            legend: { display: true }
          }
        }
      });
    }

    // Gráfico 5: Distribuição de Perdas por Atividade
    const chart5Element = document.getElementById('grafico5');
    if (chart5Element) {
      new Chart(chart5Element, {
        type: 'bar',
        data: {
          labels: ['Carregamento', 'Transporte', 'Descarregamento', 'Armazenagem'],
          datasets: [{
            label: 'Perdas (%)',
            data: [2.5, 1.8, 1.2, 0.8],
            backgroundColor: [colors.primary, colors.secondary, colors.accent, colors.success],
            borderRadius: 4,
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          indexAxis: 'y',
          plugins: { legend: { display: false } },
          scales: { x: { beginAtZero: true } }
        }
      });
    }

    // Gráfico 6: Comparativo Regional
    const chart6Element = document.getElementById('grafico6');
    if (chart6Element) {
      new Chart(chart6Element, {
        type: 'radar',
        data: {
          labels: ['BR-163', 'BR-365', 'Rodovias Estaduais', 'BR-116', 'BR-101'],
          datasets: [{
            label: 'Taxa de Perda (%)',
            data: [2.5, 2.1, 1.8, 1.6, 1.4],
            borderColor: colors.primary,
            backgroundColor: colors.lightText,
            pointBackgroundColor: colors.primary,
            pointBorderColor: '#fff',
            pointBorderWidth: 2
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: true }
          },
          scales: {
            r: { beginAtZero: true, max: 3 }
          }
        }
      });
    }
  };
}

// Chamar ao carregar página
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCharts);
} else {
  initCharts();
}
