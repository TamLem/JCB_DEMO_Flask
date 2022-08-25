var baseUrl = 'http://localhost:5000/api';

async function loadGraph() {
	
	let res = await fetch(baseUrl + '/data');
	
	if (!res.ok) {
		let errorArea = document.getElementById('api_error');
		errorArea.style = 'display: block';
		return;
	}
	let graphData = await res.json();
	let plotArea = document.getElementById("plotly-div");
	Plotly.newPlot(plotArea, graphData, {});
	console.log(graphData);
}