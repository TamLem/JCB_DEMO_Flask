import imp
from application import app
from flask import render_template, url_for, Response
import pandas as pd
import json 
import plotly 
import numpy as np
import plotly.express as px

def get_df():
	df = pd.DataFrame(np.random.randint(0, 1000, 10), columns=['a'])
	df['b'] = df['a'] % 10
	return df

@app.route('/')
def index():
	#serve html page
	return render_template('index.html',  title='Home')

@app.route('/data')
def data():
	#return raw data as json	
	return Response(get_df().to_json(orient='values'), mimetype='application/json')

@app.route('/api/data')
def apiData():
	#returns graph data as json
	fig = px.scatter(get_df(), x='a', y='b', color='b', title="Random numbers vs modulo 10")
	fig_json = json.dumps(fig, cls=plotly.utils.PlotlyJSONEncoder)
	return Response(fig_json, mimetype='application/json')
