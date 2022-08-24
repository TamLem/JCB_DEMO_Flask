var baseUrl = 'http://localhost:5000/api';

async function loadGraph() {

	let res = await fetch(baseUrl + '/data');

	let graphData = await res.json();
	if (graphData.error) {
		let errorArea = document.getElementById('api-error');
		errorArea.innerHTML = graphData.error;
		console.log(graphData.error);
		return;
	}
	let plotArea = document.getElementById("plotly-div");
	Plotly.newPlot(plotArea, graphData, {});
	console.log(graphData);
}