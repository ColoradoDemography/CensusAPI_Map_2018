
module.exports = function(cMap, updatequerysearchstring, changeall, filtercolorschemes){
  
  //START ALL FUNCTIONS- DO THEY NEED TO BE WITHIN DOCUMENT READY?

        //change data theme
        $('input[name=optionsRadios]:radio').change(function() {
            cMap.params.v = this.value;
            updatequerysearchstring();
            cMap.createnewtable = 0;
            changeall('yes', '1');
        });

        //change colorscheme
        $('input[name=schemeRadios]:radio').change(function() {
            cMap.params.cs = this.value;
            updatequerysearchstring();
            changeall('no', '0');
        });

        //change geo //change advanced dialog text, change minZoom level
        $('input[name=geoRadios]:radio').change(function() {

            cMap.params.s = $('input:radio[name ="geoRadios"]:checked').val();

            if (cMap.params.s === '50') {
                cMap.map.options.minZoom = 4;
                $('#advgeo').text('counties');
            }
            if (cMap.params.s === '40') {
                cMap.map.options.minZoom = 4;
                $('#advgeo').text('states');
            }
            if (cMap.params.s === '140') {
                cMap.map.options.minZoom = 9;
                $('#advgeo').text('tracts');
            }
            if (cMap.params.s === '150') {
                cMap.map.options.minZoom = 9;
                $('#advgeo').text('block groups');
            }
            if (cMap.params.s === '160') {
                cMap.map.options.minZoom = 9;
                $('#advgeo').text('places');
            }


            updatequerysearchstring();
            changeall('yes', '0');
        });



        //change in classes dropdown
        $('#classes').change(function() {
            cMap.params.cl = parseInt(this.value, 10);
            updatequerysearchstring();
            filtercolorschemes();
        });
      
      
  
}