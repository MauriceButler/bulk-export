var test = require('grape');

test('loads corect files', function(t){
    t.plan(1);
    var result = require('./things'),
        expected = {
            bar:{
                bar:true
            },
            foo:{
                foo:true
            }
        };

    t.deepEqual(result, expected, 'loaded correctly');
});

