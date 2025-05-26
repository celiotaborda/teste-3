var wms_layers = [];

var format_vet010cm_0 = new ol.format.GeoJSON();
var features_vet010cm_0 = format_vet010cm_0.readFeatures(json_vet010cm_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vet010cm_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vet010cm_0.addFeatures(features_vet010cm_0);
var lyr_vet010cm_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vet010cm_0, 
                style: style_vet010cm_0,
                popuplayertitle: 'vet 0-10 cm',
                interactive: true,
                title: '<img src="styles/legend/vet010cm_0.png" /> vet 0-10 cm'
            });

lyr_vet010cm_0.setVisible(true);
var layersList = [lyr_vet010cm_0];
lyr_vet010cm_0.set('fieldAliases', {'VALUE': 'VALUE', });
lyr_vet010cm_0.set('fieldImages', {'VALUE': '', });
lyr_vet010cm_0.set('fieldLabels', {'VALUE': 'hidden field', });
lyr_vet010cm_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});