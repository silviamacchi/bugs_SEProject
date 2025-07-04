Version updated on 04/07/2025

The final project is based on 3 main components: database, server and dashboard.

The database requires PostgreSQL and PostGIS installed on the pc, along with the interface of pgAdmin4. To populate the database we provided a document called "Database_setup", that explains in details how to download the data from  Regione Lombardia website and how to import them in the database.

Additionally to these data, we also used a geoJSON file that was too heavy to be saved in GitHub, the file is available ad this link [contour_lines.geojson](https://polimi365-my.sharepoint.com/:u:/g/personal/10730715_polimi_it/ER-Nb97s89tEp1qF20j_ZucBabcOMO2OVeqh-gBNF3GZaw?e=UeGZn9), and once downloaded it should be imported in the "DATA" folder. This document won't be saved in the database, because it doesn't contain data regarding air quality, but it's just for visualization porpouses on the map.

Both the server and the dashboard are Jupiter notebooks. We suggest to run them in VSCode, starting from the "Server" file, followed by the "Dashboard" file. Once the Dashboard file is executed, the actual dashboard can be viewed in a browser using the URL "http://localhost:8089".

Here is a list of all the libraries we installed in our virtual environment: 

- python

- pandas

- geopandas

- seaborn

- flask

- sqlalchemy

- dash

- dash-leaflet

- leafmap