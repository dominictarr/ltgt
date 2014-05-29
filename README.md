# ltgt


# example

``` js
var ltgt = require('ltgt')

ltgt.start(range) //the start of the range
ltgt.end(range)   //the end of the range

//returns the lower/upper bound, whether it's inclusive or not.
ltgt.lowerBound(range)
ltgt.upperBound(range)

ltgt.lt(range)
ltgt.gt(range)
ltgt.lte(range)
ltgt.gte(range)

//return wether this is a reversed order
//(this is significant for start/end ranges
ltgt.reverse(range)
var filter = ltgt.filter(range)

filter(key) == true //if key contained in range.

ltgt.contains(range, key)

```


## License

MIT
