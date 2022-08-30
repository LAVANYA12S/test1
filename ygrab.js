<script src="//code.jquery.com/jquery-2.2.4.min.js"></script>
<script src="js/ygrab.js"></script>
<script>        
$(function() {

var data = [
    {
        url: 'https://www.diariomunicipal.sc.gov.br/?r=site/index&q=abertura+categoria%3ALicita%C3%A7%C3%B5es&AtoASolrDocument_page=1', // url string rquired
        selector: 'div.post', // selector string rquired
        loop: true, // each boolean rquired
        result: [
            {
                name: 'span', // key string rquired
                find: 'quiet', // selector child string rquired
                grab: {
                    by: 'date', // attribut string rquired
                    value: '' // attribut value string optional
                }
            },
            {
                name: 'link',
                find: 'h3 a',
                grab: {
                    by: 'diar',
                    value: 'href'
                }
                {
                  name: 'span',
                find: 'em',
                grab: {
                    by: 'abertura',
                    value: ''  
                }
            },
            // ---- new selector ---- //
        ]
    },
    // ---- new website url ---- //
];

ygrab(data, function(result) {
    console.log(JSON.stringify(result, null, 2));
});


});
</script>