window.dashExtensions = Object.assign({}, window.dashExtensions, {
    default: {
        function0: function(feature, latlng, context) {
            const p = feature.properties;
            if (p.type === 'circlemarker') {
                return L.circleMarker(latlng, radius = p._radius)
            }
            if (p.type === 'circle') {
                return L.circle(latlng, radius = p._mRadius)
            }
            return L.marker(latlng);
        },
        function1: function(feature) {
                return {
                    color: feature.properties.color_code || "blue",
                    weight: 1,
                    fillOpacity: 0.5
                };
            }

            ,
        function2: function(feature, layer) {
                if (feature.properties && feature.properties.prov_upper) {
                    layer.bindTooltip(feature.properties.prov_upper);
                }
            }

            ,
        function3: function(feature) {
            return {
                color: feature.properties.color || "blue",
                weight: 1,
                opacity: 0.6
            };
        }

    }
});